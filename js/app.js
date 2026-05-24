// Lógica principal de Sofe Security - Prototipo B2B
// Maneja persistencia de cotizaciones en localStorage, interactividad y dinamismo en vistas

document.addEventListener("DOMContentLoaded", () => {
  initCartCount();
  
  // Enrutamiento / Inicialización por página
  if (document.getElementById("catalog-list")) {
    initCatalog();
  }
  
  if (document.getElementById("product-detail-container")) {
    initProductDetail();
  }
  
  if (document.getElementById("cart-container")) {
    initCartPage();
  }
  
  if (document.getElementById("quote-form-element")) {
    initQuoteForm();
  }
});

/* --- SISTEMA DE TOAST NOTIFICATIONS --- */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const iconSvg = type === 'success' 
    ? `<svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : `<svg class="toast-icon" style="color:#ef4444;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  // Auto-remover después de 3 segundos
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (container.contains(toast)) {
        container.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

/* --- LÓGICA DE CARRITO (LOCALSTORAGE) --- */

function getCart() {
  const cart = localStorage.getItem("sofe_sec_quote_cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("sofe_sec_quote_cart", JSON.stringify(cart));
  initCartCount();
}

function addToCart(productId, quantity = 1, buttonElement = null) {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.id === productId);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (product) {
      cart.push({
        id: product.id,
        name: product.name,
        sku: product.sku,
        collectionName: product.collectionName,
        image: product.image,
        quantity: quantity
      });
    }
  }
  
  saveCart(cart);
  
  // Feedback Visual
  showToast("Equipo añadido a la cotización", "success");
  
  if (buttonElement) {
    const originalText = buttonElement.innerHTML;
    buttonElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Añadido`;
    buttonElement.classList.add('added-state');
    
    setTimeout(() => {
      buttonElement.innerHTML = originalText;
      buttonElement.classList.remove('added-state');
    }, 2500);
  }
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  
  // Si estamos en la página del carrito, recargarla
  if (document.getElementById("cart-container")) {
    initCartPage();
  }
}

function updateQuantity(productId, delta) {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === productId);
  
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveCart(cart);
    
    // Si estamos en la página del carrito, recargarla
    if (document.getElementById("cart-container")) {
      initCartPage();
    }
  }
}

function initCartCount() {
  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const badge = document.getElementById("header-cart-count");
  if (badge) {
    badge.textContent = count;
  }
}

/* --- VISTA: CATÁLOGO --- */

// Variables globales para la vista del catálogo
let currentFilter = "all";
let currentSearchQuery = "";

function initCatalog() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("catalog-search");
  
  // Leer parámetros de la URL (si viene de la homepage)
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category");
  if (categoryParam) {
    currentFilter = categoryParam;
    
    // Actualizar botones de filtro visualmente
    filterButtons.forEach(btn => {
      if (btn.getAttribute("data-filter") === categoryParam) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
  
  // Renderizado inicial
  renderCatalog();
  
  // Listeners de filtros
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Remover clase active de todos
      filterButtons.forEach(b => b.classList.remove("active"));
      
      // Agregar active al actual
      const button = e.currentTarget;
      button.classList.add("active");
      
      currentFilter = button.getAttribute("data-filter");
      renderCatalog();
    });
  });
  
  // Listener de búsqueda
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }
}

function renderCatalog() {
  const catalogList = document.getElementById("catalog-list");
  if (!catalogList) return;
  
  catalogList.innerHTML = "";
  
  // Aplicar filtro de categoría y búsqueda simultáneamente
  const filteredProducts = PRODUCTS_DATA.filter(p => {
    const matchesFilter = currentFilter === "all" || p.collection === currentFilter;
    const matchesSearch = currentSearchQuery === "" || 
                          p.name.toLowerCase().includes(currentSearchQuery) || 
                          p.sku.toLowerCase().includes(currentSearchQuery);
    return matchesFilter && matchesSearch;
  });
    
  if (filteredProducts.length === 0) {
    catalogList.innerHTML = `
      <div class="empty-cart-state" style="grid-column: 1 / -1;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-muted); margin: 0 auto 1rem auto; display:block;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3 style="font-family: var(--font-title); font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-main);">No se encontraron resultados</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">No hay equipos que coincidan con su búsqueda o filtro actual.</p>
      </div>`;
    return;
  }
  
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    // SVG Fallback premium
    const imgHtml = product.image && !product.image.includes("placeholder") 
      ? `<img class="product-img" src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'500\\' fill=\\'%23f5f5f7\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23f5f5f7\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-family=\\'sans-serif\\' font-size=\\'40\\' fill=\\'%231d1d1f\\' opacity=\\'0.2\\'>SOFE SECURITY</text></svg>'">`
      : `<svg class="fallback-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="19" x2="12" y2="19.01"></line></svg>`;

    card.innerHTML = `
      <div class="product-img-wrapper">
        ${imgHtml}
      </div>
      <div class="product-info">
        <span class="product-collection-badge">${product.collectionName}</span>
        <h3 class="product-name">${product.name}</h3>
        <span class="product-sku">SKU: ${product.sku}</span>
        <p class="product-desc-short">${product.description}</p>
        <div class="product-card-actions">
          <a href="product.html?id=${product.id}" class="btn btn-secondary btn-sm" style="flex: 0 0 auto; width: 45%; padding: 8px 12px; font-size: 0.75rem;">Ver Ficha</a>
          <button class="btn btn-primary btn-sm btn-add-quote" data-id="${product.id}" style="flex: 1;">+ Cotizar</button>
        </div>
      </div>
    `;
    
    // Asignar click para añadir a cotización
    card.querySelector(".btn-add-quote").addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      addToCart(id, 1, e.currentTarget);
    });
    
    catalogList.appendChild(card);
  });
}

/* --- VISTA: DETALLE DE PRODUCTO --- */

function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const container = document.getElementById("product-detail-container");
  
  if (!container) return;
  
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  
  if (!product) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <h2 class="empty-title">Producto No Encontrado</h2>
        <p class="empty-desc">El equipo solicitado no existe en nuestro catálogo de ingeniería.</p>
        <a href="catalog.html" class="btn btn-primary">Volver al Catálogo</a>
      </div>
    `;
    return;
  }
  
  // Generar especificaciones técnicas
  let specRows = "";
  for (const [key, value] of Object.entries(product.specifications)) {
    specRows += `
      <tr>
        <td class="spec-key">${key}</td>
        <td class="spec-val">${value}</td>
      </tr>
    `;
  }
  
  // Generar características viñetas
  let featureList = "";
  product.features.forEach(f => {
    featureList += `<li style="margin-bottom: 0.5rem; display: flex; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${f}</span></li>`;
  });
  
  // Fallback image
  const imgHtml = product.image && !product.image.includes("placeholder")
    ? `<img class="detail-img" src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'600\\' fill=\\'%23f5f5f7\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23f5f5f7\\'/></svg>'">`
    : `<svg class="detail-fallback-icon" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="19" x2="12" y2="19.01"></line></svg>`;

  container.innerHTML = `
    <div class="product-detail-layout">
      <div class="detail-img-box">
        ${imgHtml}
      </div>
      <div class="detail-info">
        <span class="detail-collection">${product.collectionName}</span>
        <h1 class="detail-title">${product.name}</h1>
        <span class="detail-sku">SKU Identificador: ${product.sku}</span>
        <p class="detail-desc">${product.description}</p>
        
        <div class="spec-list">
          <h3 class="spec-title">Características del Suministro</h3>
          <ul style="list-style:none; padding-left:0; margin-bottom: 2.5rem; color: var(--text-muted); font-size: 0.95rem;">
            ${featureList}
          </ul>
          
          <h3 class="spec-title">Ficha Técnica Operativa</h3>
          <table class="spec-table">
            <tbody>
              ${specRows}
            </tbody>
          </table>
        </div>
        
        <div class="detail-actions">
          <button id="detail-add-btn" class="btn btn-primary" style="flex: 2;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Añadir a Cotización</button>
          <a href="catalog.html" class="btn btn-secondary" style="flex: 1;">Volver</a>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById("detail-add-btn").addEventListener("click", (e) => {
    addToCart(product.id, 1, e.currentTarget);
  });
}

/* --- VISTA: CARRITO DE COTIZACIÓN --- */

function initCartPage() {
  const container = document.getElementById("cart-container");
  if (!container) return;
  
  const cart = getCart();
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-muted); margin: 0 auto 1.5rem auto; display:block;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <h2 class="empty-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-main);">Su Lista de Cotización está vacía</h2>
        <p class="empty-desc" style="color: var(--text-muted); margin-bottom: 1.5rem;">Explore nuestro catálogo tecnológico y agregue los equipos requeridos para el diseño de su infraestructura.</p>
        <a href="catalog.html" class="btn btn-primary" style="margin-top: 1.5rem;">Explorar Catálogo Tecnológico</a>
      </div>
    `;
    return;
  }
  
  let tableRows = "";
  cart.forEach(item => {
    const imgHtml = item.image && !item.image.includes("placeholder") 
      ? `<img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'60\\' height=\\'60\\' fill=\\'%23f5f5f7\\'></svg>'">`
      : `<div class="cart-item-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect></svg></div>`;

    tableRows += `
      <tr class="cart-item-row">
        <td>
          <div class="cart-item-info">
            ${imgHtml}
            <div>
              <span style="font-size: 0.7rem; color: var(--accent-secondary); text-transform: uppercase; font-weight:600; display:block; letter-spacing:0.05em;">${item.collectionName}</span>
              <span class="cart-item-name"><a href="product.html?id=${item.id}">${item.name}</a></span>
              <span class="cart-item-sku" style="display:block;">SKU: ${item.sku}</span>
            </div>
          </div>
        </td>
        <td>
          <div class="cart-qty-box">
            <button class="qty-btn qty-minus" data-id="${item.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <span class="qty-input">${item.quantity}</span>
            <button class="qty-btn qty-plus" data-id="${item.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
        </td>
        <td style="text-align: right;">
          <button class="btn-remove" data-id="${item.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Quitar
          </button>
        </td>
      </tr>
    `;
  });
  
  const totalItems = cart.reduce((t, i) => t + i.quantity, 0);
  
  container.innerHTML = `
    <div class="cart-layout">
      <div>
        <table class="cart-items-table">
          <thead>
            <tr>
              <th style="width: 60%;">Concepto Tecnológico / Equipo</th>
              <th style="width: 25%;">Unidades</th>
              <th style="width: 15%; text-align: right;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
        
        <div style="margin-top: 2rem; padding: 1.5rem; background: var(--bg-deep); border: 1px solid var(--border-subtle); border-radius: var(--border-radius); display: flex; gap: 1rem; align-items: flex-start;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-main)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <div>
            <h4 style="color: var(--text-main); font-size: 0.95rem; margin-bottom: 0.25rem; font-weight: 600;">Aviso de Cotización</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">Los precios y la disponibilidad de inventario están sujetos a evaluación del proyecto por parte de nuestros ingenieros comerciales. Se confirmarán en la propuesta técnica final.</p>
          </div>
        </div>
      </div>
      
      <div class="cart-summary">
        <h3 class="summary-title">Resumen de Solicitud</h3>
        <div class="summary-row">
          <span>Partidas (Equipos):</span>
          <span>${cart.length}</span>
        </div>
        <div class="summary-row">
          <span>Total Unidades:</span>
          <span>${totalItems}</span>
        </div>
        <div class="summary-row">
          <span>Modelo de Negocio:</span>
          <span style="color: var(--text-main); font-weight:500; font-size:0.8rem; border: 1px solid var(--border-subtle); padding: 2px 6px; border-radius: 4px; background: var(--bg-card);">B2B Enterprise</span>
        </div>
        <div class="summary-row summary-total">
          <span>Estado del Requerimiento:</span>
          <span style="font-size: 0.85rem; color: #34c759; display:flex; align-items:center; gap:5px;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Listo para envío</span>
        </div>
        
        <div class="summary-actions">
          <a href="quote.html" class="btn btn-primary" style="justify-content: center;">
            Continuar con Datos de Proyecto 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="catalog.html" class="btn btn-secondary" style="justify-content: center;">Añadir más Componentes</a>
        </div>
      </div>
    </div>
  `;
  
  // Agregar listeners a botones de la tabla
  document.querySelectorAll(".qty-minus").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      updateQuantity(id, -1);
    });
  });
  
  document.querySelectorAll(".qty-plus").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      updateQuantity(id, 1);
    });
  });
  
  document.querySelectorAll(".btn-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      removeFromCart(id);
    });
  });
}

/* --- VISTA: FORMULARIO DE COTIZACIÓN B2B --- */

function initQuoteForm() {
  const form = document.getElementById("quote-form-element");
  const itemsContainer = document.getElementById("quote-summary-items");
  if (!form || !itemsContainer) return;
  
  const cart = getCart();
  if (cart.length === 0) {
    window.location.href = "cart.html";
    return;
  }
  
  // Renderizar resumen en el formulario
  itemsContainer.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginBottom = "0.75rem";
    li.style.fontSize = "0.85rem";
    li.style.borderBottom = "1px solid var(--border-subtle)";
    li.style.paddingBottom = "0.75rem";
    li.innerHTML = `
      <div style="flex:1;">
        <span style="font-weight:500; display:block; color: var(--text-main);">${item.name}</span>
        <span style="font-size:0.75rem; color:var(--text-muted); font-family: var(--font-body);">SKU: ${item.sku}</span>
      </div>
      <div style="margin-left: 20px; font-weight:600; color:var(--text-main); background: var(--bg-deep); padding: 2px 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">
        x${item.quantity}
      </div>
    `;
    itemsContainer.appendChild(li);
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simular estado de carga en el botón
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<svg class="data-pulse-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg> Procesando Solicitud...`;
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.8";

    // Captura de datos
    const formData = {
      projectType: document.getElementById("project_type").value,
      installService: document.getElementById("install_service").checked,
      company: document.getElementById("company").value,
      contactName: document.getElementById("contact_name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      notes: document.getElementById("notes").value,
      items: cart
    };
    
    // Simulación de envío al backend (Supabase / n8n) tras 1 segundo
    setTimeout(() => {
      console.log("--- SIMULACIÓN DE COTIZACIÓN ENVIADA A BACKEND (Supabase/n8n) ---");
      console.log("Datos de Proyecto y Contacto:", formData);
      console.log("-----------------------------------------------------------------");
      
      // Limpiar carrito
      localStorage.removeItem("sofe_sec_quote_cart");
      
      // Redirigir a pantalla de éxito
      window.location.href = "quote-success.html";
    }, 1200);
  });
}
