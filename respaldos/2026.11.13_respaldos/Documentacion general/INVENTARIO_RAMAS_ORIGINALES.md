# Inventario de las ramas originales antes de su retirada

Repositorio: `castillopardo93-arch/mi-control-financiero`.
Rama principal que se conservará: `main`.
Auditoría del 13-11-2026: 25 ramas adicionales, comparadas mediante SHA de blobs contra todos los archivos existentes en `main`.

**Resultado:** cero blobs en los árboles de las ramas cuya copia falte del árbol de `main`. Esto cubre el estado actual de los archivos de las 25 ramas; no sustituye un respaldo de bases financieras en Google Drive.

| Rama original | Último commit SHA verificado |
|---|---|
| `auditoria/v180-frecuencias-quincenales` | `fc41cd63112729e5bcec5829260165d3b0cdf9cf` |
| `auditoria/v181-calendario-cada-14-dias` | `031c8d1b4c67d30e63475ddd44e30d35c5f6e8e7` |
| `auditoria/v182-correccion-fecha-pagos` | `cab687cebf48cac10fb3a82c95fc185b752ac3c3` |
| `auditoria/v183-edicion-fecha-pagos-formulario` | `794f263569e93e8e3cf37f7af7266b53b25d0ac6` |
| `auditoria/v184-lapiz-final-fila-pagos` | `77637de239e9d2450431799c7042625739c04f79` |
| `auditoria/v185-fichas-pdf-individuales` | `5a1ea802b0b491aeee406ae1a118bb3a6a49c8f8` |
| `auditoria/v186-pdf-fichas-tabulares` | `716b8d4628bc8d6c747883bee0ed6cfc49d1d964` |
| `auditoria/v187-pdf-solo-cuotas-pagadas` | `68ffce7bf6ee2269c13cfd3b229cf2e031fb0f4b` |
| `auditoria/v188-pdf-historial-sin-detalle-ni-notas` | `72c0ae2a66c35ac1aca9e062884ab0e2fe2fcce6` |
| `auditoria/v189-pdf-historial-tres-columnas` | `5bae385c7e815e4abe94d427aee5daf9d59ea7ac` |
| `auditoria/v190-pdf-financieras-sin-historial-duplicado` | `f74f6d88e6e0f89797cde5b488b94975fc82d7bf` |
| `auditoria/v191-pdf-cuotas-todas-columnas` | `8c14d0bcff2b91d8e61a4247e8d364ace0a68d4c` |
| `auditoria/v192-pagos-recurrentes-controlados` | `3d3650bda826d4a07de509459739c006c39c917b` |
| `auditoria/v193-detalle-edicion-pagos-integrados` | `0e663165f1f3e33a5f99fcd321ac86abf7f8a48d` |
| `auditoria/v194-cuentas-activas-ultima-pestana` | `270d625c24588eb09973d65d67af6816e5d028f1` |
| `auditoria/v195-cuentas-solo-al-final-vista-v192` | `56a78eeacda43694fa4d279be0e3c1de718bab45` |
| `auditoria/v196-cuentas-activas-desde-v192` | `e1eff2b252f2656d9635da66e1ada7e1c25f2b57` |
| `auditoria/v197-editar-control-programados-desde-v192` | `f5ae754e7c8d0fead0abcdd32a9f3d407f706e5e` |
| `auditoria/v198-recuperacion-completa-creditos` | `a80339151cda09492383bf4738c3f696833861ef` |
| `auditoria/v199-guardado-verificado-drive` | `044eba3e5305992a2769b7ead30fb7160341c94e` |
| `auditoria/v200-migracion-segura-desde-copias` | `7cced2eed3c88f27ffbb0c3e629533593286309b` |
| `auditoria/v201-integridad-guardado-recuperacion` | `5ec3db8e3bef834fefbb3869e191fca92b43fbd4` |
| `auditoria/v202-validacion-funcional` | `84362b274e228a821ff1a14081dc7d484428b8e9` |
| `auditoria/v203-reconexion-drive` | `4a36b14a4ce96e292fe8a7017ed01354f55ccb9b` |
| `protegida-v89-2026-10-24` | `97c622a77def5da7dc4ae9a03f89ec70d963a33f` |

Las copias de las versiones se encuentran directamente en las carpetas `respaldos/AAAA.MM.DD_respaldos/` según la fecha de elaboración; las versiones aprobadas conservan su identificación. `index.html` de la raíz corresponde a la aplicación oficial y no se modificó en este proceso.

Este inventario permite rastrear las referencias originales incluso después de retirar las ramas. Las versiones de código se identifican por SHA de contenido; los commits históricos no se consideran una fuente de datos financieros.