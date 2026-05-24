# Sofe Security — Prioridades después de AUDITORIA_UI_UX.md

## Lectura rápida
La auditoría de Antigravity aporta mejoras útiles: SEO/meta tags, contraste del CTA, grid 2x2, sombras en cards y scroll reveal. Pero no cubre todavía los dos blockers más importantes detectados en QA pública: catálogo invisible y mojibake/encoding en textos dinámicos.

## Prioridad 0 — antes de seguir puliendo diseño

### 1. Corregir catálogo invisible
En la web pública los productos existen en DOM, pero las cards se quedan invisibles por `opacity: 0` en `.product-card.stagger-item`.

Acción:
- Revisar CSS/JS de animaciones de productos.
- Ninguna card de catálogo debe depender de JS para ser visible.
- Añadir fallback seguro:

```css
.product-card.stagger-item {
  opacity: 1;
  transform: none;
}
```

Si se quiere animación:

```css
.js-animations-ready .product-card.stagger-item {
  opacity: 0;
  transform: translateY(14px);
}
.js-animations-ready .product-card.stagger-item.visible,
.js-animations-ready .product-card.stagger-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Y JS debe añadir `.js-animations-ready` solo cuando el observer esté activo.

### 2. Corregir encoding/mojibake
Hay texto visible con errores:
- `tÃ©cnica`
- `cotizaciÃ³n`
- `CaracterÃ­sticas`
- `HIKVISION Â· Modelo`

Acción:
- Reguardar `js/app.js`, `js/products.js` y cualquier data fallback como UTF-8 real.
- Buscar en todo el proyecto: `Ã`, `Â`, `�`.
- No publicar si aparece alguno.

Comando recomendado en Windows:

```powershell
Select-String -Path .\*.html, .\css\*.css, .\js\*.js -Pattern 'Ã|Â|�' -List
```

## Revisión de los cambios de Antigravity

### SEO/meta tags
Bien. Mantener.

### CTA azul
Cuidado: mejora contraste, pero puede romper el look premium blanco/negro tipo Apple/luxury si el azul se siente demasiado SaaS. Recomendación:
- Usar azul solo como acento de acción, no en exceso.
- Validar visualmente contra hero oscuro.
- Alternativa premium: botón blanco/invertido en hero oscuro y negro en secciones claras.

### Card shadow por defecto
Bien si es sutil. Cuidado con “claymorphism” excesivo: Sofe Security debe sentirse técnico/premium, no app genérica.

### Category grid 2x2
Correcto para home con 4 colecciones destacadas. Para `categories.html` con 12 categorías, puede funcionar, pero quizá conviene una landing con grupos:
- Seguridad electrónica
- Infraestructura TI
- Energía y continuidad
- Visualización/accesorios

### Scroll reveal
Bien, pero aplicar con fallback. Regla: el contenido nunca debe quedar oculto si JS falla.

## Prioridad 1 — polish comercial

1. Home: añadir sección “Cómo trabajamos”: Diagnóstico → Diseño → Suministro → Instalación → Soporte.
2. Home: añadir trust strip realista: Validación técnica, Cotización B2B, Respuesta 24–48h, Integración por proyecto.
3. Categories: destacar CCTV, Control de Acceso y Energía como categorías prioritarias.
4. Catalog: hacer sidebar más fuerte; estado activo más visible; mostrar conteo de productos.
5. Product detail: mejorar ficha técnica, imagen, datasheet, compatibilidad, garantía/soporte si aplica.
6. Cart/quote: explicar qué pasa después, tiempo de respuesta, exclusiones de precio.
7. Formularios: validación en español, no mensajes nativos en inglés.

## Prompt corto para Antigravity

Usa esto como siguiente instrucción:

“Continúa desde la auditoría UI/UX, pero prioriza ahora los blockers críticos detectados por QA externa. Primero corrige el catálogo invisible: las product cards existen en DOM pero quedan con opacity:0; ningún producto debe depender de JS para ser visible. Implementa un fallback seguro y luego animación progresiva. Segundo, corrige todo mojibake/encoding en app.js/products.js/HTML/CSS: buscar y eliminar `Ã`, `Â`, `�`, ejemplos `tÃ©cnica`, `cotizaciÃ³n`, `CaracterÃ­sticas`, `HIKVISION Â· Modelo`. Después revisa que el nuevo scroll reveal nunca oculte contenido si JS falla. Mantén estética premium blanco/negro con azul solo como acento sobrio. No cambies Supabase keys ni service_role. Al terminar, prueba index, categories, catalog, product, cart y quote; verifica consola sin errores y catálogo visible.”
