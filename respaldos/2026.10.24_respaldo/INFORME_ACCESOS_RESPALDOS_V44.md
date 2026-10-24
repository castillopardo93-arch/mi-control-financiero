# Informe de prueba v44 — accesos a respaldos

Fecha: 24-10-2026

## Base y seguridad
- Base: v43 de prueba; v43 no fue modificada.
- La v44 usa claves de almacenamiento aisladas al renombrar las claves de prueba de v43 a v44.
- El nombre de respaldo de Google Drive es `Mi Control Financiero - RESPALDO DE PRUEBA v44 GOOGLE DRIVE.json`, separado de los archivos de otras versiones.
- La aplicación oficial `index.html` no se modificó.

## Cambios
1. En la tarjeta de Google Drive se agregó **Abrir respaldo en Google Drive**. Si la sesión está autorizada y se encuentra el archivo v44, abre la vista web directa del archivo; de lo contrario abre Google Drive para localizarlo.
2. En la tarjeta **Almacenamiento del navegador** se agregó **Guardar / elegir ubicación local…**, que inicia la generación de una copia completa y, cuando el navegador lo permite, abre el selector para elegir dónde guardarla. En navegadores que descargan directamente, se debe ubicar el archivo en Descargas o moverlo desde el explorador de archivos. Por restricciones de seguridad web, el botón no puede abrir por sí solo una carpeta local arbitraria ya existente.
3. Se conservaron las funciones existentes de respaldo/restauración y el comportamiento de respaldo automático de v43.

## Pruebas pendientes
- Abrir la v44 y comprobar que los dos botones aparecen en sus tarjetas.
- Con Drive autorizado y una copia v44 creada, pulsar **Abrir respaldo en Google Drive** y comprobar que abre el archivo v44 correcto.
- Pulsar **Guardar en ubicación local…** y comprobar que se abre el selector de guardado o se inicia la descarga, según el navegador.
- No aprobar hasta que el usuario realice las pruebas.
