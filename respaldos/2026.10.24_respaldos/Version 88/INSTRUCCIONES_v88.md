# Mi Control Financiero v88 — Asistente IA y propuestas

## Estado
Esta versión de desarrollo parte del contenido íntegro de v87 y añade el panel flotante, el formulario de propuestas y la integración cliente con un backend seguro. **No publicar en index.html hasta autorización expresa.** La IA y el envío centralizado no funcionarán hasta desplegar el Worker y configurar su URL en el HTML.

## Arquitectura
- Frontend estático: GitHub Pages.
- Backend: Cloudflare Worker; mantiene la clave de OpenAI en un secret, nunca en el HTML.
- Almacenamiento compartido: Cloudflare D1 para propuestas.
- El texto de las preguntas se envía al proveedor de IA; los registros financieros personales no se adjuntan al prompt.
- Las propuestas se almacenan en D1. El formulario permite contacto opcional; limitar el acceso a los datos de contacto y definir una política de retención antes de uso público.
- Protección básica contra abuso: límite por IP seudonimizada (hash) por ventana horaria. Configurar un valor secreto aleatorio para RATE_LIMIT_SALT y revisar límites antes de abrir al público.

## Configuración del backend
1. Crear un Worker de Cloudflare y una base D1 dedicada (no reutilizar una base que contenga datos personales).
2. Ejecutar el contenido de `schema.sql` en la base D1.
3. En el Worker, crear el binding D1 llamado `DB`.
4. Configurar secrets/variables: `OPENAI_API_KEY` como secret, `OPENAI_MODEL` opcional (por defecto `gpt-4.1-mini`), `RATE_LIMIT_SALT` como secret aleatorio, y `ALLOWED_ORIGIN=https://castillopardo93-arch.github.io`.
5. Desplegar el contenido de `worker.js` y copiar la URL HTTPS del Worker.
6. En el HTML de v88, reemplazar `window.MCF_AI_ENDPOINT = window.MCF_AI_ENDPOINT || '';` por `window.MCF_AI_ENDPOINT = 'https://TU-WORKER.workers.dev';` (sin barra final).
7. Crear nueva revisión de v88 y respaldo idénticos tras insertar la URL real. No poner la clave de OpenAI en el frontend ni en GitHub.
8. Probar /chat y /proposals desde la página de prueba antes de autorizar publicación. Verificar CORS, límite, respuestas de error y que las propuestas aparezcan en D1.

## Endpoints
- `POST /chat` JSON: `{"question":"¿Cómo registro un movimiento?"}` → `{"answer":"..." }`.
- `POST /proposals` JSON: `{"type":"mejora","proposal":"...","contact":""}` → `{"ok":true,"id":123}`.
- No hay endpoint público de lectura de propuestas; la revisión se hace desde el panel seguro de D1/Cloudflare.
