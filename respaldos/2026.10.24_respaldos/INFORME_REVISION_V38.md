# Informe de revisión técnica — v38
Fecha: 24-10-2026
Base: v37 (SHA `c183f994d4689cfc66860308fe23f50f540e5ce5`)

## Corrección aplicada
- **Cargos adicionales en cuotas:** se detectó que `markInstallmentPaid()` sumaba `ins.adminCharge` al importe que se asigna como pagado. Esto podía contaminar el valor pagado y la diferencia respecto de la cuota contractual. En v38 se excluye el cargo adicional de ese cálculo. La columna **Total a pagar** sigue sumando el cargo por separado. No se cambió el importe contractual ni la columna de diferencia.

## Comprobaciones estáticas ejecutadas
- Los dos bloques JavaScript pasan la comprobación de sintaxis de JavaScript.
- No se detectaron IDs HTML duplicados.
- Se conservó la clave de almacenamiento aislado de la prueba y se renombró a v38 para separar los datos de v37.
- Se conservó la separación visual de columnas de cargo adicional y total a pagar.
- La versión oficial `index.html`, v36, v35, v34 y v37 no se modificaron en este cambio.
- El archivo de v38 y su respaldo se guardan como copias idénticas.

## Revisión funcional y de interfaz
Se revisó estáticamente el código de navegación, formularios, almacenamiento local, cuotas, cargos, alertas, indicadores económicos, exportación/importación, adjuntos, personalización, respaldos y lógica de Google Drive. No se hizo una prueba de navegador automatizada ni una prueba en el teléfono en esta ejecución; por tanto, el comportamiento real de botones, cálculos con datos de ejemplo, permisos del navegador, APIs externas y presentación en dispositivos debe confirmarse en la prueba del usuario.

## Puntos que requieren validación manual
1. Crear una deuda con cargo adicional en Sí y otra con No.
2. Verificar que cambiar el cargo por cuota altera solo **Cargo adicional** y **Total a pagar**, no **Cuota contractual**, **Valor pagado** ni **Diferencia**.
3. Marcar una cuota como pagada y confirmar que el importe registrado no incluya el cargo adicional.
4. Editar y guardar el cargo adicional de una cuota individual.
5. Probar la navegación y las tablas en pantalla móvil y escritorio.
6. Probar respaldo/exportación e importación con datos ficticios en la copia v38.
7. Comprobar los estados de UF e indicadores cuando las fuentes externas no responden.

## Precaución
v38 es una versión de prueba, no aprobada. La revisión estática reduce riesgos pero no garantiza ausencia de errores. No sustituye las pruebas funcionales en un navegador real. No modificar ni publicar `index.html` sin autorización expresa.
