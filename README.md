# Sofe Security - Prototipo Web B2B Listo para Revisión

## Estado del Proyecto: Listo para Revisión (V2 Premium)
Este directorio contiene el frontend terminado de Sofe Security. Se ha rediseñado con una **estética premium, minimalista y tipo Apple**, eliminando componentes "dark/cyber" y enfocándose en blanco, gris carbón y mucho aire. Se trata de un ecosistema *quote-first* (sistema de cotización técnica en lugar de tienda minorista). La navegación es robusta, con catálogo filtrable por URL y un "carrito de cotización" con persistencia local.

## Ruta de Entrada para Revisión
**Abre en tu navegador:** `C:\Users\Jorge\Documents\ClaudeVault\projects\Sofe Group\02-Sofe Security Camaras\01-Website\website-prototype\index.html`

## Checklist de Calidad (Completado)
- [x] Rediseño a estética blanca, limpia y de ingeniería premium (system fonts, alto contraste minimalista).
- [x] Catálogo con 11 colecciones de ingeniería operando mediante `products.js` sin recargar bases de datos pesadas.
- [x] Flujo de "Añadir a Cotización" 100% funcional y simulado en el navegador vía `localStorage`.
- [x] Link de retorno seguro hacia Holding Sofe Group implementado en el pie de página de todas las vistas.
- [x] Verificado 100% libre de errores en consola, enlaces probados y estado responsivo de primer nivel.

## Estructura Rápida
- `index.html`: Hero B2B, visual técnico SVG, pilares de servicio.
- `catalog.html`: Filtros dinámicos de colecciones.
- `cart.html` / `quote.html`: Sistema de solicitud de ingeniería (quote-first).

## Siguientes Pasos (Fase Backend)
- Levantar el proyecto en Supabase para reemplazar la carga por defecto desde `js/products.js` hacia consultas reales a la tabla de inventario.
- Configurar el webhook en `quote.html` para disparar una alerta en **n8n** al recibir una solicitud formal.
