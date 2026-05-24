// Base de datos de productos de Sofe Security
// Nota: Todos los datos técnicos están basados en arquitecturas reales,
// precios y certificaciones específicas se validan por proyecto.

const PRODUCTS_DATA = [
  {
    id: "cctv-domo-8mp",
    collection: "cctv",
    collectionName: "Videovigilancia / CCTV",
    name: "Cámara Domo IP Ultra HD PTZ 8MP",
    sku: "SOFE-SEC-PTZ8M-X",
    description: "Cámara domo de alta velocidad y resolución 8MP (4K) para entornos industriales y corporativos. Equipada con zoom óptico de 40x y analíticas de inteligencia artificial integradas en el borde.",
    features: [
      "Resolución 4K UHD (3840 x 2160) a 30 fps",
      "Zoom óptico de 40x con autoenfoque rápido",
      "Iluminación inteligente IR de hasta 200 metros",
      "Protección contra vandalismo IK10 e intemperie IP67",
      "Analíticas en borde: detección de rostros, cruce de línea e intrusión"
    ],
    specifications: {
      "Sensor de Imagen": "1/1.8\" Progressive Scan CMOS",
      "Compresión de Video": "H.265+ / H.265 / H.264+ / H.264",
      "Alimentación": "Hi-PoE / 24 VAC (inyector según diseño)",
      "Certificaciones": "CE, FCC, UL (según ficha del fabricante)",
      "Garantía de Fábrica": "3 Años (según ficha técnica)"
    },
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "vms-enterprise",
    collection: "vms",
    collectionName: "Software VMS y Analíticas",
    name: "Sofe VMS Enterprise - Licencia Base 64 Canales",
    sku: "SOFE-SEC-VMS-64C",
    description: "Software de gestión de video a gran escala. Proporciona administración unificada, monitoreo en tiempo real, búsqueda inteligente de eventos y soporte para integraciones avanzadas de analíticas de terceros.",
    features: [
      "Arquitectura de servidor federado sin límite de expansión",
      "Soporte nativo para failover y redundancia de grabación",
      "Búsqueda acelerada por metadatos (búsqueda forense)",
      "Cliente de escritorio, web y móvil de alto rendimiento",
      "Integración directa con sistemas de control de acceso"
    ],
    specifications: {
      "Canales Base": "64 Canales de Video IP",
      "Arquitectura": "Cliente-Servidor (según plataforma seleccionada)",
      "Base de Datos": "PostgreSQL / MS SQL Server",
      "Actualizaciones Incluidas": "12 meses de soporte y parches (según ficha técnica)",
      "Licenciamiento": "Permanente con suscripción opcional de soporte"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "storage-san-16bay",
    collection: "storage",
    collectionName: "Almacenamiento Enterprise",
    name: "NAS/SAN Rackmount 16-Bay High-Density Storage",
    sku: "SOFE-SEC-SAN-16B",
    description: "Unidad de almacenamiento masivo redundante diseñada para videovigilancia continua 24/7. Permite alojar flujos masivos de grabación con alta tolerancia a fallos.",
    features: [
      "Soporte para 16 bahías SAS/SATA Hot-Swap de hasta 22TB c/u",
      "Controladoras activas-pasivas para redundancia completa",
      "Configuración RAID 0, 1, 5, 6, 10, 50, 60 y repuesto dinámico",
      "Puertos SFP+ de 10Gbps integrados para alto rendimiento",
      "Fuentes de alimentación redundantes con certificación 80 Plus Platinum"
    ],
    specifications: {
      "Capacidad Máxima": "Hasta 352TB brutos (según ficha técnica)",
      "Procesador": "Intel Xeon Multicore Enterprise",
      "Memoria RAM": "64GB DDR4 ECC ECC Registrada (expandible según configuración)",
      "Conectividad": "4x 10GbE SFP+, 4x 1GbE RJ45",
      "Factor de Forma": "Rackmount 3U"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "server-xeon-24c",
    collection: "compute",
    collectionName: "Workstations / Servidores (Cómputo)",
    name: "Servidor de Procesamiento de Video Xeon 24-Core",
    sku: "SOFE-SEC-SRV-24C",
    description: "Servidor de alto rendimiento optimizado para ejecutar analíticas complejas de IA, reconocimiento de matrículas y flujos intensivos de VMS en tiempo real.",
    features: [
      "Procesadores escalables de nivel empresarial",
      "Unidad de estado sólido NVMe dedicada para sistema operativo y VMS",
      "Tarjeta aceleradora GPU para procesamiento de redes neuronales e IA",
      "Administración remota fuera de banda (IPMI 2.0 / iLO)",
      "Ventilación redundante de alto flujo"
    ],
    specifications: {
      "Procesador": "Intel Xeon Silver / Gold (configuración según proyecto)",
      "GPU Aceleradora": "Nvidia RT A4000 16GB o equivalente (según ficha técnica)",
      "Memoria RAM": "128GB DDR4 ECC RDIMM",
      "Almacenamiento OS": "2x 960GB SSD Enterprise RAID 1",
      "Garantía": "Soporte según alcance contratado"
    },
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ups-online-3kva",
    collection: "power",
    collectionName: "Energía y Respaldo (Power & UPS)",
    name: "UPS Online Doble Conversión 3kVA Rackmount",
    sku: "SOFE-SEC-UPS-3K",
    description: "Sistema de alimentación ininterrumpida (UPS) de doble conversión en línea. Protege los equipos sensibles de CCTV y cómputo contra variaciones, picos y cortes de energía, asegurando un tiempo de transferencia de 0ms.",
    features: [
      "Topología online de doble conversión real",
      "Factor de potencia de salida de 0.9 o superior (según ficha técnica)",
      "Ranura inteligente para tarjeta SNMP de monitoreo remoto",
      "Baterías hot-swap reemplazables en caliente",
      "Diseño convertible en Rack de 2U o Torre"
    ],
    specifications: {
      "Capacidad": "3000VA / 2700W",
      "Rango de Voltaje de Entrada": "80V - 150V AC (según ficha técnica)",
      "Tiempo de Transferencia": "0 ms (Doble conversión permanente)",
      "Autonomía típica": "15 minutos a media carga (expandible con módulos compatibles)",
      "Certificaciones de seguridad": "NOM, UL, FCC"
    },
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pdu-smart-16a",
    collection: "distribution",
    collectionName: "Distribución Eléctrica y Puesta a Tierra",
    name: "PDU Inteligente Medida por Salida 16A",
    sku: "SOFE-SEC-PDU-SMART",
    description: "Unidad de distribución de energía inteligente para rack de comunicaciones. Permite el monitoreo de energía en tiempo real por cada salida individual y el encendido/apagado remoto de puertos para reiniciar equipos de CCTV colgados.",
    features: [
      "8 tomacorrientes IEC C13 controlables individualmente",
      "Medición de corriente, voltaje, potencia activa y energía por salida",
      "Pantalla LCD local para visualización de parámetros de corriente",
      "Soporte de alertas de sobrecarga por correo o SNMP",
      "Bajo perfil para montaje horizontal en rack de 1U"
    ],
    specifications: {
      "Voltaje Nominal": "110V / 220V Autorregulable (según ficha técnica)",
      "Corriente Máxima": "16A total",
      "Conexión de Entrada": "NEMA L5-20P o IEC C20 (según ficha técnica)",
      "Protocolos de Red": "HTTP, HTTPS, SNMP, SSH, NTP",
      "Garantía": "24 meses en condiciones normales de uso"
    },
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rack-floor-42u",
    collection: "racks",
    collectionName: "Racks, Gabinetes y Organización",
    name: "Gabinete Rack de Piso 42U Puerta Perforada",
    sku: "SOFE-SEC-RACK-42U",
    description: "Gabinete metálico estructural de 42 unidades de rack estándar de 19 pulgadas. Diseñado para alojar servidores pesados, almacenamiento enterprise y equipo activo de red de misión crítica, ofreciendo máxima ventilación pasiva.",
    features: [
      "Puerta frontal y trasera de malla perforada (70% flujo de aire)",
      "Rieles de montaje ajustables en profundidad con marcado de U",
      "Paneles laterales desmontables con cerradura de llave",
      "Capacidad de carga estática de hasta 1200 kg (según ficha técnica)",
      "Entradas de cable superiores e inferiores protegidas contra polvo"
    ],
    specifications: {
      "Unidades de Rack": "42U",
      "Dimensiones externas": "2000mm alto x 600mm ancho x 1000mm profundidad (según ficha técnica)",
      "Material estructural": "Acero laminado en frío SPCC de alto calibre",
      "Acabado": "Pintura electrostática en polvo negra, texturizada",
      "Accesorios Incluidos": "Ruedas de alta resistencia, niveladores, kit de tornillos jaula"
    },
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fiber-tactical-12c",
    collection: "fiber",
    collectionName: "Fibra Óptica (Fiber Backbone)",
    name: "Cable Táctico de Fibra Óptica 12 Hilos Monomodo",
    sku: "SOFE-SEC-FIB-12H",
    description: "Fibra óptica reforzada para tendido de troncales exteriores o perimetrales de seguridad a grandes distancias. Su blindaje estructural protege los hilos contra roedores, humedad y tensiones mecánicas extremas.",
    features: [
      "12 hilos de fibra monomodo OS2 de ultra baja atenuación",
      "Cubierta exterior resistente a rayos UV y retardante a la flama LSZH",
      "Miembro de fuerza central dieléctrico y armadura de acero corrugado",
      "Diseño Loose Tube con gel antihumedad",
      "Ideal para conexiones perimetrales de cámaras a más de 100m sin repetidores"
    ],
    specifications: {
      "Tipo de Fibra": "Monomodo 9/125 µm (OS2)",
      "Diámetro exterior": "8.5 mm nominal (según ficha técnica)",
      "Resistencia a la tensión": "1500 N máxima de instalación (según ficha técnica)",
      "Rango de Temperatura Operativa": "-40°C a +70°C",
      "Presentación": "Bobina de madera (longitud según disponibilidad)"
    },
    image: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cable-cat6a-lszh",
    collection: "cabling",
    collectionName: "Cableado Estructurado (Cobre)",
    name: "Bobina Cable UTP Categoría 6A 100% Cobre LSZH",
    sku: "SOFE-SEC-CAT6A-305",
    description: "Cable de cobre sólido Cat6A de alta calidad para redes Gigabit y aplicaciones PoE de alta potencia (PoE++). Diseñado específicamente para conectar cámaras IP, servidores y gateways con inmunidad al ruido eléctrico.",
    features: [
      "Conductores de cobre 100% sólido de calibre 23 AWG",
      "Soporta velocidades de datos de hasta 10Gbps a 100 metros",
      "Cubierta LSZH (Low Smoke Zero Halogen) para máxima seguridad contra incendios",
      "Separador central estriado (spline) que elimina el crosstalk",
      "Certificación Fluke Channel certificable a 500MHz (según ficha técnica)"
    ],
    specifications: {
      "Categoría de Red": "Categoría 6A (F/UTP o U/UTP según proyecto)",
      "Longitud": "305 metros (1000 pies)",
      "Frecuencia de Operación": "Hasta 500 MHz",
      "Estándares de Seguridad": "ANSI/TIA-568.2-D, ISO/IEC 11801",
      "Calibre de Conductor": "23 AWG sólido"
    },
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "display-videowall-55",
    collection: "displays",
    collectionName: "Pantallas Profesionales / Videowalls",
    name: "Monitor Profesional para Videowall 55\" Bisel 0.88mm",
    sku: "SOFE-SEC-DISP-55W",
    description: "Pantalla profesional diseñada para operación continua 24/7 en centros de control y monitoreo de seguridad. Cuenta con biseles ultra-delgados para una visualización inmersiva y casi sin costuras al agrupar múltiples pantallas.",
    features: [
      "Operación garantizada 24/7 sin retención de imagen",
      "Bisel ultra-delgado extremo de 0.88mm de borde a borde",
      "Brillo profesional de 500 nits para visualización perfecta en interiores iluminados",
      "Daisy Chain mediante DisplayPort para conectar pantallas en videowall sin hardware adicional",
      "Panel IPS que ofrece ángulos de visión de 178 grados"
    ],
    specifications: {
      "Tamaño de Pantalla": "55 Pulgadas diagonal",
      "Resolución Nativa": "FHD (1920 x 1080)",
      "Tiempo de Vida Mínimo": "50,000 horas continuas (según ficha técnica)",
      "Entradas / Salidas": "2x HDMI, 1x DP In, 1x DP Out, 1x DVI-D, RS232C, RJ45",
      "Garantía Comercial": "3 años en sitio (según ficha técnica)"
    },
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "acc-rj45-blindado",
    collection: "accessories",
    collectionName: "Accesorios y Consumibles",
    name: "Kit de Conectores RJ45 Blindados Cat6A Pass-Through",
    sku: "SOFE-SEC-CON-RJ45",
    description: "Conectores modulares blindados tipo Pass-Through (hilos pasantes) diseñados para una terminación rápida y perfecta en bobinas Cat6A. Proporciona protección contra interferencia electromagnética (EMI/RFI).",
    features: [
      "Diseño Pass-Through para alinear e inspeccionar hilos antes de ponchar",
      "Blindaje metálico externo de 360 grados para conexión a tierra del cable blindado",
      "Contactos con baño de oro de 50 micras para máxima conductividad y durabilidad",
      "Compatible con cables sólidos o multifilares de calibre 23 AWG",
      "Se vende en kit de 100 piezas con fundas protectoras incluidas (según ficha técnica)"
    ],
    specifications: {
      "Tipo de Conector": "RJ45 (8P8C) Blindado (FTP)",
      "Categoría certificada": "Cat6A / Cat7",
      "Cantidad por empaque": "100 conectores + 100 botas (según ficha técnica)",
      "Herramienta recomendada": "Ponchadora crimpadora de paso compatible",
      "Certificación": "Cumple con RoHS y TIA/EIA"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
  }
];

// Exportación compatible para navegores mediante global namespace si no se usa módulos
if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
}
