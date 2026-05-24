const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('index.html', 'utf8');

const heroReplacement = `  <!-- HERO SLIDER -->
  <section class="hero-slider-container animate-fade-in">
    <div class="hero-slider" id="heroSlider">
      
      <!-- Slide 1: CCTV -->
      <div class="slide">
        <div class="slide-overlay">
          <div class="slide-content">
            <div class="slide-category">Sistemas B2B</div>
            <h2 class="slide-title">Videovigilancia<br>e Infraestructura CCTV</h2>
            <p class="slide-desc">Ingeniería y hardware robusto para monitoreo corporativo continuo.</p>
            <a href="catalog.html?filter=cctv" class="btn btn-primary">Explorar Categoría</a>
          </div>
        </div>
        <img src="img/categories/cctv-premium.png" alt="CCTV Premium" class="slide-img">
      </div>

      <!-- Slide 2: VMS -->
      <div class="slide">
        <div class="slide-overlay">
          <div class="slide-content">
            <div class="slide-category">Gestión Unificada</div>
            <h2 class="slide-title">Plataformas VMS<br>y Analíticas Avanzadas</h2>
            <p class="slide-desc">Control total del ecosistema de seguridad desde centros de monitoreo.</p>
            <a href="catalog.html?filter=vms" class="btn btn-primary">Explorar Categoría</a>
          </div>
        </div>
        <img src="img/categories/vms-premium.png" alt="VMS Premium" class="slide-img">
      </div>

      <!-- Slide 3: Energía -->
      <div class="slide">
        <div class="slide-overlay">
          <div class="slide-content">
            <div class="slide-category">Respaldo Crítico</div>
            <h2 class="slide-title">Sistemas UPS<br>y Calidad de Energía</h2>
            <p class="slide-desc">Continuidad operativa absoluta para servidores y cuartos de control.</p>
            <a href="catalog.html?filter=power" class="btn btn-primary">Explorar Categoría</a>
          </div>
        </div>
        <img src="img/categories/ups-premium.png" alt="Energía Premium" class="slide-img">
      </div>

      <!-- Slide 4: Racks -->
      <div class="slide">
        <div class="slide-overlay">
          <div class="slide-content">
            <div class="slide-category">Estructura Base</div>
            <h2 class="slide-title">Racks, Redes<br>y Centro de Datos</h2>
            <p class="slide-desc">La arquitectura troncal detrás de cada proyecto de integración.</p>
            <a href="catalog.html?filter=racks" class="btn btn-primary">Explorar Categoría</a>
          </div>
        </div>
        <img src="img/categories/racks-premium.png" alt="Racks Premium" class="slide-img">
      </div>

    </div>
    
    <div class="slider-nav" id="sliderNav">
      <div class="slider-dot active" data-index="0"></div>
      <div class="slider-dot" data-index="1"></div>
      <div class="slider-dot" data-index="2"></div>
      <div class="slider-dot" data-index="3"></div>
    </div>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const slider = document.getElementById('heroSlider');
      if (!slider) return;
      const dots = document.querySelectorAll('.slider-dot');
      let isScrolling = false;

      slider.addEventListener('scroll', () => {
        if (!isScrolling) {
          window.requestAnimationFrame(() => {
            const index = Math.round(slider.scrollLeft / slider.offsetWidth);
            dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === index);
            });
            isScrolling = false;
          });
          isScrolling = true;
        }
      });

      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          const index = parseInt(e.target.getAttribute('data-index'));
          slider.scrollTo({
            left: index * slider.offsetWidth,
            behavior: 'smooth'
          });
        });
      });
    });
  </script>
`;

const categoriesReplacement = `  <!-- CATEGORÍAS DESTACADAS -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Colecciones Destacadas</span>
        <h2 class="section-title">Portafolio Tecnológico</h2>
        <p class="section-desc">Acceda directamente a nuestras colecciones principales de equipamiento e infraestructura.</p>
      </div>

      <div class="category-grid">
        <a href="catalog.html?filter=cctv" class="category-card-premium">
          <img src="img/categories/cctv-premium.png" alt="Cámaras IP / CCTV" class="category-card-img">
          <div class="category-card-overlay">
            <h3 class="category-card-title">Cámaras IP / CCTV</h3>
            <p class="category-card-desc">Sistemas de videovigilancia corporativa.</p>
            <span class="category-card-cta">Ver Colección <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <a href="catalog.html?filter=vms" class="category-card-premium">
          <img src="img/categories/vms-premium.png" alt="VMS y Analíticas" class="category-card-img">
          <div class="category-card-overlay">
            <h3 class="category-card-title">VMS y Analíticas</h3>
            <p class="category-card-desc">Software avanzado y control unificado.</p>
            <span class="category-card-cta">Ver Colección <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <a href="catalog.html?filter=power" class="category-card-premium">
          <img src="img/categories/ups-premium.png" alt="Energía / UPS" class="category-card-img">
          <div class="category-card-overlay">
            <h3 class="category-card-title">Energía / UPS</h3>
            <p class="category-card-desc">Sistemas de respaldo ininterrumpido.</p>
            <span class="category-card-cta">Ver Colección <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>

        <a href="catalog.html?filter=racks" class="category-card-premium">
          <img src="img/categories/racks-premium.png" alt="Almacenamiento e Infraestructura" class="category-card-img">
          <div class="category-card-overlay">
            <h3 class="category-card-title">Racks e Infraestructura</h3>
            <p class="category-card-desc">Gabinetes, cableado y servidores enterprise.</p>
            <span class="category-card-cta">Ver Colección <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          </div>
        </a>
      </div>
      
      <div style="text-align: center; margin-top: 3rem;">
        <a href="categories.html" class="btn btn-secondary">Ver Todas las Categorías</a>
      </div>
    </div>
  </section>
`;

content = content.replace(/<!-- HERO SECTION -->[\s\S]*?<!-- FRANJA DE CONFIANZA \/ AUTORIDAD -->/, heroReplacement + '\n  <!-- FRANJA DE CONFIANZA / AUTORIDAD -->');
content = content.replace(/<!-- ENLACE RÁPIDO COLECCIONES -->[\s\S]*?<!-- FOOTER -->/, categoriesReplacement + '\n  <!-- FOOTER -->');

fs.writeFileSync('index.html', content, 'utf8');
console.log('index.html updated successfully');
