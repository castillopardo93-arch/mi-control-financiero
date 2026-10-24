# Informe — Mi Control Financiero v42: corrección de autorización Google Drive

**Fecha:** 2026-10-24  
**Estado:** prueba pendiente de validación manual.  
**Base:** v41, que no se modifica.

## Causa identificada
La v41 tenía la función de autorización OAuth y un ID de cliente, pero le faltaba incluir en el HTML la biblioteca oficial de Google Identity Services (`https://accounts.google.com/gsi/client`). Por eso `window.google.accounts.oauth2` no estaba disponible, aparecía el mensaje de reconexión automática y los botones de respaldo/restauración permanecían bloqueados.

## Corrección
Se agregó el script oficial de Google Identity Services en el encabezado de v42. Se mantiene el ID de cliente de la aplicación, el alcance `drive.file`, el almacenamiento aislado exclusivo de v42 y el respaldo automático inicialmente desactivado.

## Prueba manual
1. Abrir v42 en el PC y entrar a Configuración → Google Drive.
2. Pulsar «Conectar Google Drive».
3. Autorizar la misma cuenta de Google si se solicita.
4. Confirmar que el estado indique conexión correcta y que se habiliten los botones.
5. Pulsar «Respaldar ahora» una sola vez y comprobar que se cree el archivo **Mi Control Financiero - RESPALDO DE PRUEBA v42 GOOGLE DRIVE.json**.
6. No usar «Cargar copia desde Drive» durante esta primera prueba.

## Seguridad
- v42 y su respaldo deben ser idénticos.
- v41 y su respaldo permanecen intactos.
- La aplicación oficial `index.html` y la versión aprobada v40 no se modifican.
- No se ha realizado una prueba automatizada de navegador; autorización y escritura en Drive pendientes de prueba manual.
