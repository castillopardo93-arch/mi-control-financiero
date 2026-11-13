# Informe de prueba — Mi Control Financiero v41 (Google Drive)

**Fecha:** 2026-10-24  
**Estado:** versión de prueba; pendiente de validación manual del usuario.  
**Base:** v40 aprobada por el usuario; v40 y su respaldo no se modifican.

## Objetivo
Probar la integración de Google Drive en una copia aislada de la aplicación, sin modificar la aplicación oficial ni las versiones aprobadas.

## Archivos
- Aplicación de prueba: `mi_control_financiero_revision_tecnica_movil_v41_2026-10-24.html`
- Respaldo idéntico: `respaldo_mi_control_financiero_v41_2026-10-24.html`

## Aislamiento y seguridad
- Se utilizan claves de almacenamiento local exclusivas de v41: `mcf_test_uf_sii_v41_20261024_drive_test_...`.
- Google Drive usa el permiso `drive.file` y un nombre de respaldo de prueba específico: **Mi Control Financiero - RESPALDO DE PRUEBA v41 GOOGLE DRIVE.json**.
- El respaldo automático comienza desactivado; para la primera prueba, conecta Drive y pulsa «Respaldar ahora» una sola vez.
- No se debe cargar ni restaurar una copia desde Drive durante esta primera prueba. El objetivo inicial es confirmar que la autorización y la creación del archivo funcionan, sin reemplazar datos locales.
- Esta versión no cambia la aplicación oficial `index.html`, ni v40/v39, ni sus respaldos.

## Prueba manual
1. Abrir v41 en el PC.
2. Entrar a Configuración y abrir el apartado Google Drive.
3. Pulsar «Conectar Google Drive» y autorizar la cuenta.
4. Confirmar que la interfaz indica que Drive está conectado.
5. Pulsar «Respaldar ahora» una sola vez y esperar el mensaje de resultado.
6. Comprobar en Google Drive que se creó el archivo **Mi Control Financiero - RESPALDO DE PRUEBA v41 GOOGLE DRIVE.json**.
7. No pulsar «Cargar copia desde Drive» en esta etapa. Informar el mensaje exacto si aparece un error o una confirmación inesperada.

## Verificaciones técnicas
- La versión se basa en v40 y mantiene su corrección para conservar la pestaña al registrar pagos.
- Las claves locales se renombraron para aislar v41.
- La tarjeta de Google Drive vuelve a estar visible y las funciones de conexión, respaldo y restauración ya no están bloqueadas por el modo de recuperación de v40.
- El respaldo de v41 se guarda como archivo independiente y debe ser idéntico al HTML de la aplicación de prueba.
- No se ha ejecutado una prueba automatizada en navegador; la autorización OAuth y la escritura real en Drive deben ser confirmadas manualmente.

**No aprobar v41 hasta que el usuario confirme la prueba.**
