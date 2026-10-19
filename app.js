// ============================================================================
// CONFIGURACIÓN CENTRAL DE LA MARCA
// ============================================================================
const BRAND_CONFIG = {
    whatsappNumber: "57318263611",
    whatsappDisplay: "318 263 611",
    instagramHandle: "@namayusa.co"
};

const WA_SVG_ICON = '<svg class="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.529 5.856l-1.529 5.584 5.716-1.5c1.688.902 3.613 1.416 5.66 1.416 6.627 0 12-5.373 12-12s-5.373-12-11.376-11.356z"/></svg>';

// ============================================================================
// DICCIONARIO BILINGÜE (ESPAÑOL / INGLÉS)
// ============================================================================
const I18N = {
    es: {
        topbar: "ARTESANÍA COLOMBIANA CONTEMPORÁNEA · ENVÍOS NACIONALES E INTERNACIONALES",
        langLabel: "IDIOMA:",
        currLabel: "MONEDA:",
        navHome: "Inicio",
        navOrigen: "Origen",
        navCatalog: "Catálogo",
        navStones: "Piedras & Charms",
        navB2B: "B2B & Packaging",
        navEssence: "Esencia",
        navSizes: "Tallas",
        logoSub: "De Tuchín para el Mundo",
        waFloatSub: "Atención Directa",
        heroTag: "Artesanía Colombiana Contemporánea",
        heroTitle1: "Raíces que viajan,",
        heroTitle2: "historias que perduran.",
        heroQuote: '"Tradición que inspira, diseño que enamora."',
        heroDesc: "Conectamos la caña flecha de Tuchín, la palma de iraca de Usiacurí y las piedras naturales en piezas de edición limitada concebidas para clientes, boutiques, hoteles y regalos especiales.",
        btnOrigen: "Ver Colección Origen",
        btnCatalog: "Explorar Portafolio 2026",
        valSub: "Propuesta de Valor",
        valTitle: "Lo que distingue a NAMAYUSA",
        portSub: "Portafolio Integrado",
        portTitle: "Colecciones que Dialogan entre Sí",
        techSheet: "Ficha técnica",
        backCatalog: "Volver al Portafolio",
        matOrigin: "Material y Origen:",
        selectSize: "Selecciona Talla (S hasta Sobre Medida):",
        selectStone: "Selecciona Piedra / Intención:",
        selectRef: "Selecciona Referencia:",
        calcSizeBtn: "Calcular mi talla en cm",
        customTitle: "Personalización Artesanal (Opcional — Precio Extra):",
        customNone: "Sin marcado personalizado (+ $0)",
        customWeave: "Marcado en el Tejido — Iniciales o nombre tejido (+ ",
        customLeather: "Marcado en Cuero Quemado / Pirograbado al calor (+ ",
        customInputLabel: "Escribe las iniciales o nombre a marcar (Máx. 18 caracteres):",
        customPlaceholder: "Ej: SAMI / S.M. / NAMAYUSA",
        addToBag: "Añadir a la Bolsa",
        askWhatsapp: "Consultar SKU por WhatsApp",
        certIncluded: "Incluye Certificado de Autenticidad",
        dustIncluded: "Incluye Dust Bag de Algodón",
        searchPlaceholder: "Buscar por nombre, SKU (ej. NSV-001), iraca, bolso...",
        allCollections: "Todas las Colecciones",
        sortFeatured: "Ordenar: Destacados",
        sortPriceAsc: "Precio: Menor a Mayor",
        sortPriceDesc: "Precio: Mayor a Menor",
        catAll: "Todo el Portafolio",
        catHats: "Sombreros Vueltiaos",
        catBags: "Bolsos en Caña Flecha",
        catAcc: "Accesorios Caña Flecha",
        catIraca: "Palma de Iraca (Usiacurí)",
        catJewelry: "Joyería & Charms",
        stonesHeading: "Guía de Piedras Naturales y sus Propiedades",
        stonesSub: "Elige la piedra y la intención que deseas llevar contigo o regalar",
        stonesAvail: "Disponible en Collar artesanal y Pulsera con charm de caña flecha.",
        addBracelet: "Añadir Pulsera",
        cartTitle: "Tu Selección NAMAYUSA",
        cartSub: "Incluye Dust Bag & Certificado",
        cartPackLabel: "Presentación",
        cartPackVal: "Empaque Premium Incluido",
        cartTotalLabel: "Total Estimado",
        cartCheckoutBtn: "Enviar Pedido con SKU por WhatsApp",
        cartClearBtn: "Vaciar selección"
    },
    en: {
        topbar: "CONTEMPORARY COLOMBIAN CRAFTSMANSHIP · WORLDWIDE SHIPPING",
        langLabel: "LANG:",
        currLabel: "CURRENCY:",
        navHome: "Home",
        navOrigen: "Origin",
        navCatalog: "Catalog",
        navStones: "Stones & Charms",
        navB2B: "B2B & Packaging",
        navEssence: "Essence",
        navSizes: "Size Guide",
        logoSub: "From Tuchín to the World",
        waFloatSub: "Direct Concierge",
        heroTag: "Contemporary Colombian Craftsmanship",
        heroTitle1: "Traveling roots,",
        heroTitle2: "enduring stories.",
        heroQuote: '"Tradition that inspires, design that captivates."',
        heroDesc: "We connect Tuchín caña flecha, Usiacurí iraca palm, and natural stones into limited-edition pieces crafted for discerning clients, boutiques, hotels, and corporate gifts.",
        btnOrigen: "View Origin Collection",
        btnCatalog: "Explore 2026 Portfolio",
        valSub: "Value Proposition",
        valTitle: "What Sets NAMAYUSA Apart",
        portSub: "Integrated Portfolio",
        portTitle: "Collections in Dialogue",
        techSheet: "View details",
        backCatalog: "Back to Portfolio",
        matOrigin: "Material & Origin:",
        selectSize: "Select Hat Size (S to Custom Extra-Large):",
        selectStone: "Select Natural Stone / Intention:",
        selectRef: "Select Reference:",
        calcSizeBtn: "Calculate my size in cm",
        customTitle: "Artisanal Personalization / Marking (Optional Extra):",
        customNone: "No custom marking (+ $0)",
        customWeave: "Handwoven Marking — Initials or name woven into fiber (+ ",
        customLeather: "Burned Leather / Pyrography — Heat-engraved initials (+ ",
        customInputLabel: "Enter initials or name to mark (Max 18 chars):",
        customPlaceholder: "E.g., SAMI / S.M. / NAMAYUSA",
        addToBag: "Add to Artisanal Bag",
        askWhatsapp: "Inquire SKU via WhatsApp",
        certIncluded: "Includes Authenticity Certificate",
        dustIncluded: "Includes Cotton Dust Bag",
        searchPlaceholder: "Search by name, SKU (e.g. NSV-001), iraca, bag...",
        allCollections: "All Collections",
        sortFeatured: "Sort: Featured",
        sortPriceAsc: "Price: Low to High",
        sortPriceDesc: "Price: High to Low",
        catAll: "Full Portfolio",
        catHats: "Vueltiao Hats",
        catBags: "Caña Flecha Bags",
        catAcc: "Caña Flecha Accessories",
        catIraca: "Iraca Palm (Usiacurí)",
        catJewelry: "Jewelry & Charms",
        stonesHeading: "Natural Stones & Meaning Guide",
        stonesSub: "Choose the stone and intention you wish to wear or gift",
        stonesAvail: "Available as Artisanal Necklace and Caña Flecha Charm Bracelet.",
        addBracelet: "Add Bracelet",
        cartTitle: "Your NAMAYUSA Selection",
        cartSub: "Includes Dust Bag & Certificate",
        cartPackLabel: "Presentation",
        cartPackVal: "Premium Packaging Included",
        cartTotalLabel: "Estimated Total",
        cartCheckoutBtn: "Send Order with SKU via WhatsApp",
        cartClearBtn: "Clear bag"
    }
};

const CUSTOMIZATION_PRICES = {
    none: 0,
    weave: 35000,
    leather: 25000
};

// ============================================================================
// BASE DE DATOS DEL PORTAFOLIO 2026 Y COLECCIÓN ORIGEN
// ============================================================================
const CATALOG_DATA = [
    { id: "origen-tradicional-nsv001", sku: "NSV-001", name: "Sombrero Vueltiao Origen Tradicional", nameEn: "Traditional Origin Vueltiao Hat", category: "sombreros", collection: "Colección Origen", collectionKey: "Origen", priceCOP: 320000, image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=900&q=80", badge: "SKU NSV-001", description: "Sombrero vueltiao en contraste negro y marfil, con composición geométrica de inspiración tradicional y trama clásica de alto contraste.", descriptionEn: "Handwoven Vueltiao hat in black and ivory contrast, featuring traditional Zenú geometric composition.", materials: "Caña flecha tejida artesanalmente. Origen: Tuchín, Córdoba - Colombia." },
    { id: "origen-caribe-nsv005", sku: "NSV-005", name: "Sombrero Vueltiao Origen Caribe", nameEn: "Caribbean Origin Vueltiao Hat", category: "sombreros", collection: "Colección Origen", collectionKey: "Origen", priceCOP: 420000, image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&w=900&q=80", badge: "SKU NSV-005", description: "Edición con acentos azul, amarillo y rojo que aporta una lectura contemporánea y vibrante sobre el tejido tradicional Zenú.", descriptionEn: "Edition with blue, yellow, and red accents offering a vibrant contemporary take on traditional Zenú weaving.", materials: "Caña flecha tejida artesanalmente con detalles tricolor. Origen: Tuchín, Córdoba - Colombia." },
    { id: "origen-tricolor-nsv006", sku: "NSV-006", name: "Sombrero Vueltiao Origen Tricolor", nameEn: "Tricolor Origin Vueltiao Hat", category: "sombreros", collection: "Colección Origen", collectionKey: "Origen", priceCOP: 450000, image: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?auto=format&fit=crop&w=900&q=80", badge: "SKU NSV-006", description: "Pieza de edición especial con bandas de color, estrella superior azul y tramas gráficas de alto impacto visual.", descriptionEn: "Special edition piece featuring color bands, blue top star, and high-impact graphic weaves.", materials: "Caña flecha tejida artesanalmente de edición limitada. Origen: Tuchín, Córdoba - Colombia." },
    { id: "sombrero-fino-premium-23", sku: "NSV-023", name: "Sombrero Vueltiao Fino Premium 23", nameEn: "Fine Premium 23 Vueltiao Hat", category: "sombreros", collection: "Clásicos y Tradicionales", collectionKey: "Clasicos", priceCOP: 480000, image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80", badge: "23 Fibras · Elegancia", description: "Elegancia y detalle superior. Tejido extrafino de 23 fibras que ofrece una flexibilidad extraordinaria y un acabado de colección.", descriptionEn: "Superior elegance and detail. Extra-fine 23-fiber weave offering extraordinary flexibility and collector-grade finish.", materials: "Caña flecha 100% natural tinturada con barro y jagua. Incluye etiqueta numerada y certificado." },
    { id: "sombrero-fedora-zenu", sku: "NSV-FED", name: "Sombrero Fedora Zenú", nameEn: "Zenú Fedora Hat", category: "sombreros", collection: "Clásicos y Tradicionales", collectionKey: "Clasicos", priceCOP: 320000, image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80", badge: "Copa Fedora Clásica", description: "Moderno y versátil. Tejido a mano en caña flecha por artesanos de Tuchín, preservando la técnica ancestral en una silueta Fedora.", descriptionEn: "Modern and versatile. Handwoven in caña flecha by Tuchín artisans in a classic Fedora silhouette with leather band.", materials: "Caña Flecha Natural, Ala Media (6-7 cm aprox), Copa Fedora Clásica con cinta en cuero apta para pirograbado." },
    { id: "sombrero-contemporaneo-neon", sku: "NSV-NEO", name: "Sombrero Vueltiao Contemporáneo Neón", nameEn: "Contemporary Neon Vueltiao Hat", category: "sombreros", collection: "Vibrantes y Neón", collectionKey: "Neon", priceCOP: 360000, image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&w=800&q=80", badge: "Diseño Actual", description: "La tradición se atreve al color. Ribetes y aros en tonos fucsias, azules eléctricos y turquesas para destacar en días de sol.", descriptionEn: "Tradition dares to wear color. Fuchsia, electric blue, and turquoise trims crafted to stand out.", materials: "Caña flecha genuina con tinturado de alta fijación." },
    { id: "bolso-tote-moderna-cuero", sku: "NCF-TOT", name: "Bolsa Tipo Tote Moderna", nameEn: "Modern Caña Flecha & Leather Tote", category: "bolsos", collection: "Clásicos y Tradicionales", collectionKey: "Clasicos", priceCOP: 420000, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80", badge: "Caña Flecha & Cuero", description: "Diseño contemporáneo y funcional. Amplia, ligera y resistente, elaborada en caña flecha natural combinada con cuero natural.", descriptionEn: "Contemporary and functional design. Spacious, lightweight, and durable in natural caña flecha and genuine leather.", materials: "Tejido en caña flecha de Tuchín 100% artesanal, cuero natural (apto para quemado de iniciales), interior con cierre." },
    { id: "bolso-luna-medialuna", sku: "NCF-LUN", name: "Bolso LUNA (Media Luna)", nameEn: "LUNA Half-Moon Bag", category: "bolsos", collection: "Clásicos y Tradicionales", collectionKey: "Clasicos", priceCOP: 310000, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80", badge: "Silueta Media Luna", description: "Silueta curva ergonómica tipo media luna que se adapta con elegancia al hombro, destacando las tramas geométricas de la caña flecha.", descriptionEn: "Ergonomic half-moon curved silhouette that fits elegantly on the shoulder, highlighting geometric weaves.", materials: "100% Caña flecha tejida a mano con acabados en cuero." },
    { id: "bolso-coral-bucket", sku: "NCF-COR", name: "Bolso CORAL (Bucket Bag)", nameEn: "CORAL Bucket Bag", category: "bolsos", collection: "Clásicos y Tradicionales", collectionKey: "Clasicos", priceCOP: 350000, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80", badge: "Bucket Bag", description: "Bolso tipo bombonera (bucket bag) con borlas artesanales y cierre ajustable, ideal para llevar todo con estilo relajado y sofisticado.", descriptionEn: "Artisanal bucket bag with handcrafted tassels and adjustable closure, combining relaxed style with sophistication.", materials: "Caña flecha natural, base y correas en cuero genuino." },
    { id: "bolso-sol-redondo", sku: "NCF-SOL", name: "Bandolera SOL (Redondo)", nameEn: "SOL Round Crossbody", category: "bolsos", collection: "Ediciones Especiales", collectionKey: "Especiales", priceCOP: 280000, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80", badge: "Diseño Circular", description: "Estructura circular rígida tipo bandolera que combina la firmeza de las fibras naturales con espirales y tramas radiales en el centro.", descriptionEn: "Rigid round crossbody structure combining natural fiber durability with central spiral weaves.", materials: "Fibras naturales de caña flecha, hilos de alta resistencia y correa larga." },
    { id: "bolso-brisa-tote", sku: "NCF-BRI", name: "Bolso BRISA (Tote Flexible)", nameEn: "BRISA Flexible Maxi Tote", category: "bolsos", collection: "Tonos Tierra", collectionKey: "Tierra", priceCOP: 340000, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80", badge: "Maxi Tote", description: "Tote bag de gran capacidad que fusiona una silueta amplia y funcional con patrones tradicionales tejidos a mano.", descriptionEn: "High-capacity tote bag merging a wide, functional silhouette with handwoven traditional patterns.", materials: "Caña flecha seleccionada con asas superiores ergonómicas." },
    { id: "bolso-aura-woven", sku: "NCF-AUR", name: "Bolso AURA WOVEN (Mini Crossbody)", nameEn: "AURA WOVEN Mini Crossbody", category: "bolsos", collection: "Ediciones Especiales", collectionKey: "Especiales", priceCOP: 290000, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80", badge: "Mini Crossbody", description: "Formato compacto tipo sobre y crossbody con solapa geométrica en caña flecha y cuero, ideal para salidas nocturnas o eventos especiales.", descriptionEn: "Compact envelope crossbody featuring a geometric caña flecha flap and leather body.", materials: "Caña flecha de 21 pares, cuero natural y herrajes dorados." },
    { id: "accesorios-cana-flecha-set", sku: "NCF-ACC", name: "Línea de Accesorios en Caña Flecha", nameEn: "Caña Flecha Accessories Line", category: "accesorios", collection: "Clásicos y Tradicionales", collectionKey: "Clasicos", priceCOP: 95000, image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=800&q=80", badge: "Detalles con Identidad", description: "Detalles que complementan tu estilo o regalo corporativo: Monedero redondo, Tarjetero / Portadocumentos, Llavero, Cinturón, Abanico y Pulsera tejida.", descriptionEn: "Signature accessories: Round coin purse, Cardholder, Keychain, Artisanal belt, Hand fan, and Woven bracelet.", materials: "Caña flecha genuina de Tuchín y apliques en cuero." },
    { id: "iraca-tote-usiacuri", sku: "NPI-TOT", name: "Bolso IRACA Tote & Bucket", nameEn: "Usiacurí IRACA Tote & Bucket", category: "iraca", collection: "Tonos Tierra", collectionKey: "Tierra", priceCOP: 210000, image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=800&q=80", badge: "Palma de Usiacurí", description: "Arte que nace de la tradición del Atlántico. Disponible en silueta Tote, Bucket, Crossbody (Bandolera) y Clutch / Neceser práctico.", descriptionEn: "Handwoven in Usiacurí, Atlántico. Available in Tote, Bucket, Crossbody, and Clutch silhouettes.", materials: "100% Palma de Iraca tejida a mano en tonos naturales." },
    { id: "sombrero-iraca-natural", sku: "NPI-SOM", name: "Sombrero en Palma de Iraca", nameEn: "Natural Iraca Palm Hat", category: "iraca", collection: "Tonos Tierra", collectionKey: "Tierra", priceCOP: 240000, image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80", badge: "Ligero y Fresco", description: "Sombrero de palma de iraca sumamente ligero y fresco, acompañado de cinta decorativa con trama ancestral.", descriptionEn: "Ultra-light and fresh iraca palm hat featuring a handwoven ancestral band.", materials: "Palma de iraca natural y cinta tejida en caña flecha." },
    { id: "collares-coleccion-iraca", sku: "NPI-COL", name: "Collares Artesanales Colección Iraca", nameEn: "Iraca Collection Artisanal Necklaces", category: "iraca", collection: "Tonos Tierra", collectionKey: "Tierra", priceCOP: 135000, image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?auto=format&fit=crop&w=800&q=80", badge: "5 Tonos Disponibles", description: "Collares artesanales con medallón tejido en palma de iraca: Iraca Sol (Natural), Iraca Verde Salvia, Iraca Tierra, Iraca Luna (Negro) e Iraca Rosa Palo.", descriptionEn: "Artisanal necklaces with woven iraca medallion in 5 tones: Sun, Sage Green, Earth, Moon Black, and Rose.", materials: "Palma de iraca tejida a mano con tintes vegetales." },
    { id: "collares-piedras-naturales", sku: "NJP-COL", name: "Collares en Piedras Naturales", nameEn: "Natural Stone Necklaces", category: "joyeria", collection: "Ediciones Especiales", collectionKey: "Especiales", priceCOP: 145000, image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?auto=format&fit=crop&w=800&q=80", badge: "Energía & Propósito", description: "Collares con dije circular artesanal y piedras energéticas: Jaspe Rojo, Amatista, Ojo de Tigre, Cuarzo Rosado y Ágata Verde.", descriptionEn: "Necklaces with artisanal medallion and natural stones: Red Jasper, Amethyst, Tiger's Eye, Rose Quartz, and Green Agate.", materials: "Piedras 100% naturales seleccionadas y medallón con trama de caña flecha." },
    { id: "pulseras-charms-cana-flecha", sku: "NJP-PUL", name: "Pulseras con Charms de Caña Flecha", nameEn: "Caña Flecha Charm Bracelets", category: "joyeria", collection: "Ediciones Especiales", collectionKey: "Especiales", priceCOP: 120000, image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?auto=format&fit=crop&w=800&q=80", badge: "6 Intenciones", description: "Pulseras en piedras naturales con charms inspirados en tramas artesanales: Protección, Amor, Abundancia, Equilibrio, Fuerza y Paz.", descriptionEn: "Natural stone bracelets with gold-plated charms inspired by ancestral weaves: Protection, Love, Abundance, Balance, Strength, and Peace.", materials: "Piedras naturales auténticas y charm bañado en oro con motivo Zenú." }
];

const STONES_DATA = [
    { name: "Jaspe Rojo", nameEn: "Red Jasper", meaning: "Energía, vitalidad y fuerza", meaningEn: "Energy, vitality & strength", color: "bg-red-800 text-marfil", charm: "Fuerza / Strength" },
    { name: "Amatista", nameEn: "Amethyst", meaning: "Calma, espiritualidad y protección", meaningEn: "Calm, spirituality & protection", color: "bg-purple-900 text-marfil", charm: "Paz / Peace" },
    { name: "Ojo de Tigre", nameEn: "Tiger's Eye", meaning: "Fuerza, confianza y protección", meaningEn: "Strength, confidence & protection", color: "bg-amber-800 text-marfil", charm: "Protección / Protection" },
    { name: "Cuarzo Rosado", nameEn: "Rose Quartz", meaning: "Amor incondicional y armonía", meaningEn: "Unconditional love & harmony", color: "bg-pink-300 text-negro", charm: "Amor / Love" },
    { name: "Ágata Verde", nameEn: "Green Agate", meaning: "Equilibrio, salud y prosperidad", meaningEn: "Balance, health & prosperity", color: "bg-emerald-800 text-marfil", charm: "Abundancia / Abundance" },
    { name: "Cuarzo Cristal", nameEn: "Crystal Quartz", meaning: "Claridad mental y energía pura", meaningEn: "Mental clarity & pure energy", color: "bg-stone-200 text-negro", charm: "Equilibrio / Balance" }
];

const VALUE_PILLARS = [
    { num: "01", titleEs: "Origen", titleEn: "Origin", descEs: "Caña flecha de Tuchín, palma de iraca de Usiacurí y oficios artesanales colombianos.", descEn: "Caña flecha from Tuchín, iraca palm from Usiacurí, and authentic Colombian heritage." },
    { num: "02", titleEs: "Diseño", titleEn: "Design", descEs: "Siluetas actuales, paletas sobrias y detalles diferenciadores con lenguaje contemporáneo.", descEn: "Modern silhouettes, refined palettes, and distinctive artisanal details." },
    { num: "03", titleEs: "Versatilidad", titleEn: "Versatility", descEs: "Bolsos, sombreros, accesorios y joyería para clientes finales, regalos y boutiques.", descEn: "Bags, hats, accessories, and jewelry for retail clients, gifts, and boutiques." },
    { num: "04", titleEs: "Presentación", titleEn: "Presentation", descEs: "Packaging premium con dust bag, etiquetas numeradas y certificado de autenticidad.", descEn: "Premium packaging including cotton dust bag, numbered tags, and authenticity certificate." }
];

// Estado Global
let cart = JSON.parse(localStorage.getItem('namayusa_cart_v3') || '[]');
let currentCurrency = localStorage.getItem('namayusa_currency') || 'COP';
let currentLang = localStorage.getItem('namayusa_lang') || 'es';
const EXCHANGE_RATES = { COP: 1, USD: 0.00024, EUR: 0.00022 };

let filterState = {
    category: 'todos',
    collection: 'todas',
    search: '',
    sort: 'featured'
};

function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) ? I18N[currentLang][key] : I18N.es[key];
}

function getProductName(p) {
    return (currentLang === 'en' && p.nameEn) ? p.nameEn : p.name;
}

function getProductDesc(p) {
    return (currentLang === 'en' && p.descriptionEn) ? p.descriptionEn : p.description;
}

window.formatPrice = function(priceCOP) {
    const num = Number(priceCOP) || 0;
    if (currentCurrency === 'USD') return '$' + Math.round(num * EXCHANGE_RATES.USD) + ' USD';
    if (currentCurrency === 'EUR') return '€' + Math.round(num * EXCHANGE_RATES.EUR) + ' EUR';
    return '$' + num.toLocaleString('es-CO') + ' COP';
};

window.setLanguage = function(lang, skipToast) {
    currentLang = lang;
    localStorage.setItem('namayusa_lang', lang);
    ['es', 'en'].forEach(function(l) {
        const btn = document.getElementById('lang-' + l);
        if (btn) {
            btn.className = (l === lang)
                ? 'px-2 py-0.5 bg-cacao text-marfil font-medium transition'
                : 'px-2 py-0.5 hover:bg-marfil/10 transition';
        }
    });
    updateStaticLabels();
    renderCurrentRoute();
    renderCartUI();
    if (!skipToast) {
        showToast(lang === 'en' ? 'Language set to English' : 'Idioma actualizado a Español');
    }
};

window.setCurrency = function(curr, autoSwitchLang) {
    currentCurrency = curr;
    localStorage.setItem('namayusa_currency', curr);
    ['COP', 'USD', 'EUR'].forEach(function(c) {
        const btn = document.getElementById('curr-' + c);
        if (btn) {
            btn.className = (c === curr)
                ? 'px-2 py-0.5 bg-cacao text-marfil font-medium transition'
                : 'px-2 py-0.5 hover:bg-marfil/10 transition';
        }
    });

    if (autoSwitchLang) {
        if (curr === 'USD' || curr === 'EUR') {
            setLanguage('en', true);
        } else if (curr === 'COP') {
            setLanguage('es', true);
        }
    }

    renderCurrentRoute();
    renderCartUI();
    showToast(currentLang === 'en' ? ('Currency: ' + curr + ' · Language: EN') : ('Moneda: ' + curr + ' · Idioma: ES'));
};

function updateStaticLabels() {
    const map = {
        'topbar-text': 'topbar',
        'label-lang': 'langLabel',
        'label-curr': 'currLabel',
        'nav-home': 'navHome',
        'nav-origen': 'navOrigen',
        'nav-catalog': 'navCatalog',
        'nav-stones': 'navStones',
        'nav-b2b': 'navB2B',
        'nav-essence': 'navEssence',
        'nav-sizes': 'navSizes',
        'logo-subtitle': 'logoSub',
        'wa-float-sub': 'waFloatSub',
        'cart-title': 'cartTitle',
        'cart-subtitle': 'cartSub',
        'cart-pack-label': 'cartPackLabel',
        'cart-pack-val': 'cartPackVal',
        'cart-total-label': 'cartTotalLabel',
        'cart-checkout-btn': 'cartCheckoutBtn',
        'cart-clear-btn': 'cartClearBtn'
    };
    Object.keys(map).forEach(function(id) {
        const el = document.getElementById(id);
        if (el) el.textContent = t(map[id]);
    });
}

window.showToast = function(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'bg-cacaoDark text-marfil px-5 py-3.5 rounded shadow-2xl border-l-4 border-dorado flex items-center gap-3 text-xs tracking-wider animate-fade-up pointer-events-auto';
    toast.innerHTML = '<i data-lucide="check-circle-2" class="w-4 h-4 text-arena flex-shrink-0"></i><span>' + message + '</span>';
    container.appendChild(toast);
    lucide.createIcons();
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s ease';
        setTimeout(function() { toast.remove(); }, 400);
    }, 3200);
};

window.toggleMobileMenu = function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
};

window.toggleCartDrawer = function(open) {
    const drawer = document.getElementById('cart-drawer');
    if (open) {
        renderCartUI();
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
};

// ============================================================================
// CARRITO CON SOPORTE DE TALLAS EXTENDIDAS Y MARCADO PERSONALIZADO
// ============================================================================
window.addToCart = function(productId, selectedOption, customType, customText) {
    const product = CATALOG_DATA.find(function(p) { return p.id === productId; });
    if (!product) return;

    const opt = selectedOption || 'Estándar';
    const cType = customType || 'none';
    const cText = (customText || '').trim();
    const extraCOP = CUSTOMIZATION_PRICES[cType] || 0;

    let customLabel = '';
    if (cType === 'weave') {
        customLabel = 'Marcado en Tejido' + (cText ? ': "' + cText + '"' : '') + ' (+' + formatPrice(extraCOP) + ')';
    } else if (cType === 'leather') {
        customLabel = 'Cuero Quemado' + (cText ? ': "' + cText + '"' : '') + ' (+' + formatPrice(extraCOP) + ')';
    }

    const unitPriceCOP = product.priceCOP + extraCOP;
    const cartKey = product.id + '__' + opt + '__' + cType + '__' + cText;
    const existing = cart.find(function(item) { return item.cartKey === cartKey; });

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            cartKey: cartKey,
            id: product.id,
            sku: product.sku,
            name: getProductName(product),
            priceCOP: unitPriceCOP,
            image: product.image,
            option: opt,
            customLabel: customLabel,
            qty: 1
        });
    }

    saveCart();
    renderCartUI();
    showToast('[' + product.sku + '] ' + getProductName(product) + (customLabel ? ' (Personalizado)' : '') + ' agregado.');
};

window.addFromPDP = function(productId) {
    const optEl = document.getElementById('pdp-option-select');
    const customTypeEl = document.getElementById('pdp-custom-type');
    const customTextEl = document.getElementById('pdp-custom-text');

    const opt = optEl ? optEl.value : 'Estándar';
    const cType = customTypeEl ? customTypeEl.value : 'none';
    const cText = customTextEl ? customTextEl.value.trim() : '';

    if (cType !== 'none' && !cText) {
        showToast(currentLang === 'en' ? 'Please enter the initials or name for your custom marking.' : 'Por favor escribe las iniciales o el nombre para el marcado personalizado.');
        if (customTextEl) customTextEl.focus();
        return;
    }

    addToCart(productId, opt, cType, cText);
};

window.onCustomizationChange = function(basePriceCOP) {
    const typeEl = document.getElementById('pdp-custom-type');
    const boxEl = document.getElementById('pdp-custom-input-box');
    const priceEl = document.getElementById('pdp-live-price');
    if (!typeEl || !priceEl) return;

    const selected = typeEl.value;
    const extra = CUSTOMIZATION_PRICES[selected] || 0;

    if (boxEl) {
        if (selected === 'none') {
            boxEl.classList.add('hidden');
        } else {
            boxEl.classList.remove('hidden');
        }
    }

    priceEl.textContent = formatPrice(basePriceCOP + extra);
};

window.updateCartQty = function(cartKey, delta) {
    const idx = cart.findIndex(function(item) { return item.cartKey === cartKey; });
    if (idx === -1) return;
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    saveCart();
    renderCartUI();
};

window.clearCart = function() {
    cart = [];
    saveCart();
    renderCartUI();
};

function saveCart() {
    localStorage.setItem('namayusa_cart_v3', JSON.stringify(cart));
    const badge = document.getElementById('cart-count');
    const totalItems = cart.reduce(function(acc, item) { return acc + item.qty; }, 0);
    if (badge) {
        badge.textContent = totalItems;
    }
}

function renderCartUI() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    if (!container || !totalEl) return;

    if (cart.length === 0) {
        container.innerHTML = '<div class="h-full flex flex-col items-center justify-center text-center py-16 opacity-75">' +
            '<i data-lucide="shopping-bag" class="w-12 h-12 text-cacao mb-4 stroke-1"></i>' +
            '<p class="font-serif text-2xl text-cacao mb-2">' + (currentLang === 'en' ? 'Your artisanal bag is empty' : 'Tu bolsa artesanal está vacía') + '</p>' +
            '<a href="#/catalogo" onclick="toggleCartDrawer(false)" class="mt-4 bg-cacao text-marfil px-6 py-3 text-[10px] tracking-[0.2em] uppercase">' + t('btnCatalog') + '</a>' +
            '</div>';
        totalEl.textContent = formatPrice(0);
        lucide.createIcons();
        return;
    }

    let totalCOP = 0;
    const htmlItems = cart.map(function(item) {
        const sub = item.priceCOP * item.qty;
        totalCOP += sub;
        const customBadge = item.customLabel
            ? '<p class="text-[10px] text-cacao font-medium bg-arena/25 px-2 py-0.5 rounded mt-1">' + item.customLabel + '</p>'
            : '';
        return '<div class="flex gap-3.5 bg-marfilLight p-3.5 rounded-lg border border-arena/40 items-center">' +
            '<img src="' + item.image + '" alt="' + item.name + '" class="w-16 h-20 object-cover arch-frame border border-arena/50 flex-shrink-0">' +
            '<div class="flex-grow">' +
                '<span class="text-[9px] tracking-widest uppercase text-cacao font-semibold block">SKU: ' + item.sku + '</span>' +
                '<h4 class="font-serif text-lg text-negro leading-tight">' + item.name + '</h4>' +
                '<p class="text-[10px] text-negro/70">' + item.option + '</p>' +
                customBadge +
                '<p class="text-xs font-semibold text-cacaoDark mt-1">' + formatPrice(sub) + '</p>' +
            '</div>' +
            '<div class="flex items-center border border-arena/60 rounded bg-marfil">' +
                '<button onclick="updateCartQty(\'' + item.cartKey.replace(/'/g, "\\'") + '\', -1)" class="px-2 py-1 text-xs hover:bg-arena/30">-</button>' +
                '<span class="px-2 text-xs font-medium">' + item.qty + '</span>' +
                '<button onclick="updateCartQty(\'' + item.cartKey.replace(/'/g, "\\'") + '\', 1)" class="px-2 py-1 text-xs hover:bg-arena/30">+</button>' +
            '</div>' +
        '</div>';
    });

    container.innerHTML = htmlItems.join('');
    totalEl.textContent = formatPrice(totalCOP);
    lucide.createIcons();
}

window.checkoutWhatsApp = function() {
    if (cart.length === 0) {
        showToast(currentLang === 'en' ? 'Select at least one NAMAYUSA piece.' : 'Selecciona al menos una pieza NAMAYUSA.');
        return;
    }
    let totalCOP = 0;
    const lines = cart.map(function(item, i) {
        const sub = item.priceCOP * item.qty;
        totalCOP += sub;
        const customInfo = item.customLabel ? ' | *' + item.customLabel + '*' : '';
        return (i + 1) + '. *[SKU: ' + item.sku + ']* ' + item.name + ' (' + item.option + customInfo + ') x' + item.qty + ' — ' + formatPrice(sub);
    });

    const msg = [
        "¡Hola *NAMAYUSA*! 🤎🌾",
        "Envío mi pedido desde la tienda oficial:",
        "",
        lines.join('\n'),
        "",
        "*Total Estimado:* " + formatPrice(totalCOP),
        "*Incluye:* Dust bag reutilizable, etiqueta de colección y Certificado de Autenticidad."
    ].join('\n');

    window.open('https://wa.me/' + BRAND_CONFIG.whatsappNumber + '?text=' + encodeURIComponent(msg), '_blank');
};

function renderProductCard(p) {
    const title = getProductName(p);
    return '<div class="group text-left cursor-pointer animate-fade-up flex flex-col justify-between bg-marfilLight p-4 rounded-xl border border-arena/40 hover:border-cacao/60 hover:shadow-xl transition-all duration-500" onclick="location.hash=\'#/producto?id=' + p.id + '\'">' +
        '<div>' +
            '<div class="relative overflow-hidden h-80 bg-cacaoDark p-3 pb-0 rounded-t-2xl mb-4 flex items-end justify-center">' +
                '<span class="absolute top-3 left-3 z-20 bg-negro/90 text-arena border border-dorado/40 text-[9px] px-2.5 py-1 tracking-[0.18em] uppercase rounded-full">' + p.badge + '</span>' +
                '<div class="w-full h-full bg-marfil arch-frame overflow-hidden relative shadow-inner">' +
                    '<img src="' + p.image + '" alt="' + title + '" class="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out">' +
                '</div>' +
                '<button onclick="event.stopPropagation(); addToCart(\'' + p.id + '\')" class="absolute bottom-3 right-5 z-20 bg-cacao text-marfil p-3 rounded-full shadow-lg hover:bg-dorado transition duration-300" title="SKU ' + p.sku + '">' +
                    '<i data-lucide="plus" class="w-4 h-4"></i>' +
                '</button>' +
            '</div>' +
            '<div class="flex justify-between items-center text-[9px] tracking-[0.2em] uppercase text-cacao font-medium mb-1">' +
                '<span>' + p.collection + '</span>' +
                '<span class="text-negro/50">SKU: ' + p.sku + '</span>' +
            '</div>' +
            '<h3 class="font-serif text-2xl text-negro group-hover:text-cacao transition leading-snug mb-1">' + title + '</h3>' +
        '</div>' +
        '<div class="pt-2 border-t border-arena/25 flex justify-between items-center mt-2">' +
            '<p class="text-sm font-semibold text-cacaoDark">' + formatPrice(p.priceCOP) + '</p>' +
            '<span class="text-[10px] tracking-widest uppercase text-negro/60 group-hover:text-cacao flex items-center gap-1">' +
                t('techSheet') + ' <i data-lucide="arrow-right" class="w-3 h-3"></i>' +
            '</span>' +
        '</div>' +
    '</div>';
}

// ============================================================================
// VISTAS SPA COMPLETAS
// ============================================================================

function ViewHome() {
    const pillarsHtml = VALUE_PILLARS.map(function(v) {
        const title = currentLang === 'en' ? v.titleEn : v.titleEs;
        const desc = currentLang === 'en' ? v.descEn : v.descEs;
        return '<div class="p-6 bg-marfil rounded-xl border border-arena/40 hover:border-cacao transition">' +
            '<span class="font-serif text-3xl text-dorado font-semibold">' + v.num + '</span>' +
            '<h4 class="font-serif text-2xl text-cacao mt-1 mb-2 uppercase tracking-wide">' + title + '</h4>' +
            '<p class="text-xs font-light text-negro/80 leading-relaxed">' + desc + '</p>' +
        '</div>';
    }).join('');

    const origenCards = CATALOG_DATA.filter(function(p) { return p.collectionKey === 'Origen'; }).map(renderProductCard).join('');

    return '<section class="relative min-h-[80vh] bg-cacaoDark text-marfil flex items-center overflow-hidden py-16 px-6">' +
        '<div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">' +
            '<div class="lg:col-span-7 text-center lg:text-left animate-fade-up">' +
                '<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-dorado/40 bg-negro/30 text-arena text-[10px] tracking-[0.24em] uppercase mb-6">' +
                    '<span class="w-2 h-2 rounded-full bg-dorado"></span> ' + t('heroTag') +
                '</div>' +
                '<h2 class="font-serif text-4xl sm:text-6xl lg:text-7xl text-marfil leading-[1.06] mb-4">' +
                    t('heroTitle1') + ' <br><span class="italic text-arena font-normal">' + t('heroTitle2') + '</span>' +
                '</h2>' +
                '<p class="font-serif italic text-xl text-arena/90 mb-4">' + t('heroQuote') + '</p>' +
                '<p class="text-marfil/80 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">' + t('heroDesc') + '</p>' +
                '<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">' +
                    '<a href="#/origen" class="bg-arena text-negro px-8 py-4 text-xs tracking-[0.22em] uppercase font-semibold hover:bg-marfil transition shadow-xl text-center">' + t('btnOrigen') + '</a>' +
                    '<a href="#/catalogo" class="border border-arena/50 text-marfil px-8 py-4 text-xs tracking-[0.22em] uppercase hover:bg-marfil/10 transition text-center">' + t('btnCatalog') + '</a>' +
                '</div>' +
            '</div>' +
            '<div class="lg:col-span-5 flex justify-center">' +
                '<div class="w-full max-w-sm bg-marfil p-4 pb-6 rounded-t-full shadow-2xl border-4 border-dorado/40 animate-float">' +
                    '<div class="arch-frame overflow-hidden h-96 relative">' +
                        '<img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" alt="NAMAYUSA" class="w-full h-full object-cover">' +
                    '</div>' +
                    '<div class="text-center mt-4 text-cacao">' +
                        '<p class="font-serif text-2xl tracking-widest">NAMAYUSA</p>' +
                        '<p class="text-[9px] tracking-[0.28em] uppercase text-negro/70">Caña Flecha · Iraca · Piedras Naturales</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</section>' +
    '<section class="py-16 px-6 bg-marfilLight border-b border-arena/40">' +
        '<div class="max-w-7xl mx-auto">' +
            '<div class="text-center mb-12">' +
                '<span class="text-[10px] tracking-[0.3em] uppercase text-cacao">' + t('valSub') + '</span>' +
                '<h3 class="font-serif text-3xl sm:text-4xl text-negro mt-1">' + t('valTitle') + '</h3>' +
            '</div>' +
            '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">' + pillarsHtml + '</div>' +
        '</div>' +
    '</section>' +
    '<section class="py-20 px-6 max-w-7xl mx-auto">' +
        '<div class="text-center mb-14">' +
            '<span class="text-[10px] tracking-[0.3em] uppercase text-cacao block mb-2">' + t('portSub') + '</span>' +
            '<h3 class="font-serif text-4xl text-negro">' + t('portTitle') + '</h3>' +
            '<div class="w-16 h-[1px] bg-dorado mx-auto mt-4"></div>' +
        '</div>' +
        '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">' +
            '<div onclick="filterByCategory(\'bolsos\')" class="cursor-pointer group bg-cacaoDark text-marfil p-6 rounded-xl border border-dorado/30 hover:-translate-y-1.5 transition duration-300">' +
                '<span class="text-[9px] tracking-[0.25em] text-arena uppercase">Línea 01 · Tuchín</span>' +
                '<h4 class="font-serif text-2xl mt-1 mb-2 text-marfil group-hover:text-arena transition">Bolsos en Caña Flecha</h4>' +
                '<p class="text-xs font-light text-marfil/75 mb-4">Referencias Luna, Coral, Sol, Brisa, Aura Woven y Tote Moderna con cuero natural.</p>' +
                '<span class="text-[10px] tracking-widest uppercase text-arena flex items-center gap-1">Explorar línea <i data-lucide="arrow-right" class="w-3 h-3"></i></span>' +
            '</div>' +
            '<div onclick="location.hash=\'#/origen\'" class="cursor-pointer group bg-cacaoDark text-marfil p-6 rounded-xl border border-dorado/30 hover:-translate-y-1.5 transition duration-300">' +
                '<span class="text-[9px] tracking-[0.25em] text-arena uppercase">Línea 02 · Tradición Zenú</span>' +
                '<h4 class="font-serif text-2xl mt-1 mb-2 text-marfil group-hover:text-arena transition">Sombreros Vueltiaos</h4>' +
                '<p class="text-xs font-light text-marfil/75 mb-4">Colección Origen (NSV-001, 005, 006), Tradicional 21, Fino Premium 23 y Fedora Zenú.</p>' +
                '<span class="text-[10px] tracking-widest uppercase text-arena flex items-center gap-1">Ver Colección Origen <i data-lucide="arrow-right" class="w-3 h-3"></i></span>' +
            '</div>' +
            '<div onclick="filterByCategory(\'iraca\')" class="cursor-pointer group bg-cacaoDark text-marfil p-6 rounded-xl border border-dorado/30 hover:-translate-y-1.5 transition duration-300">' +
                '<span class="text-[9px] tracking-[0.25em] text-arena uppercase">Línea 03 · Usiacurí</span>' +
                '<h4 class="font-serif text-2xl mt-1 mb-2 text-marfil group-hover:text-arena transition">Palma de Iraca</h4>' +
                '<p class="text-xs font-light text-marfil/75 mb-4">Bolsos Tote, Bucket, Clutch, Sombreros frescos, Cestas y Collares Colección Iraca.</p>' +
                '<span class="text-[10px] tracking-widest uppercase text-arena flex items-center gap-1">Explorar línea <i data-lucide="arrow-right" class="w-3 h-3"></i></span>' +
            '</div>' +
            '<div onclick="location.hash=\'#/joyeria\'" class="cursor-pointer group bg-cacaoDark text-marfil p-6 rounded-xl border border-dorado/30 hover:-translate-y-1.5 transition duration-300">' +
                '<span class="text-[9px] tracking-[0.25em] text-arena uppercase">Línea 04 · Energía & Raíz</span>' +
                '<h4 class="font-serif text-2xl mt-1 mb-2 text-marfil group-hover:text-arena transition">Piedras & Charms</h4>' +
                '<p class="text-xs font-light text-marfil/75 mb-4">Jaspe rojo, amatista, ojo de tigre, cuarzo rosado y ágata verde con charms tejidos.</p>' +
                '<span class="text-[10px] tracking-widest uppercase text-arena flex items-center gap-1">Descubrir significados <i data-lucide="arrow-right" class="w-3 h-3"></i></span>' +
            '</div>' +
        '</div>' +
    '</section>' +
    '<section class="py-12 px-6 max-w-7xl mx-auto text-center">' +
        '<span class="text-[10px] tracking-[0.3em] uppercase text-cacao">Brochure Oficial</span>' +
        '<h3 class="font-serif text-4xl text-negro mt-1 mb-2">Colección Origen (SKUs Oficiales)</h3>' +
        '<p class="text-xs tracking-widest uppercase text-negro/60 mb-12">NSV-001 · NSV-005 · NSV-006</p>' +
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-8">' + origenCards + '</div>' +
    '</section>';
}

function ViewOrigen() {
    const origenCards = CATALOG_DATA.filter(function(p) { return p.collectionKey === 'Origen'; }).map(renderProductCard).join('');
    return '<section class="bg-cacaoDark text-marfil py-16 px-6 animate-fade-up">' +
        '<div class="max-w-5xl mx-auto text-center">' +
            '<span class="text-[10px] tracking-[0.3em] uppercase text-arena block mb-2">Brochure Premium · Sombreros Vueltiaos</span>' +
            '<h1 class="font-serif text-5xl sm:text-6xl mb-4">Colección Origen</h1>' +
            '<p class="text-sm sm:text-base font-light text-marfil/80 max-w-2xl mx-auto leading-relaxed">Selección de sombreros vueltiaos que reúne contraste, geometría y color en piezas artesanales concebidas para clientes, boutiques, hoteles y regalos especiales.</p>' +
        '</div>' +
    '</section>' +
    '<section class="py-16 px-6 max-w-7xl mx-auto">' +
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">' + origenCards + '</div>' +
        '<div id="certificado" class="bg-marfilLight border-2 border-dorado p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">' +
            '<div class="text-center border-b border-arena/50 pb-6 mb-8">' +
                '<div class="w-12 h-12 rounded-full bg-cacaoDark border border-dorado flex items-center justify-center mx-auto mb-3">' +
                    '<span class="font-serif text-2xl text-arena">N</span>' +
                '</div>' +
                '<span class="text-[10px] tracking-[0.3em] uppercase text-cacao block">NAMAYUSA | COLECCIÓN ORIGEN</span>' +
                '<h3 class="font-serif text-3xl sm:text-4xl text-negro mt-1">Certificado de Autenticidad Artesanal</h3>' +
                '<p class="text-xs font-light text-negro/80 max-w-xl mx-auto mt-3">Certifica que la pieza NAMAYUSA fue elaborada artesanalmente en caña flecha en Tuchín, Córdoba, e incluye numeración única de colección.</p>' +
            '</div>' +
            '<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-xs mb-8">' +
                '<div class="p-4 bg-marfil rounded border border-arena/40"><span class="text-[9px] tracking-widest uppercase text-cacao block mb-1">Referencia / SKU</span><p class="font-semibold text-negro">NSV-001 / NSV-005 / NSV-006</p></div>' +
                '<div class="p-4 bg-marfil rounded border border-arena/40"><span class="text-[9px] tracking-widest uppercase text-cacao block mb-1">Artesano o Taller</span><p class="font-semibold text-negro">Maestros Artesanos de Tuchín</p></div>' +
                '<div class="p-4 bg-marfil rounded border border-arena/40"><span class="text-[9px] tracking-widest uppercase text-cacao block mb-1">Personalización</span><p class="font-semibold text-negro">Disponible en Tejido o Cuero</p></div>' +
            '</div>' +
            '<div class="text-center">' +
                '<p class="font-serif italic text-xl text-cacao mb-4">"Una pieza tejida con historia."</p>' +
                '<a href="https://wa.me/' + BRAND_CONFIG.whatsappNumber + '?text=' + encodeURIComponent('Hola NAMAYUSA, deseo consultar disponibilidad de la Colección Origen (SKUs NSV-001, NSV-005, NSV-006).') + '" target="_blank" rel="noopener" class="inline-flex items-center gap-2.5 bg-cacaoDark text-marfil border border-dorado/60 px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-cacao transition">' +
                    WA_SVG_ICON + ' Solicitar Pieza Certificada por WhatsApp' +
                '</a>' +
            '</div>' +
        '</div>' +
    '</section>';
}

function ViewCatalogo() {
    const categoriesList = [
        { key: 'todos', label: t('catAll') },
        { key: 'sombreros', label: t('catHats') },
        { key: 'bolsos', label: t('catBags') },
        { key: 'accesorios', label: t('catAcc') },
        { key: 'iraca', label: t('catIraca') },
        { key: 'joyeria', label: t('catJewelry') }
    ];

    const categoryButtonsHtml = categoriesList.map(function(cat) {
        const activeClass = (filterState.category === cat.key)
            ? 'bg-cacao text-marfil font-semibold shadow'
            : 'bg-marfil text-negro border border-arena/50 hover:border-cacao';
        return '<button onclick="updateCategoryFilter(\'' + cat.key + '\')" class="px-4 py-2 rounded-full text-[10px] tracking-[0.16em] uppercase transition ' + activeClass + '">' +
            cat.label +
        '</button>';
    }).join('');

    const filtered = CATALOG_DATA.filter(function(p) {
        const matchCat = filterState.category === 'todos' || p.category === filterState.category;
        const matchCol = filterState.collection === 'todas' || p.collectionKey === filterState.collection;
        const q = filterState.search.trim().toLowerCase();
        const matchSearch = !q ||
            p.name.toLowerCase().includes(q) ||
            (p.nameEn && p.nameEn.toLowerCase().includes(q)) ||
            p.sku.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q);
        return matchCat && matchCol && matchSearch;
    });

    if (filterState.sort === 'price-asc') filtered.sort(function(a, b) { return a.priceCOP - b.priceCOP; });
    else if (filterState.sort === 'price-desc') filtered.sort(function(a, b) { return b.priceCOP - a.priceCOP; });

    const cardsHtml = filtered.map(renderProductCard).join('');

    return '<div class="bg-cacaoDark text-marfil py-14 px-6">' +
        '<div class="max-w-7xl mx-auto text-center">' +
            '<span class="text-[10px] tracking-[0.3em] text-arena uppercase block mb-2">Catálogo Premium 2026</span>' +
            '<h2 class="font-serif text-4xl sm:text-5xl text-marfil mb-3">Portafolio Oficial NAMAYUSA</h2>' +
            '<p class="text-xs tracking-[0.2em] text-arena/80 font-light uppercase">Caña Flecha · Sombreros Vueltiaos · Palma de Iraca · Piedras Naturales</p>' +
        '</div>' +
    '</div>' +
    '<div class="py-12 px-6 max-w-7xl mx-auto">' +
        '<div class="bg-marfilLight p-6 rounded-xl border border-arena/40 mb-10 shadow-sm space-y-6">' +
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4">' +
                '<input type="text" id="catalog-search-input" value="' + filterState.search + '" oninput="updateSearch(this.value)" placeholder="' + t('searchPlaceholder') + '" class="w-full bg-marfil border border-arena/60 rounded px-4 py-2.5 text-xs focus:outline-none focus:border-cacao">' +
                '<select onchange="updateCollectionFilter(this.value)" class="w-full bg-marfil border border-arena/60 rounded px-4 py-2.5 text-xs uppercase tracking-wider focus:outline-none focus:border-cacao">' +
                    '<option value="todas" ' + (filterState.collection === 'todas' ? 'selected' : '') + '>' + t('allCollections') + '</option>' +
                    '<option value="Origen" ' + (filterState.collection === 'Origen' ? 'selected' : '') + '>Colección Origen (SKUs)</option>' +
                    '<option value="Clasicos" ' + (filterState.collection === 'Clasicos' ? 'selected' : '') + '>Clásicos y Tradicionales</option>' +
                    '<option value="Neon" ' + (filterState.collection === 'Neon' ? 'selected' : '') + '>Vibrantes y Neón</option>' +
                    '<option value="Especiales" ' + (filterState.collection === 'Especiales' ? 'selected' : '') + '>Ediciones Especiales</option>' +
                    '<option value="Tierra" ' + (filterState.collection === 'Tierra' ? 'selected' : '') + '>Tonos Tierra & Iraca</option>' +
                '</select>' +
                '<select onchange="updateSort(this.value)" class="w-full bg-marfil border border-arena/60 rounded px-4 py-2.5 text-xs uppercase tracking-wider focus:outline-none focus:border-cacao">' +
                    '<option value="featured" ' + (filterState.sort === 'featured' ? 'selected' : '') + '>' + t('sortFeatured') + '</option>' +
                    '<option value="price-asc" ' + (filterState.sort === 'price-asc' ? 'selected' : '') + '>' + t('sortPriceAsc') + '</option>' +
                    '<option value="price-desc" ' + (filterState.sort === 'price-desc' ? 'selected' : '') + '>' + t('sortPriceDesc') + '</option>' +
                '</select>' +
            '</div>' +
            '<div class="flex flex-wrap gap-2 pt-2 border-t border-arena/30">' + categoryButtonsHtml + '</div>' +
        '</div>' +
        '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">' + cardsHtml + '</div>' +
    '</div>';
}

function ViewJoyeria() {
    const stonesHtml = STONES_DATA.map(function(s) {
        const sName = currentLang === 'en' ? s.nameEn : s.name;
        const sMeaning = currentLang === 'en' ? s.meaningEn : s.meaning;
        return '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50 flex flex-col justify-between shadow-xs">' +
            '<div>' +
                '<div class="flex justify-between items-center mb-3">' +
                    '<span class="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold ' + s.color + '">' + sName + '</span>' +
                    '<span class="text-[10px] tracking-widest uppercase text-cacao font-semibold">Charm: ' + s.charm + '</span>' +
                '</div>' +
                '<p class="font-serif text-2xl text-negro mb-2">' + sMeaning + '</p>' +
                '<p class="text-xs font-light text-negro/75 mb-4">' + t('stonesAvail') + '</p>' +
            '</div>' +
            '<button onclick="addToCart(\'pulseras-charms-cana-flecha\', \'' + sName.replace(/'/g, "\\'") + ' — Charm ' + s.charm + '\')" class="w-full bg-cacao text-marfil py-2.5 text-[10px] tracking-[0.2em] uppercase hover:bg-negro transition">' +
                t('addBracelet') + ' ' + sName +
            '</button>' +
        '</div>';
    }).join('');

    const jewelryCards = CATALOG_DATA.filter(function(p) {
        return p.category === 'joyeria' || p.id === 'collares-coleccion-iraca';
    }).map(renderProductCard).join('');

    return '<section class="bg-cacaoDark text-marfil py-16 px-6 animate-fade-up">' +
        '<div class="max-w-4xl mx-auto text-center">' +
            '<span class="text-[10px] tracking-[0.3em] uppercase text-arena block mb-2">NAMAYUSA</span>' +
            '<h1 class="font-serif text-5xl mb-4">' + t('stonesHeading') + '</h1>' +
            '<p class="text-sm font-light text-marfil/80 leading-relaxed">' + t('stonesSub') + '</p>' +
        '</div>' +
    '</section>' +
    '<section class="py-16 px-6 max-w-7xl mx-auto">' +
        '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">' + stonesHtml + '</div>' +
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-8">' + jewelryCards + '</div>' +
    '</section>';
}

function ViewProducto(id) {
    const p = CATALOG_DATA.find(function(item) { return item.id === id; });
    if (!p) return '<div class="text-center py-24 font-serif text-3xl text-cacao">Pieza no encontrada. <a href="#/catalogo" class="underline block text-sm font-sans mt-4">Volver al catálogo</a></div>';

    const isHat = p.category === 'sombreros' || p.id === 'sombrero-iraca-natural';
    const isJewelry = p.category === 'joyeria';
    const title = getProductName(p);
    const desc = getProductDesc(p);

    let optionsHtml = '';
    if (isHat) {
        optionsHtml =
            '<option value="Talla S (55 - 56 cm)">Talla S (55 - 56 cm)</option>' +
            '<option value="Talla M (57 - 58 cm) — Estándar" selected>Talla M (57 - 58 cm) — Estándar</option>' +
            '<option value="Talla L (59 - 60 cm)">Talla L (59 - 60 cm)</option>' +
            '<option value="Talla XL (61 - 62 cm) — Talla Grande">Talla XL (61 - 62 cm) — Talla Grande</option>' +
            '<option value="Talla XXL (63 - 64 cm) — Extra Grande">Talla XXL (63 - 64 cm) — Extra Grande</option>' +
            '<option value="Sobre Medida (+65 cm — Tejido Especial por Encargo)">Sobre Medida (+65 cm — Tejido Especial por Encargo)</option>';
    } else if (isJewelry) {
        optionsHtml =
            '<option value="Jaspe Rojo (Energía y Fuerza)">Jaspe Rojo — Energía y Fuerza</option>' +
            '<option value="Amatista (Calma y Protección)">Amatista — Calma y Protección</option>' +
            '<option value="Ojo de Tigre (Fuerza y Confianza)">Ojo de Tigre — Fuerza y Confianza</option>' +
            '<option value="Cuarzo Rosado (Amor y Armonía)">Cuarzo Rosado — Amor y Armonía</option>' +
            '<option value="Ágata Verde (Equilibrio y Prosperidad)">Ágata Verde — Equilibrio y Prosperidad</option>' +
            '<option value="Cuarzo Cristal (Claridad y Energía)">Cuarzo Cristal — Claridad y Energía</option>';
    } else {
        optionsHtml =
            '<option value="Diseño Oficial (SKU ' + p.sku + ')" selected>Diseño Oficial (SKU ' + p.sku + ')</option>' +
            '<option value="Consultar otros colores del lote">Consultar otros colores del lote</option>';
    }

    return '<div class="max-w-7xl mx-auto px-6 py-12 animate-fade-up">' +
        '<a href="#/catalogo" class="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-cacao hover:text-negro mb-8">' +
            '<i data-lucide="arrow-left" class="w-4 h-4"></i> ' + t('backCatalog') +
        '</a>' +
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">' +
            '<div class="lg:col-span-6 bg-cacaoDark p-8 rounded-2xl flex items-center justify-center shadow-xl">' +
                '<div class="w-full max-w-md bg-marfil p-3 rounded-t-full">' +
                    '<div class="arch-frame overflow-hidden h-[440px]">' +
                        '<img src="' + p.image + '" alt="' + title + '" class="w-full h-full object-cover">' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="lg:col-span-6 flex flex-col justify-center">' +
                '<div class="flex flex-wrap items-center gap-3 mb-2">' +
                    '<span class="text-xs text-cacao tracking-[0.2em] uppercase font-semibold">' + p.collection + '</span>' +
                    '<span class="bg-cacaoDark text-arena text-[10px] px-3 py-0.5 rounded-full uppercase tracking-widest">SKU: ' + p.sku + '</span>' +
                '</div>' +
                '<h1 class="font-serif text-4xl sm:text-5xl text-negro mb-3">' + title + '</h1>' +
                '<p id="pdp-live-price" class="font-serif text-3xl text-cacao font-semibold mb-5">' + formatPrice(p.priceCOP) + '</p>' +
                '<p class="text-sm leading-relaxed mb-6 font-light text-negro/85 border-b border-arena/40 pb-5">' + desc + '</p>' +
                '<div class="mb-5 bg-marfilLight p-4 rounded-lg border border-arena/40">' +
                    '<p class="text-[11px] tracking-[0.18em] uppercase mb-1 font-semibold text-cacao">' + t('matOrigin') + '</p>' +
                    '<p class="text-xs font-light text-negro/80 leading-relaxed">' + p.materials + '</p>' +
                '</div>' +
                '<div class="mb-5">' +
                    '<div class="flex justify-between items-center mb-2">' +
                        '<label class="text-[11px] tracking-widest uppercase font-medium">' + (isHat ? t('selectSize') : isJewelry ? t('selectStone') : t('selectRef')) + '</label>' +
                        (isHat ? '<button onclick="openAdvisorModal()" class="text-[11px] text-cacao underline">' + t('calcSizeBtn') + '</button>' : '') +
                    '</div>' +
                    '<select id="pdp-option-select" class="w-full bg-marfilLight border border-arena px-4 py-3 text-xs uppercase tracking-wider rounded focus:outline-none focus:border-cacao">' +
                        optionsHtml +
                    '</select>' +
                '</div>' +
                '<div class="mb-7 p-4 rounded-xl bg-arena/15 border border-dorado/50">' +
                    '<label class="text-[11px] tracking-widest uppercase font-semibold text-cacaoDark block mb-2">' +
                        '✨ ' + t('customTitle') +
                    '</label>' +
                    '<select id="pdp-custom-type" onchange="onCustomizationChange(' + p.priceCOP + ')" class="w-full bg-marfil border border-arena px-4 py-2.5 text-xs rounded focus:outline-none focus:border-cacao">' +
                        '<option value="none">' + t('customNone') + '</option>' +
                        '<option value="weave">' + t('customWeave') + formatPrice(CUSTOMIZATION_PRICES.weave) + ')</option>' +
                        '<option value="leather">' + t('customLeather') + formatPrice(CUSTOMIZATION_PRICES.leather) + ')</option>' +
                    '</select>' +
                    '<div id="pdp-custom-input-box" class="hidden mt-3">' +
                        '<label class="text-[10px] tracking-wider uppercase text-cacao block mb-1">' + t('customInputLabel') + '</label>' +
                        '<input type="text" id="pdp-custom-text" maxlength="18" placeholder="' + t('customPlaceholder') + '" class="w-full bg-marfilLight border border-cacao px-3.5 py-2 text-xs rounded uppercase tracking-widest focus:outline-none">' +
                    '</div>' +
                '</div>' +
                '<div class="flex flex-col sm:flex-row gap-4">' +
                    '<button onclick="addFromPDP(\'' + p.id + '\')" class="flex-1 bg-cacao text-marfil py-4 px-6 text-xs tracking-[0.2em] uppercase font-medium hover:bg-negro transition shadow-lg flex items-center justify-center gap-2">' +
                        '<i data-lucide="shopping-bag" class="w-4 h-4"></i> ' + t('addToBag') +
                    '</button>' +
                    '<a href="https://wa.me/' + BRAND_CONFIG.whatsappNumber + '?text=' + encodeURIComponent('Hola NAMAYUSA, quiero consultar por la pieza "' + title + '" [SKU: ' + p.sku + ']') + '" target="_blank" rel="noopener" class="flex-1 bg-cacaoDark text-marfil border border-dorado/60 py-4 px-6 text-xs tracking-[0.2em] uppercase text-center hover:bg-cacao transition flex items-center justify-center gap-2 font-medium">' +
                        WA_SVG_ICON + ' ' + t('askWhatsapp') +
                    '</a>' +
                '</div>' +
                '<div class="mt-6 pt-5 border-t border-arena/30 grid grid-cols-2 gap-3 text-[11px] text-negro/75">' +
                    '<div class="flex items-center gap-2"><i data-lucide="award" class="w-4 h-4 text-cacao"></i> ' + t('certIncluded') + '</div>' +
                    '<div class="flex items-center gap-2"><i data-lucide="package" class="w-4 h-4 text-cacao"></i> ' + t('dustIncluded') + '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';
}

function ViewExperiencia() {
    return '<section class="bg-cacaoDark text-marfil py-16 px-6 animate-fade-up">' +
        '<div class="max-w-4xl mx-auto text-center">' +
            '<span class="text-[10px] tracking-[0.3em] uppercase text-arena block mb-2">Desde la Etiqueta hasta la Entrega Final</span>' +
            '<h1 class="font-serif text-5xl mb-4">Experiencia de Marca & Canal B2B</h1>' +
            '<p class="text-sm font-light text-marfil/80">Una presentación que eleva el valor percibido, lista para regalar, exhibir en boutiques o exportar al mundo.</p>' +
        '</div>' +
    '</section>' +
    '<section class="py-16 px-6 max-w-7xl mx-auto">' +
        '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">' +
            '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50">' +
                '<i data-lucide="package" class="w-7 h-7 text-cacao mb-3"></i>' +
                '<h3 class="font-serif text-2xl text-negro mb-2">Dust Bag Reutilizable</h3>' +
                '<p class="text-xs font-light text-negro/80 leading-relaxed">Bolsa protectora elaborada en algodón natural reutilizable con el sello de NAMAYUSA para conservar las fibras.</p>' +
            '</div>' +
            '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50">' +
                '<i data-lucide="tag" class="w-7 h-7 text-cacao mb-3"></i>' +
                '<h3 class="font-serif text-2xl text-negro mb-2">Etiquetas Numeradas</h3>' +
                '<p class="text-xs font-light text-negro/80 leading-relaxed">Etiquetas diferenciadas para sombrero y bolso de mano con especificaciones de material, ala, copa y "Pieza N.°".</p>' +
            '</div>' +
            '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50">' +
                '<i data-lucide="heart-handshake" class="w-7 h-7 text-cacao mb-3"></i>' +
                '<h3 class="font-serif text-2xl text-negro mb-2">Tarjeta de Gratitud</h3>' +
                '<p class="text-xs font-light text-negro/80 leading-relaxed">Mensaje de agradecimiento: "¡Gracias! Por llevar nuestra cultura y apoyar lo hecho a mano en Tuchín, Córdoba."</p>' +
            '</div>' +
            '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50">' +
                '<i data-lucide="file-badge" class="w-7 h-7 text-cacao mb-3"></i>' +
                '<h3 class="font-serif text-2xl text-negro mb-2">Certificado Oficial</h3>' +
                '<p class="text-xs font-light text-negro/80 leading-relaxed">Documento de autenticidad artesanal con SKU, nombre de la pieza, taller artesano y fecha de elaboración.</p>' +
            '</div>' +
        '</div>' +
        '<div id="b2b" class="bg-cacaoDark text-marfil p-8 sm:p-12 rounded-2xl shadow-2xl">' +
            '<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">' +
                '<div class="lg:col-span-7">' +
                    '<span class="text-[10px] tracking-[0.3em] uppercase text-arena">Oportunidades Comerciales</span>' +
                    '<h2 class="font-serif text-4xl mt-1 mb-6">Una Marca Preparada para Distintos Canales</h2>' +
                    '<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">' +
                        '<div class="border-l-2 border-dorado pl-4"><h4 class="uppercase tracking-widest text-arena font-semibold mb-1">1. Tienda Virtual</h4><p class="font-light text-marfil/80">Colecciones, lanzamientos y ediciones limitadas con despacho directo.</p></div>' +
                        '<div class="border-l-2 border-dorado pl-4"><h4 class="uppercase tracking-widest text-arena font-semibold mb-1">2. Boutiques y Hoteles</h4><p class="font-light text-marfil/80">Selección curada para tiendas de diseño, hoteles boutique y turismo premium.</p></div>' +
                        '<div class="border-l-2 border-dorado pl-4"><h4 class="uppercase tracking-widest text-arena font-semibold mb-1">3. Alianzas Corporativas</h4><p class="font-light text-marfil/80">Regalos empresariales con marcado personalizado en tejido o cuero quemado.</p></div>' +
                        '<div class="border-l-2 border-dorado pl-4"><h4 class="uppercase tracking-widest text-arena font-semibold mb-1">4. Exportación</h4><p class="font-light text-marfil/80">Presentación bilingüe, fichas técnicas con SKU y packaging reforzado.</p></div>' +
                    '</div>' +
                '</div>' +
                '<div class="lg:col-span-5 bg-marfil text-negro p-6 rounded-xl">' +
                    '<h3 class="font-serif text-2xl text-cacao mb-1">Solicitud Comercial / Mayorista</h3>' +
                    '<p class="text-[11px] font-light text-negro/70 mb-4">Envía el canal, SKU o cantidad requerida directo a nuestra dirección comercial:</p>' +
                    '<div class="space-y-3 text-xs">' +
                        '<select id="b2b-channel" class="w-full border border-arena bg-marfilLight px-3 py-2.5 rounded">' +
                            '<option value="Boutique / Hotel">Canal: Boutique u Hotel</option>' +
                            '<option value="Regalos Corporativos / Empresariales">Canal: Regalos Empresariales</option>' +
                            '<option value="Pedido Mayorista / Exportación">Canal: Exportación / Mayorista</option>' +
                        '</select>' +
                        '<input type="text" id="b2b-sku" placeholder="SKUs o líneas de interés (ej. NSV-001, Bolsos Iraca)" class="w-full border border-arena bg-marfilLight px-3 py-2.5 rounded">' +
                        '<input type="text" id="b2b-qty" placeholder="Cantidad estimada de piezas (ej. 20 unidades)" class="w-full border border-arena bg-marfilLight px-3 py-2.5 rounded">' +
                        '<button onclick="sendB2BWhatsApp()" class="w-full bg-cacaoDark text-marfil py-3.5 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-cacao transition flex items-center justify-center gap-2">' +
                            WA_SVG_ICON + ' Contactar Dirección Comercial' +
                        '</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</section>';
}

function ViewHistoria() {
    return '<section class="bg-cacaoDark text-marfil py-20 px-6 animate-fade-up text-center">' +
        '<div class="max-w-3xl mx-auto">' +
            '<span class="text-[10px] tracking-[0.3em] uppercase text-arena block mb-2">Nuestra Esencia</span>' +
            '<h1 class="font-serif text-5xl mb-6">Artesanía con Identidad</h1>' +
            '<p class="text-sm sm:text-base font-light text-marfil/85 leading-relaxed">NAMAYUSA conecta saberes artesanales, fibras naturales y diseño contemporáneo para crear productos con significado, acabados cuidados y una estética reconocible.</p>' +
        '</div>' +
    '</section>' +
    '<section class="py-16 px-6 max-w-6xl mx-auto">' +
        '<div class="text-center mb-12">' +
            '<span class="text-[10px] tracking-[0.3em] uppercase text-cacao">Materiales y Origen</span>' +
            '<h2 class="font-serif text-4xl text-negro mt-1">Naturaleza Transformada en Diseño</h2>' +
        '</div>' +
        '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">' +
            '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50"><span class="font-serif text-3xl text-dorado">1</span><h3 class="font-serif text-2xl text-cacao mt-1 mb-2">Caña Flecha</h3><p class="text-xs font-light text-negro/80 leading-relaxed">Originaria de Tuchín, Córdoba. Da vida a nuestros sombreros vueltiaos, bolsos y accesorios con patrones gráficos de alta identidad.</p></div>' +
            '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50"><span class="font-serif text-3xl text-dorado">2</span><h3 class="font-serif text-2xl text-cacao mt-1 mb-2">Palma de Iraca</h3><p class="text-xs font-light text-negro/80 leading-relaxed">Tejida en Usiacurí, Atlántico. Permite crear bolsos, collares, sombreros y objetos ligeros con textura natural fresca.</p></div>' +
            '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50"><span class="font-serif text-3xl text-dorado">3</span><h3 class="font-serif text-2xl text-cacao mt-1 mb-2">Piedras Naturales</h3><p class="text-xs font-light text-negro/80 leading-relaxed">Jaspe, amatista, ojo de tigre, cuarzos y ágatas en collares y pulseras que aportan color, energía y sentido de colección.</p></div>' +
            '<div class="bg-marfilLight p-6 rounded-xl border border-arena/50"><span class="font-serif text-3xl text-dorado">4</span><h3 class="font-serif text-2xl text-cacao mt-1 mb-2">Cuero Natural</h3><p class="text-xs font-light text-negro/80 leading-relaxed">Complemento estructural en referencias seleccionadas de bolsos y cintas aptas para marcado con pirograbado al calor.</p></div>' +
        '</div>' +
    '</section>';
}

// ============================================================================
// FUNCIONES INTERACTIVAS, ASESOR DIGITAL Y ROUTER PRINCIPAL
// ============================================================================

window.sendB2BWhatsApp = function() {
    const channel = document.getElementById('b2b-channel').value;
    const sku = document.getElementById('b2b-sku').value || 'Portafolio General 2026';
    const qty = document.getElementById('b2b-qty').value || 'Por definir';
    const text = [
        "¡Hola *NAMAYUSA*! Solicito atención comercial B2B:",
        "• *Canal:* " + channel,
        "• *Referencias / SKUs:* " + sku,
        "• *Cantidad estimada:* " + qty,
        "Quedo atento(a) al catálogo corporativo y precios mayoristas."
    ].join('\n');
    window.open('https://wa.me/' + BRAND_CONFIG.whatsappNumber + '?text=' + encodeURIComponent(text), '_blank');
};

window.updateSearch = function(val) {
    filterState.search = val;
    renderCurrentRoute();
    const input = document.getElementById('catalog-search-input');
    if (input) {
        input.focus();
        input.setSelectionRange(val.length, val.length);
    }
};

window.updateCategoryFilter = function(cat) {
    filterState.category = cat;
    renderCurrentRoute();
};

window.updateCollectionFilter = function(col) {
    filterState.collection = col;
    renderCurrentRoute();
};

window.updateSort = function(sortType) {
    filterState.sort = sortType;
    renderCurrentRoute();
};

window.filterByCategory = function(catKey) {
    filterState.category = catKey;
    filterState.collection = 'todas';
    window.location.hash = '#/catalogo';
    renderCurrentRoute();
};

window.openAdvisorModal = function() {
    const modal = document.getElementById('advisor-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderAdvisorHome();
};

window.closeAdvisorModal = function() {
    const modal = document.getElementById('advisor-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.renderAdvisorHome = function() {
    const content = document.getElementById('advisor-content');
    content.innerHTML = '<p class="text-xs text-negro/80 mb-6 font-light">Selecciona una herramienta de asesoría instantánea:</p>' +
        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">' +
            '<button onclick="renderSizeCalculator()" class="p-5 text-left rounded-xl border border-arena hover:border-cacao bg-marfilLight transition">' +
                '<i data-lucide="ruler" class="w-6 h-6 text-cacao mb-2"></i>' +
                '<h4 class="font-serif text-xl text-negro">Calculadora de Talla (S a XXL)</h4>' +
                '<p class="text-[11px] font-light text-negro/70 mt-1">Conoce tu talla exacta en cm (incluye tallas grandes y sobre medida).</p>' +
            '</button>' +
            '<button onclick="closeAdvisorModal(); location.hash=\'#/joyeria\'" class="p-5 text-left rounded-xl border border-arena hover:border-cacao bg-marfilLight transition">' +
                '<i data-lucide="gem" class="w-6 h-6 text-cacao mb-2"></i>' +
                '<h4 class="font-serif text-xl text-negro">Guía de Piedras y Charms</h4>' +
                '<p class="text-[11px] font-light text-negro/70 mt-1">Descubre qué piedra natural elegir según su energía.</p>' +
            '</button>' +
        '</div>';
    lucide.createIcons();
};

window.renderSizeCalculator = function() {
    const content = document.getElementById('advisor-content');
    content.innerHTML = '<button onclick="renderAdvisorHome()" class="text-[10px] tracking-widest uppercase text-cacao mb-3 inline-block">&larr; Volver</button>' +
        '<h4 class="font-serif text-2xl text-negro mb-2">Calculadora de Talla de Sombrero</h4>' +
        '<p class="text-xs font-light text-negro/75 mb-4">Mide el contorno de tu cabeza en centímetros pasando 1 cm por encima de las cejas:</p>' +
        '<div class="flex gap-3 mb-4">' +
            '<input type="number" id="head-cm" min="52" max="70" value="58" class="w-full border border-arena bg-marfilLight px-4 py-2.5 text-sm rounded">' +
            '<button onclick="calculateHatSize()" class="bg-cacao text-marfil px-6 py-2.5 text-xs uppercase tracking-widest rounded">Calcular</button>' +
        '</div>' +
        '<div id="size-result" class="text-xs p-4 rounded bg-arena/20 border border-arena/50 text-cacaoDark font-medium">' +
            'Con 58 cm tu talla ideal es <strong>Talla M (57 - 58 cm)</strong>.' +
        '</div>';
};

window.calculateHatSize = function() {
    const cm = parseFloat(document.getElementById('head-cm').value);
    const res = document.getElementById('size-result');
    if (isNaN(cm) || cm < 50 || cm > 72) {
        res.innerHTML = 'Ingresa una medida válida entre 52 cm y 70 cm.';
        return;
    }
    let size = 'Talla M (57 - 58 cm)';
    if (cm <= 56) size = 'Talla S (55 - 56 cm)';
    else if (cm >= 57 && cm <= 58) size = 'Talla M (57 - 58 cm) — Estándar';
    else if (cm >= 59 && cm <= 60) size = 'Talla L (59 - 60 cm)';
    else if (cm >= 61 && cm <= 62) size = 'Talla XL (61 - 62 cm) — Talla Grande';
    else if (cm >= 63 && cm <= 64) size = 'Talla XXL (63 - 64 cm) — Extra Grande';
    else if (cm >= 65) size = 'Sobre Medida (+65 cm — Tejido Especial por Encargo)';
    res.innerHTML = 'Para <strong>' + cm + ' cm</strong>, tu medida ideal NAMAYUSA es: <strong class="underline">' + size + '</strong>.';
};

function renderCurrentRoute() {
    const appRoot = document.getElementById('app-root');
    if (!appRoot) return;
    const hash = window.location.hash || '#/';

    if (hash === '#/') appRoot.innerHTML = ViewHome();
    else if (hash.startsWith('#/origen')) appRoot.innerHTML = ViewOrigen();
    else if (hash.startsWith('#/catalogo')) {
        if (hash.includes('?')) {
            const params = new URLSearchParams(hash.split('?')[1]);
            if (params.get('cat')) filterState.category = params.get('cat');
            if (params.get('col')) filterState.collection = params.get('col');
        }
        appRoot.innerHTML = ViewCatalogo();
    } else if (hash.startsWith('#/joyeria')) appRoot.innerHTML = ViewJoyeria();
    else if (hash.startsWith('#/experiencia')) appRoot.innerHTML = ViewExperiencia();
    else if (hash.startsWith('#/historia')) appRoot.innerHTML = ViewHistoria();
    else if (hash.startsWith('#/producto')) {
        const params = new URLSearchParams(hash.split('?')[1]);
        appRoot.innerHTML = ViewProducto(params.get('id'));
    } else {
        appRoot.innerHTML = ViewHome();
    }

    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
    saveCart();
    setLanguage(currentLang, true);
    setCurrency(currentCurrency, false);
    renderCurrentRoute();

    window.addEventListener('hashchange', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderCurrentRoute();
    });
});