document.addEventListener('DOMContentLoaded', () => {
    // 1. Estado Global
    let catalogData = [];
    let cartCount = 0;
    const appRoot = document.getElementById('app-root');
    const cartBadge = document.getElementById('cart-count');

    // 2. Fetch de datos
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            catalogData = data;
            initRouter(); // Inicia la navegación una vez hay datos
        });

    // 3. Funciones del Carrito
    window.addToCart = (productName) => {
        cartCount++;
        cartBadge.textContent = cartCount;
        cartBadge.classList.add('scale-150', 'bg-salvia');
        setTimeout(() => cartBadge.classList.remove('scale-150', 'bg-salvia'), 300);
        alert(`Has añadido "${productName}" al carrito de compras.`);
    };

    // 4. Componentes de UI (Vistas)
    
    // VISTA: INICIO
    const ViewHome = () => `
        <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80" class="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-multiply" alt="Hero">
            <div class="absolute inset-0 bg-gradient-to-t from-negro/80 to-transparent"></div>
            <div class="relative z-10 text-center px-4">
                <div class="w-4 h-4 rotate-45 border border-dorado mx-auto mb-6"></div>
                <h2 class="font-serif italic text-4xl md:text-5xl text-marfil mb-4">"Raíces que viajan, historias que perduran."</h2>
                <p class="text-marfil text-sm font-light tracking-widest max-w-2xl mx-auto mb-10">Artesanía auténtica colombiana y diseño contemporáneo.</p>
                <a href="#/catalogo" class="inline-block bg-cacao text-marfil px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-negro transition shadow-lg">Descubrir Colección</a>
            </div>
        </section>
        <section class="py-24 px-6 max-w-7xl mx-auto text-center">
            <h3 class="font-serif text-3xl text-cacao mb-2">Colecciones Destacadas</h3>
            <div class="w-12 h-[1px] bg-dorado mx-auto mb-16"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${catalogData.slice(0, 4).map(p => `
                    <div class="group text-left cursor-pointer" onclick="location.hash='#/producto?id=${p.id}'">
                        <div class="relative overflow-hidden h-96 bg-marfil/50 mb-4 border border-arena/30">
                            <span class="absolute top-4 left-4 z-10 bg-negro text-marfil text-[9px] px-2 py-1 tracking-widest uppercase">${p.badge}</span>
                            <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                        </div>
                        <p class="text-[10px] text-cacao tracking-widest uppercase mb-1">${p.collection}</p>
                        <h3 class="font-serif text-xl text-negro mb-1">${p.name}</h3>
                        <p class="text-sm font-medium">$${p.price} COP</p>
                    </div>
                `).join('')}
            </div>
            <div class="mt-16">
                <a href="#/catalogo" class="border border-cacao text-cacao px-8 py-4 text-xs tracking-widest uppercase hover:bg-cacao hover:text-marfil transition">Ver todo el catálogo</a>
            </div>
        </section>
    `;

    // VISTA: CATÁLOGO COMPLETO
    const ViewCatalogo = () => `
        <div class="bg-arena/20 py-12 px-6">
            <div class="max-w-7xl mx-auto text-center">
                <h2 class="font-serif text-4xl text-cacao mb-4">Catálogo NAMAYUSA</h2>
                <p class="text-sm tracking-widest text-negro font-light uppercase">Bolsos · Sombreros · Palma de Iraca · Joyería</p>
            </div>
        </div>
        <div class="py-16 px-6 max-w-7xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                ${catalogData.map(p => `
                    <div class="group text-left cursor-pointer" onclick="location.hash='#/producto?id=${p.id}'">
                        <div class="relative overflow-hidden h-[400px] mb-4">
                            <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                            <div class="absolute bottom-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition bg-marfil/90 backdrop-blur-sm">
                                <button onclick="event.stopPropagation(); addToCart('${p.name}')" class="w-full text-xs tracking-widest py-2 text-cacao hover:text-negro border border-cacao uppercase">Comprar Rápido</button>
                            </div>
                        </div>
                        <h3 class="font-serif text-2xl text-negro">${p.name}</h3>
                        <p class="text-sm text-cacao">$${p.price} COP</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // VISTA: FICHA DE PRODUCTO (PDP)
    const ViewProducto = (id) => {
        const p = catalogData.find(item => item.id === id);
        if(!p) return `<div class="text-center py-20 text-2xl font-serif">Producto no encontrado.</div>`;
        
        return `
            <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
                <div class="md:w-1/2">
                    <img src="${p.image}" class="w-full h-[600px] object-cover shadow-sm">
                </div>
                <div class="md:w-1/2 flex flex-col justify-center">
                    <p class="text-xs text-arena tracking-[0.2em] uppercase mb-2">${p.collection}</p>
                    <h1 class="font-serif text-5xl text-cacao mb-4">${p.name}</h1>
                    <p class="text-2xl font-light mb-6">$${p.price} COP</p>
                    <p class="text-sm leading-loose mb-8 font-light border-b border-arena/30 pb-8">${p.description}</p>
                    
                    <div class="mb-8">
                        <p class="text-xs tracking-widest uppercase mb-2 font-medium">Materiales y Elaboración:</p>
                        <p class="text-sm font-light text-gray-600">${p.materials}</p>
                    </div>
                    
                    <div class="flex flex-col gap-4">
                        <button onclick="addToCart('${p.name}')" class="w-full bg-cacao text-marfil py-4 text-xs tracking-widest uppercase hover:bg-negro transition shadow-lg">Añadir al Carrito</button>
                        <a href="https://wa.me/573000000000?text=Hola, estoy interesado en el producto ${p.name}" target="_blank" class="w-full border border-cacao text-cacao py-4 text-xs tracking-widest uppercase text-center hover:bg-arena/20 transition flex items-center justify-center gap-2">
                            <i data-lucide="message-circle" class="w-4 h-4"></i> Consultar por WhatsApp
                        </a>
                    </div>
                    <div class="mt-8 flex gap-4 opacity-60 text-xs items-center">
                        <i data-lucide="shield-check" class="w-4 h-4"></i> Pago 100% Seguro
                        <i data-lucide="truck" class="w-4 h-4 ml-4"></i> Envíos Nacionales
                    </div>
                </div>
            </div>
        `;
    };

    // VISTA: NUESTRA HISTORIA
    const ViewHistoria = () => `
        <div class="relative h-[60vh] flex items-center justify-center bg-negro text-marfil">
            <div class="text-center max-w-3xl px-6 relative z-10">
                <h1 class="font-serif text-5xl mb-6 text-arena">De Tuchín para el Mundo</h1>
                <p class="font-light leading-relaxed tracking-wide">NAMAYUSA nace en el corazón de la tradición artesanal colombiana para llevar al mundo piezas únicas elaboradas por manos expertas que conservan saberes ancestrales.</p>
            </div>
        </div>
        <div class="max-w-4xl mx-auto py-24 px-6 text-center">
            <h2 class="font-serif text-3xl text-cacao mb-8">Nuestros Valores</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div class="w-16 h-16 mx-auto border rounded-full flex items-center justify-center mb-4 border-arena"><i data-lucide="leaf" class="text-cacao"></i></div>
                    <h3 class="font-serif text-xl mb-2">Materiales Naturales</h3>
                    <p class="text-xs font-light">Caña flecha y palma de iraca cultivadas sosteniblemente.</p>
                </div>
                <div>
                    <div class="w-16 h-16 mx-auto border rounded-full flex items-center justify-center mb-4 border-arena"><i data-lucide="users" class="text-cacao"></i></div>
                    <h3 class="font-serif text-xl mb-2">Comercio Justo</h3>
                    <p class="text-xs font-light">Trabajamos directamente con comunidades Zenú en Córdoba.</p>
                </div>
                <div>
                    <div class="w-16 h-16 mx-auto border rounded-full flex items-center justify-center mb-4 border-arena"><i data-lucide="sparkles" class="text-cacao"></i></div>
                    <h3 class="font-serif text-xl mb-2">Lujo Silencioso</h3>
                    <p class="text-xs font-light">Diseño contemporáneo que eleva la artesanía colombiana.</p>
                </div>
            </div>
        </div>
    `;

    // 5. El Router (Controlador de Navegación)
    const initRouter = () => {
        const render = () => {
            const hash = window.location.hash || '#/';
            window.scrollTo(0, 0); // Sube arriba al cambiar de página

            if (hash === '#/') appRoot.innerHTML = ViewHome();
            else if (hash === '#/catalogo') appRoot.innerHTML = ViewCatalogo();
            else if (hash === '#/historia') appRoot.innerHTML = ViewHistoria();
            else if (hash.startsWith('#/producto')) {
                const params = new URLSearchParams(hash.split('?')[1]);
                appRoot.innerHTML = ViewProducto(params.get('id'));
            } else {
                appRoot.innerHTML = ViewHome();
            }
            lucide.createIcons(); // Recarga los íconos de Lucide
        };

        window.addEventListener('hashchange', render);
        render(); // Render inicial
    };
});