# Auditoría de Mi Control Financiero · 24 de noviembre de 2026

**Dictamen.** La v214 presenta cuatro defectos reproducibles en el registro de pagos. Se preparó la v215 como candidata a publicación. Las pruebas usaron datos sintéticos. La aceptación en Edge con archivo local, la conexión a Google Drive real y la revisión visual móvil siguen pendientes.

| Operación | Resultado observado en v214 | Resultado verificado en v215 |
|---|---|---|
| Marcar pagada una cuota de $10.000 | El consolidado registraba $20.000 al sumar el pago general y la copia en la cuota. | Registra $10.000. Ambas referencias comparten un identificador. |
| Completar 2 UF con 1 UF abonada previamente a $40.000 | Marcaba pagada la cuota sin registrar el importe final. | Registra la UF que falta. La equivalencia usada en esta prueba fue $40.000 por UF. |
| Registrar el pago de una cuota de $10.000 con cargo adicional de $1.000 | Rechazaba $11.000 porque el límite excluía el cargo. | Acepta el pago completo y aplica los cargos al distribuirlo. |
| Abrir las cuotas de un crédito cuyo primer vencimiento corresponde a un mes futuro | Habilitaba Pagar. | La acción de marcar la cuota pagada se habilita para la primera pendiente con vencimiento hasta el mes actual. |

## Cobertura

- Se abrieron 13 secciones mediante la navegación de la aplicación en un entorno de DOM simulado. Se verificó el detalle expandido de los créditos y los campos de las tarjetas contraídas en pesos y UF.
- Se probó editar una nota conservando dos abonos originales, modificar vencimientos semanales desde una cuota y conservar el desglose contractual. Se probó completar pagos históricos en pesos y UF y guardar una fecha manual.
- Se comprobó el calendario de 24 pagos anuales con cinco fechas de inicio, incluidos fines de mes. Se verificaron el presupuesto excedido, los períodos antiguos, la protección del borrador de un formulario y la asignación de adjuntos a la tarea editada.
- El PDF financiero de prueba tiene dos páginas. Se verificaron el total registrado de $13.000 y el monto estimado de $10.000.
- Se exportó y restauró un respaldo con comprobante. Se probaron el rechazo de identificadores duplicados, la escritura y relectura de archivo, el reintento y el conflicto de contenido. Para Drive se probaron la carga pequeña, la lectura de confirmación y el conflicto remoto mediante respuestas simuladas.
- Se comprobó con datos antiguos que un pago automático representado en dos lugares con la misma firma se contabiliza una sola vez y que un abono parcial registrado en pesos se conserva al completar una deuda en UF. Los registros históricos cuyo importe o fecha difieren requieren conciliación con su comprobante. La candidata no reconstruye importes ausentes.

## Preparación de la publicación

La candidata es el archivo `index.html` de esta carpeta. Su identificador de contenido Git es `d5cf93f89ee5c6d3178a1aa2fba0c6d74101e7fa`. El archivo de entrada oficial al iniciar esta revisión tenía el identificador `ca95c87343c3ae0b7cd3917c80b10ec68a25b7c7` (v209).

Para la aceptación final, abrir la candidata en Edge con una copia de prueba, guardar un cambio, cerrar y reabrir el archivo, y repetir en un archivo de Drive de prueba con un adjunto. Comprobar en el móvil las tarjetas en ambas monedas. La prueba de Drive con OAuth real y carga reanudable grande queda pendiente. Tras la aprobación, publicar exactamente la candidata validada y comprobar el identificador del contenido servido. Para volver a la edición anterior, restaurar el archivo de entrada con el identificador de v209 indicado arriba.
