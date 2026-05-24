// Base de datos de productos de Sofe Security
// Nota: Todos los datos tÃ©cnicos estÃ¡n basados en arquitecturas reales,
// precios y certificaciones específicas se validan por proyecto.

const PRODUCTS_DATA = [
  {
    id: "cctv-domo-8mp",
    collection: "cctv",
    collectionName: "Videovigilancia / CCTV",
    name: "CÃ¡mara Domo IP Ultra HD PTZ 8MP",
    sku: "SOFE-SEC-PTZ8M-X",
    description: "CÃ¡mara domo de alta velocidad y resoluciÃ³n 8MP (4K) para entornos industriales y corporativos. Equipada con zoom Ã³ptico de 40x y analÃ­ticas de inteligencia artificial integradas en el borde.",
    features: [
      "ResoluciÃ³n 4K UHD (3840 x 2160) a 30 fps",
      "Zoom Ã³ptico de 40x con autoenfoque rÃ¡pido",
      "IluminaciÃ³n inteligente IR de hasta 200 metros",
      "ProtecciÃ³n contra vandalismo IK10 e intemperie IP67",
      "AnalÃ­ticas en borde: detecciÃ³n de rostros, cruce de lÃ­nea e intrusiÃ³n"
    ],
    specifications: {
      "Sensor de Imagen": "1/1.8\" Progressive Scan CMOS",
      "CompresiÃ³n de Video": "H.265+ / H.265 / H.264+ / H.264",
      "AlimentaciÃ³n": "Hi-PoE / 24 VAC (inyector según diseño)",
      "Certificaciones": "CE, FCC, UL (según ficha del fabricante)",
      "GarantÃ­a de FÃ¡brica": "3 AÃ±os (según ficha técnica)"
    },
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "vms-enterprise",
    collection: "vms",
    collectionName: "Software VMS y AnalÃ­ticas",
    name: "Sofe VMS Enterprise - Licencia Base 64 Canales",
    sku: "SOFE-SEC-VMS-64C",
    description: "Software de gestiÃ³n de video a gran escala. Proporciona administraciÃ³n unificada, monitoreo en tiempo real, bÃºsqueda inteligente de eventos y soporte para integraciones avanzadas de analÃ­ticas de terceros.",
    features: [
      "Arquitectura de servidor federado sin lÃ­mite de expansiÃ³n",
      "Soporte nativo para failover y redundancia de grabaciÃ³n",
      "BÃºsqueda acelerada por metadatos (bÃºsqueda forense)",
      "Cliente de escritorio, web y mÃ³vil de alto rendimiento",
      "IntegraciÃ³n directa con sistemas de control de acceso"
    ],
    specifications: {
      "Canales Base": "64 Canales de Video IP",
      "Arquitectura": "Cliente-Servidor (según plataforma seleccionada)",
      "Base de Datos": "PostgreSQL / MS SQL Server",
      "Actualizaciones Incluidas": "12 meses de soporte y parches (según ficha técnica)",
      "Licenciamiento": "Permanente con suscripciÃ³n opcional de soporte"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "storage-san-16bay",
    collection: "storage",
    collectionName: "Almacenamiento Enterprise",
    name: "NAS/SAN Rackmount 16-Bay High-Density Storage",
    sku: "SOFE-SEC-SAN-16B",
    description: "Unidad de almacenamiento masivo redundante diseÃ±ada para videovigilancia continua 24/7. Permite alojar flujos masivos de grabaciÃ³n con alta tolerancia a fallos.",
    features: [
      "Soporte para 16 bahÃ­as SAS/SATA Hot-Swap de hasta 22TB c/u",
      "Controladoras activas-pasivas para redundancia completa",
      "ConfiguraciÃ³n RAID 0, 1, 5, 6, 10, 50, 60 y repuesto dinÃ¡mico",
      "Puertos SFP+ de 10Gbps integrados para alto rendimiento",
      "Fuentes de alimentaciÃ³n redundantes con certificaciÃ³n 80 Plus Platinum"
    ],
    specifications: {
      "Capacidad MÃ¡xima": "Hasta 352TB brutos (según ficha técnica)",
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
    collectionName: "Workstations / Servidores (CÃ³mputo)",
    name: "Servidor de Procesamiento de Video Xeon 24-Core",
    sku: "SOFE-SEC-SRV-24C",
    description: "Servidor de alto rendimiento optimizado para ejecutar analÃ­ticas complejas de IA, reconocimiento de matrÃ­culas y flujos intensivos de VMS en tiempo real.",
    features: [
      "Procesadores escalables de nivel empresarial",
      "Unidad de estado sÃ³lido NVMe dedicada para sistema operativo y VMS",
      "Tarjeta aceleradora GPU para procesamiento de redes neuronales e IA",
      "AdministraciÃ³n remota fuera de banda (IPMI 2.0 / iLO)",
      "VentilaciÃ³n redundante de alto flujo"
    ],
    specifications: {
      "Procesador": "Intel Xeon Silver / Gold (configuración según proyecto)",
      "GPU Aceleradora": "Nvidia RT A4000 16GB o equivalente (según ficha técnica)",
      "Memoria RAM": "128GB DDR4 ECC RDIMM",
      "Almacenamiento OS": "2x 960GB SSD Enterprise RAID 1",
      "GarantÃ­a": "Soporte según alcance contratado"
    },
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ups-online-3kva",
    collection: "power",
    collectionName: "EnergÃ­a y Respaldo (Power & UPS)",
    name: "UPS Online Doble ConversiÃ³n 3kVA Rackmount",
    sku: "SOFE-SEC-UPS-3K",
    description: "Sistema de alimentaciÃ³n ininterrumpida (UPS) de doble conversiÃ³n en lÃ­nea. Protege los equipos sensibles de CCTV y cÃ³mputo contra variaciones, picos y cortes de energÃ­a, asegurando un tiempo de transferencia de 0ms.",
    features: [
      "TopologÃ­a online de doble conversiÃ³n real",
      "Factor de potencia de salida de 0.9 o superior (según ficha técnica)",
      "Ranura inteligente para tarjeta SNMP de monitoreo remoto",
      "BaterÃ­as hot-swap reemplazables en caliente",
      "DiseÃ±o convertible en Rack de 2U o Torre"
    ],
    specifications: {
      "Capacidad": "3000VA / 2700W",
      "Rango de Voltaje de Entrada": "80V - 150V AC (según ficha técnica)",
      "Tiempo de Transferencia": "0 ms (Doble conversiÃ³n permanente)",
      "AutonomÃ­a tÃ­pica": "15 minutos a media carga (expandible con módulos compatibles)",
      "Certificaciones de seguridad": "NOM, UL, FCC"
    },
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pdu-smart-16a",
    collection: "distribution",
    collectionName: "DistribuciÃ³n ElÃ©ctrica y Puesta a Tierra",
    name: "PDU Inteligente Medida por Salida 16A",
    sku: "SOFE-SEC-PDU-SMART",
    description: "Unidad de distribuciÃ³n de energÃ­a inteligente para rack de comunicaciones. Permite el monitoreo de energÃ­a en tiempo real por cada salida individual y el encendido/apagado remoto de puertos para reiniciar equipos de CCTV colgados.",
    features: [
      "8 tomacorrientes IEC C13 controlables individualmente",
      "MediciÃ³n de corriente, voltaje, potencia activa y energÃ­a por salida",
      "Pantalla LCD local para visualizaciÃ³n de parÃ¡metros de corriente",
      "Soporte de alertas de sobrecarga por correo o SNMP",
      "Bajo perfil para montaje horizontal en rack de 1U"
    ],
    specifications: {
      "Voltaje Nominal": "110V / 220V Autorregulable (según ficha técnica)",
      "Corriente MÃ¡xima": "16A total",
      "ConexiÃ³n de Entrada": "NEMA L5-20P o IEC C20 (según ficha técnica)",
      "Protocolos de Red": "HTTP, HTTPS, SNMP, SSH, NTP",
      "GarantÃ­a": "24 meses en condiciones normales de uso"
    },
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rack-floor-42u",
    collection: "racks",
    collectionName: "Racks, Gabinetes y OrganizaciÃ³n",
    name: "Gabinete Rack de Piso 42U Puerta Perforada",
    sku: "SOFE-SEC-RACK-42U",
    description: "Gabinete metÃ¡lico estructural de 42 unidades de rack estÃ¡ndar de 19 pulgadas. DiseÃ±ado para alojar servidores pesados, almacenamiento enterprise y equipo activo de red de misiÃ³n crÃ­tica, ofreciendo mÃ¡xima ventilaciÃ³n pasiva.",
    features: [
      "Puerta frontal y trasera de malla perforada (70% flujo de aire)",
      "Rieles de montaje ajustables en profundidad con marcado de U",
      "Paneles laterales desmontables con cerradura de llave",
      "Capacidad de carga estÃ¡tica de hasta 1200 kg (según ficha técnica)",
      "Entradas de cable superiores e inferiores protegidas contra polvo"
    ],
    specifications: {
      "Unidades de Rack": "42U",
      "Dimensiones externas": "2000mm alto x 600mm ancho x 1000mm profundidad (según ficha técnica)",
      "Material estructural": "Acero laminado en frÃ­o SPCC de alto calibre",
      "Acabado": "Pintura electrostÃ¡tica en polvo negra, texturizada",
      "Accesorios Incluidos": "Ruedas de alta resistencia, niveladores, kit de tornillos jaula"
    },
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fiber-tactical-12c",
    collection: "fiber",
    collectionName: "Fibra Ã“ptica (Fiber Backbone)",
    name: "Cable TÃ¡ctico de Fibra Ã“ptica 12 Hilos Monomodo",
    sku: "SOFE-SEC-FIB-12H",
    description: "Fibra Ã³ptica reforzada para tendido de troncales exteriores o perimetrales de seguridad a grandes distancias. Su blindaje estructural protege los hilos contra roedores, humedad y tensiones mecÃ¡nicas extremas.",
    features: [
      "12 hilos de fibra monomodo OS2 de ultra baja atenuaciÃ³n",
      "Cubierta exterior resistente a rayos UV y retardante a la flama LSZH",
      "Miembro de fuerza central dielÃ©ctrico y armadura de acero corrugado",
      "DiseÃ±o Loose Tube con gel antihumedad",
      "Ideal para conexiones perimetrales de cÃ¡maras a mÃ¡s de 100m sin repetidores"
    ],
    specifications: {
      "Tipo de Fibra": "Monomodo 9/125 Âµm (OS2)",
      "DiÃ¡metro exterior": "8.5 mm nominal (según ficha técnica)",
      "Resistencia a la tensiÃ³n": "1500 N mÃ¡xima de instalaciÃ³n (según ficha técnica)",
      "Rango de Temperatura Operativa": "-40Â°C a +70Â°C",
      "PresentaciÃ³n": "Bobina de madera (longitud según disponibilidad)"
    },
    image: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cable-cat6a-lszh",
    collection: "cabling",
    collectionName: "Cableado Estructurado (Cobre)",
    name: "Bobina Cable UTP CategorÃ­a 6A 100% Cobre LSZH",
    sku: "SOFE-SEC-CAT6A-305",
    description: "Cable de cobre sÃ³lido Cat6A de alta calidad para redes Gigabit y aplicaciones PoE de alta potencia (PoE++). DiseÃ±ado especÃ­ficamente para conectar cÃ¡maras IP, servidores y gateways con inmunidad al ruido elÃ©ctrico.",
    features: [
      "Conductores de cobre 100% sÃ³lido de calibre 23 AWG",
      "Soporta velocidades de datos de hasta 10Gbps a 100 metros",
      "Cubierta LSZH (Low Smoke Zero Halogen) para mÃ¡xima seguridad contra incendios",
      "Separador central estriado (spline) que elimina el crosstalk",
      "CertificaciÃ³n Fluke Channel certificable a 500MHz (según ficha técnica)"
    ],
    specifications: {
      "CategorÃ­a de Red": "CategorÃ­a 6A (F/UTP o U/UTP según proyecto)",
      "Longitud": "305 metros (1000 pies)",
      "Frecuencia de OperaciÃ³n": "Hasta 500 MHz",
      "EstÃ¡ndares de Seguridad": "ANSI/TIA-568.2-D, ISO/IEC 11801",
      "Calibre de Conductor": "23 AWG sÃ³lido"
    },
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "display-videowall-55",
    collection: "displays",
    collectionName: "Pantallas Profesionales / Videowalls",
    name: "Monitor Profesional para Videowall 55\" Bisel 0.88mm",
    sku: "SOFE-SEC-DISP-55W",
    description: "Pantalla profesional diseÃ±ada para operaciÃ³n continua 24/7 en centros de control y monitoreo de seguridad. Cuenta con biseles ultra-delgados para una visualizaciÃ³n inmersiva y casi sin costuras al agrupar mÃºltiples pantallas.",
    features: [
      "OperaciÃ³n garantizada 24/7 sin retenciÃ³n de imagen",
      "Bisel ultra-delgado extremo de 0.88mm de borde a borde",
      "Brillo profesional de 500 nits para visualizaciÃ³n perfecta en interiores iluminados",
      "Daisy Chain mediante DisplayPort para conectar pantallas en videowall sin hardware adicional",
      "Panel IPS que ofrece Ã¡ngulos de visiÃ³n de 178 grados"
    ],
    specifications: {
      "TamaÃ±o de Pantalla": "55 Pulgadas diagonal",
      "ResoluciÃ³n Nativa": "FHD (1920 x 1080)",
      "Tiempo de Vida MÃ­nimo": "50,000 horas continuas (según ficha técnica)",
      "Entradas / Salidas": "2x HDMI, 1x DP In, 1x DP Out, 1x DVI-D, RS232C, RJ45",
      "GarantÃ­a Comercial": "3 aÃ±os en sitio (según ficha técnica)"
    },
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "acc-rj45-blindado",
    collection: "accessories",
    collectionName: "Accesorios y Consumibles",
    name: "Kit de Conectores RJ45 Blindados Cat6A Pass-Through",
    sku: "SOFE-SEC-CON-RJ45",
    description: "Conectores modulares blindados tipo Pass-Through (hilos pasantes) diseÃ±ados para una terminaciÃ³n rÃ¡pida y perfecta en bobinas Cat6A. Proporciona protecciÃ³n contra interferencia electromagnÃ©tica (EMI/RFI).",
    features: [
      "DiseÃ±o Pass-Through para alinear e inspeccionar hilos antes de ponchar",
      "Blindaje metÃ¡lico externo de 360 grados para conexiÃ³n a tierra del cable blindado",
      "Contactos con baÃ±o de oro de 50 micras para mÃ¡xima conductividad y durabilidad",
      "Compatible con cables sÃ³lidos o multifilares de calibre 23 AWG",
      "Se vende en kit de 100 piezas con fundas protectoras incluidas (según ficha técnica)"
    ],
    specifications: {
      "Tipo de Conector": "RJ45 (8P8C) Blindado (FTP)",
      "CategorÃ­a certificada": "Cat6A / Cat7",
      "Cantidad por empaque": "100 conectores + 100 botas (según ficha técnica)",
      "Herramienta recomendada": "Ponchadora crimpadora de paso compatible",
      "CertificaciÃ³n": "Cumple con RoHS y TIA/EIA"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
  }
];

// ExportaciÃ³n compatible para navegores mediante global namespace si no se usa mÃ³dulos
if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
}
