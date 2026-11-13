# Informe de prueba — Mi Control Financiero v40

**Fecha:** 2026-10-24  
**Estado:** versión de prueba, pendiente de validación manual del usuario.  
**Versión base:** v39, sin modificar.

## Archivos

- Aplicación de prueba: [mi_control_financiero_revision_tecnica_movil_v40_2026-10-24.html](mi_control_financiero_revision_tecnica_movil_v40_2026-10-24.html)
- Respaldo: [respaldo_mi_control_financiero_v40_2026-10-24.html](respaldo_mi_control_financiero_v40_2026-10-24.html)

SHA de archivo y respaldo: `929d9893d9cd7e637455f26586b8de1f909a2302`. Se verificó que ambos contenidos y SHA son idénticos.

## Corrección incluida

- Al abrir un formulario desde una pestaña, se conserva la pestaña de origen, la posición de desplazamiento y el estado de las secciones de cuotas, detalles y gráficos que estaban abiertas.
- Al guardar un pago o editar una cuota, se prioriza volver a la pestaña de origen en vez de cambiar innecesariamente a otra sección.
- Al marcar una cuota como pagada directamente, se restaura la pestaña activa, la posición de desplazamiento y las tablas de cuotas que estaban expandidas.
- Se conserva la corrección de v39 para que el cargo adicional solo forme parte del total a pagar y no altere el valor contractual ni el importe pagado.
- El almacenamiento local está aislado con claves exclusivas de v40: `mcf_test_uf_sii_v40_20261024_payment_tab_retention_...`.
- Google Drive permanece deshabilitado en esta copia para que las pruebas no afecten respaldos remotos.

## Verificaciones técnicas realizadas

- v40 y su respaldo son idénticos.
- v39 permanece intacta (SHA: `5521c7e6824452706ee3c86f465e40f2bb1314b0`).
- La aplicación oficial `index.html` permanece intacta (SHA: `cc0864f1ec4de27a52cfe78192c82729e12da98d`).
- No se realizó una prueba automatizada en navegador. La experiencia visual y los flujos de pago deben validarse manualmente antes de aprobar la versión.

## Pruebas manuales pendientes

1. Abrir v40 y entrar a **Mis deudas financieras**.
2. Expandir una tabla de cuotas y desplazarse hasta una cuota pendiente.
3. Marcarla como pagada: comprobar que la pestaña siga siendo la misma, que la tabla continúe abierta y que la pantalla permanezca en la misma zona.
4. Desde esa misma sección, abrir **Registrar pago en CLP o UF**, guardar un abono y comprobar que vuelve a la sección de origen y conserva la vista abierta.
5. Repetir en **Mis deudas personales** si hay una deuda de prueba disponible.
6. Confirmar que los importes y estados se actualizan correctamente.

**No aprobar v40 todavía.** Mantener v39 y las versiones protegidas sin cambios hasta que el usuario confirme el resultado.
