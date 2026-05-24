const fs = require('fs');

let content = fs.readFileSync('catalog.html', 'utf8');

// The categories HTML
const categoriesContent = `
  <section class="section" style="padding-top: 2rem;">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title" style="font-size: 2.5rem; margin-bottom: 1rem;">Colecciones de Ingeniería</h1>
        <p class="section-desc" style="max-width: 800px;">Explore nuestro ecosistema completo de hardware, almacenamiento de datos, energía ininterrumpida y soporte corporativo diseñado para proyectos de integración.</p>
      </div>

      <div class="category-grid">
        <!-- 1. CCTV -->
        <a href="catalog.html?filter=cctv" class="category-card-premium">
          <img src="img/categories/cctv-premium.png" alt="Videovigilancia / CCTV" class="category-card-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'600\\' fill=\\'%23f5f5f7\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23f5f5f7\\'/></svg>'">
          <div class="category-card-overlay">
            <h3 class="category-card-title">Videovigilancia / CCTV</h3>
            <p class="category-card-desc">Cámaras PTZ, domos y sistemas analíticos en borde.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 2. VMS -->
        <a href="catalog.html?filter=vms" class="category-card-premium">
          <img src="img/categories/vms-premium.png" alt="Software VMS y Analíticas" class="category-card-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'600\\' fill=\\'%23f5f5f7\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23f5f5f7\\'/></svg>'">
          <div class="category-card-overlay">
            <h3 class="category-card-title">Software VMS y Analíticas</h3>
            <p class="category-card-desc">Plataformas de gestión centralizada y analítica inteligente.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 3. Almacenamiento -->
        <a href="catalog.html?filter=storage" class="category-card-premium">
          <!-- Placeholder elegante -->
          <div style="width:100%; height:100%; background: #f5f5f7; display:flex; align-items:center; justify-content:center;">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d2d2d7" stroke-width="1"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          </div>
          <div class="category-card-overlay">
            <h3 class="category-card-title">Almacenamiento Enterprise</h3>
            <p class="category-card-desc">Sistemas SAN/NAS masivos para videovigilancia.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 4. Servidores -->
        <a href="catalog.html?filter=compute" class="category-card-premium">
          <div style="width:100%; height:100%; background: #eaeaea; display:flex; align-items:center; justify-content:center;">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c0c0c0" stroke-width="1"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          </div>
          <div class="category-card-overlay">
            <h3 class="category-card-title">Workstations / Servidores</h3>
            <p class="category-card-desc">Cómputo de alto rendimiento y procesamiento de IA.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 5. Energía -->
        <a href="catalog.html?filter=power" class="category-card-premium">
          <img src="img/categories/ups-premium.png" alt="Energía y Respaldo" class="category-card-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'600\\' fill=\\'%23f5f5f7\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23f5f5f7\\'/></svg>'">
          <div class="category-card-overlay">
            <h3 class="category-card-title">Energía y Respaldo</h3>
            <p class="category-card-desc">Sistemas UPS de transferencia cero.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 6. PDU -->
        <a href="catalog.html?filter=distribution" class="category-card-premium">
          <div style="width:100%; height:100%; background: #f0f0f0; display:flex; align-items:center; justify-content:center;">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d2d2d7" stroke-width="1"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18.01"/><path d="M12 6v6"/></svg>
          </div>
          <div class="category-card-overlay">
            <h3 class="category-card-title">Distribución Eléctrica</h3>
            <p class="category-card-desc">PDUs inteligentes y sistemas de tierra física.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 7. Racks -->
        <a href="catalog.html?filter=racks" class="category-card-premium">
          <img src="img/categories/racks-premium.png" alt="Racks y Gabinetes" class="category-card-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'600\\' fill=\\'%23f5f5f7\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23f5f5f7\\'/></svg>'">
          <div class="category-card-overlay">
            <h3 class="category-card-title">Racks y Organización</h3>
            <p class="category-card-desc">Gabinetes de comunicaciones y canalización.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 8. Fibra -->
        <a href="catalog.html?filter=fiber" class="category-card-premium">
          <div style="width:100%; height:100%; background: #fafafa; display:flex; align-items:center; justify-content:center;">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d2d2d7" stroke-width="1"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="category-card-overlay">
            <h3 class="category-card-title">Fibra Óptica</h3>
            <p class="category-card-desc">Enlaces backbone para grandes instalaciones.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 9. Cobre -->
        <a href="catalog.html?filter=cabling" class="category-card-premium">
          <div style="width:100%; height:100%; background: #ececec; display:flex; align-items:center; justify-content:center;">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d2d2d7" stroke-width="1"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><path d="M6 6h12v12H6z"/></svg>
          </div>
          <div class="category-card-overlay">
            <h3 class="category-card-title">Cableado Estructurado</h3>
            <p class="category-card-desc">Redes de cobre de alta confiabilidad.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 10. Displays -->
        <a href="catalog.html?filter=displays" class="category-card-premium">
          <div style="width:100%; height:100%; background: #f5f5f7; display:flex; align-items:center; justify-content:center;">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d2d2d7" stroke-width="1"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>
          </div>
          <div class="category-card-overlay">
            <h3 class="category-card-title">Videowalls</h3>
            <p class="category-card-desc">Monitores profesionales para centros de control.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <!-- 11. Accesorios -->
        <a href="catalog.html?filter=accessories" class="category-card-premium">
          <div style="width:100%; height:100%; background: #eaeaea; display:flex; align-items:center; justify-content:center;">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d2d2d7" stroke-width="1"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          </div>
          <div class="category-card-overlay">
            <h3 class="category-card-title">Accesorios</h3>
            <p class="category-card-desc">Conectividad y periféricos.</p>
            <span class="category-card-cta">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>
      </div>
    </div>
  </section>
`;

// Replace everything between <!-- HEADER NAVEGACIÓN --> and <!-- FOOTER -->
content = content.replace(/<main class="catalog-layout">[\s\S]*?<\/main>/, `<main class="catalog-layout">\n${categoriesContent}\n  </main>`);

// Fix active state on nav menu
content = content.replace(/class="nav-link active"/g, 'class="nav-link"');
content = content.replace(/>Categorías<\/a>/, ' class="nav-link active">Categorías</a>');

fs.writeFileSync('categories.html', content, 'utf8');
console.log('categories.html built successfully');
