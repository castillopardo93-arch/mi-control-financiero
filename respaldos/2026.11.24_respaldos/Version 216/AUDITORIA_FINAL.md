# Auditoría final de Mi Control Financiero v216
24 de noviembre de 2026

**Dictamen: retener la publicación oficial.** La revisión identifica saldos, conteos y fechas incorrectos en créditos cuyo calendario se genera cuota a cuota. Los resultados siguientes se reprodujeron sobre funciones del archivo v216 almacenado en GitHub, identificador Git `c54f7a135dba8a220e56a204639ac753aa187c86`. La entrada oficial comprobada conserva el identificador `ca95c87343c3ae0b7cd3917c80b10ec68a25b7c7`.

## Hallazgos reproducidos

| Prioridad | Caso de prueba | Observado | Esperado |
|---|---|---|---|
| Alta | Crédito en pesos, 48 cuotas fijas de $10.000, sin intereses ni cargos, 36 pagos registrados y 37 filas generadas | Capital adeudado y diferencia por pagar de $10.000 | $120.000 |
| Alta | Mismo crédito | La tarjeta contraída indica 1 cuota pendiente y la barra de progreso expandida indica 12 | 12 en ambas vistas |
| Alta | Crédito mensual con calendario progresivo y vencimiento contractual el último día del mes, primera cuota el 31/01/2027 | La generación sucesiva produce 28/02 y 28/03 | 28/02 y 31/03, como en el calendario completo construido desde la fecha original |

El resumen contractual suma las filas disponibles cuando existe al menos una. El contador compacto para el calendario progresivo también usa la cantidad de filas generadas. En ambos casos quedan fuera cuotas contractuales futuras. La generación mensual sucesiva usa la última fecha materializada como base y pierde el día de referencia al atravesar febrero.

## Verificación

- Siete bloques JavaScript en línea pasaron el control de sintaxis.
- Veinte cronogramas completos de 24 cuotas, combinando CLP/UF, sistemas francés/alemán y cinco frecuencias: fechas crecientes, amortización total del capital y saldo final cero.
- Un pago automático de $10.000 se contó una vez en los formatos vinculado y heredado probados. Un abono de $40.000 con UF de $40.000 más otro de 1 UF sumó 2 UF.
- Se verificaron la exclusión de un vencimiento de mes futuro del botón Pagar, el filtro de cuotas antiguas, el rechazo de identificadores duplicados, la recuperación del contenido de un comprobante y el rechazo de una copia con adjunto ausente.
- Se simuló un fallo de cada destino por separado en el guardado doble. El otro destino recibió los datos y el reintento terminó con copias iguales y una escritura remota exitosa por escenario.
- Evidencia de sesiones anteriores sobre esta versión: revisión móvil en tres tamaños y reapertura local del movimiento ficticio por $1.234 con su adjunto. El usuario confirmó el resultado de la prueba con Drive real. Esa última comprobación se registra como validación del usuario.

## Criterios para la siguiente candidata

Repetir el crédito de 48 cuotas con calendario parcial y completo, incluyendo cuotas no requeridas, abonos y cargos. Calcular el saldo para el plazo contractual cubierto por datos verificables y señalar si falta información para calcularlo. Verificar la fecha contractual en meses de 28, 29, 30 y 31 días, conservando ediciones de fecha expresas. Confirmar los mismos resultados tras reabrir los datos. La auditoría no modifica créditos ni archivos de la aplicación.
