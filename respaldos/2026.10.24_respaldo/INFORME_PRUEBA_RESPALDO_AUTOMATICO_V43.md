# Informe de prueba — v43

Fecha: 24-10-2026

## Objetivo
Corregir la inicialización del respaldo automático en Google Drive detectada al revisar la v42.

## Causa encontrada
La v42 ejecutaba en cada apertura `driveAutoEnabled=false` y guardaba `false` en almacenamiento local. Esto desactivaba el respaldo automático aunque la casilla de la interfaz apareciera inicialmente marcada. Por ello, los cambios guardados no podían programar una carga automática mientras esa preferencia siguiera desactivada.

## Corrección aplicada
- El respaldo automático queda activado por defecto en esta versión de prueba.
- Si el usuario cambia manualmente la casilla, se respeta la preferencia guardada.
- Se mantiene la condición de seguridad: la carga automática solo se programa cuando Drive está autorizado y el estado de sincronización se ha establecido tras un respaldo exitoso o al cargar una copia desde Drive.
- Se usa almacenamiento local aislado y un nombre de archivo de Drive exclusivo de v43: `Mi Control Financiero - RESPALDO DE PRUEBA v43 GOOGLE DRIVE.json`.
- Se conservan la biblioteca GIS y el cliente OAuth que permitieron conectar correctamente la v42.

## Alcance y seguridad
La v43 es una versión de prueba, no aprobada. No modifica la aplicación oficial ni las versiones anteriores. La versión y su respaldo deben ser idénticos. No se ha ejecutado una prueba automatizada de navegador; la conexión, el primer respaldo y la sincronización automática requieren validación manual.

## Prueba manual propuesta
1. Abrir la v43 y conectar Google Drive.
2. Importar la copia del PC si hace falta, comprobar los datos y luego pulsar «Respaldar ahora» una vez para crear el archivo de prueba v43.
3. Confirmar que la casilla «Respaldo automático» esté activada.
4. Hacer un cambio pequeño y reversible en la v43 y esperar el mensaje de respaldo automático sin pulsar el botón manual.
5. No usar «Cargar copia desde Drive» durante esta prueba.
