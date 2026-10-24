# Informe de preparación de v39 — recuperación JSON aislada
Fecha: 24-10-2026
Base: v38, SHA `7a79e4a3589d23d895478bcb0add7f426866d024`.

## Propósito
Crear una versión de prueba separada para ensayar la recuperación de un respaldo JSON local sin tocar `index.html`, v38 ni su respaldo.

## Aislamiento aplicado
- Clave de datos local exclusiva: `mcf_test_uf_sii_v39_20261024_recovery_isolated`.
- Claves de preferencias de alertas diferenciadas con sufijo v39.
- Respaldo de Google Drive deshabilitado para esta prueba: controles ocultos, ID de cliente vacío, auto-respaldo forzado a desactivado y guardas en las funciones de conexión/carga/restauración.
- Se mantiene la importación local de JSON para la prueba de recuperación.
- v38 se tomó como fuente de lectura; no se modificó.

## Verificaciones previas
- La base v38 coincidió con el SHA registrado.
- Se verificó que las claves principales de almacenamiento de v38 no permanecieran en v39.
- Se verificó que la función de importación JSON local siga presente y que las etiquetas script estén balanceadas.

## Limitaciones
Esta es una revisión estática, no una ejecución automatizada en navegador. Todavía no se ha importado ningún JSON en v39 ni se ha confirmado que el archivo descargado por el usuario sea aceptado por el importador. No declarar v39 aprobada hasta completar la prueba manual.
