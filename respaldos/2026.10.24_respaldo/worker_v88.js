/**
 * Mi Control Financiero — Worker API v1
 * Deploy as a Cloudflare Worker. Bind D1 as DB; configure OPENAI_API_KEY as a secret
 * and ALLOWED_ORIGIN as https://castillopardo93-arch.github.io
 */
const json = (data, status = 200, origin = '') => new Response(JSON.stringify(data), {
 status, headers: { 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store',
 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods':'POST, OPTIONS',
 'Access-Control-Allow-Headers':'Content-Type', 'Vary':'Origin' }
});
const digest = async value => Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)))).map(b=>b.toString(16).padStart(2,'0')).join('');
export default {
 async fetch(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = env.ALLOWED_ORIGIN || 'https://castillopardo93-arch.github.io';
  if (origin && origin !== allowed) return json({error:'Origen no autorizado.'}, 403, allowed);
  if (request.method === 'OPTIONS') return new Response(null,{status:204,headers:{'Access-Control-Allow-Origin':allowed,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Access-Control-Max-Age':'86400','Vary':'Origin'}});
  if (request.method !== 'POST') return json({error:'Método no permitido.'},405,allowed);
  const url = new URL(request.url), route = url.pathname.replace(/\/$/,'');
  if (!['/chat','/proposals'].includes(route)) return json({error:'Ruta no encontrada.'},404,allowed);
  if (!env.DB) return json({error:'Almacenamiento no configurado.'},503,allowed);
  const ipHash = await digest((request.headers.get('CF-Connecting-IP') || 'unknown') + ':' + (env.RATE_LIMIT_SALT || 'configure-a-secret'));
  try {
   const count = await env.DB.prepare("SELECT count FROM rate_limits WHERE ip_hash=? AND window_start > datetime('now','-1 hour')").bind(ipHash).first();
   if (count && count.count >= 30) return json({error:'Límite temporal alcanzado. Inténtalo más tarde.'},429,allowed);
   await env.DB.prepare("INSERT INTO rate_limits(ip_hash,count,window_start) VALUES(?,1,datetime('now')) ON CONFLICT(ip_hash) DO UPDATE SET count=CASE WHEN window_start <= datetime('now','-1 hour') THEN 1 ELSE count+1 END, window_start=CASE WHEN window_start <= datetime('now','-1 hour') THEN datetime('now') ELSE window_start END").bind(ipHash).run();
   const body = await request.json();
   if (route === '/proposals') {
    const type = String(body.type || 'mejora').slice(0,30), proposal = String(body.proposal || '').trim(), contact = String(body.contact || '').trim();
    if (proposal.length < 8 || proposal.length > 2500) return json({error:'La propuesta debe tener entre 8 y 2500 caracteres.'},400,allowed);
    if (contact.length > 160 || (contact && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact))) return json({error:'El correo de contacto no es válido.'},400,allowed);
    const result = await env.DB.prepare('INSERT INTO proposals(type,proposal,contact,created_at,status) VALUES(?,?,?,datetime(\'now\'),\'nueva\')').bind(type,proposal,contact || null).run();
    return json({ok:true,id:result.meta?.last_row_id},201,allowed);
   }
   const question = String(body.question || '').trim();
   if (!question || question.length > 1200) return json({error:'La pregunta debe tener entre 1 y 1200 caracteres.'},400,allowed);
   if (!env.OPENAI_API_KEY) return json({error:'Servicio de IA no configurado.'},503,allowed);
   const instructions = 'Eres el asistente de ayuda de Mi Control Financiero, una aplicación web personal. Responde en español, con claridad y pasos breves, solo sobre cómo utilizar la app y sus secciones (resumen, movimientos, categorías, cuotas, créditos, presupuestos, informes, indicadores, amortización, historial, configuración y compartir). No afirmes que puedes ver o cambiar los datos de la persona; no solicites contraseñas, claves API ni datos financieros privados. No des asesoría financiera personalizada. Si no conoces un detalle específico de la versión, dilo con honestidad y sugiere describir la pantalla. Invita a enviar una propuesta de mejora cuando corresponda.';
   const ai = await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Authorization':'Bearer '+env.OPENAI_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({model:env.OPENAI_MODEL || 'gpt-4.1-mini',instructions,input:question,max_output_tokens:450})});
   const result = await ai.json();
   if (!ai.ok) return json({error:'El servicio de IA no está disponible temporalmente.'},502,allowed);
   const answer = (result.output || []).flatMap(item=>item.content || []).filter(item=>item.type==='output_text').map(item=>item.text).join('\n').trim();
   return json({answer:answer || 'No pude generar una respuesta. Inténtalo de nuevo.'},200,allowed);
  } catch (error) {
   return json({error:'No se pudo procesar la solicitud.'},500,allowed);
  }
 }
};
