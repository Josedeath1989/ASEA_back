import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  es: {
    // Header
    navSolutions: 'Soluciones',
    navManifest: 'Manifiesto',
    navHseq: 'HSEQ',
    navContact: 'Contacto',
    btnRequestInspection: 'Solicitar Inspección',

    // Hero
    heroBadge: 'LÍDERES EN MANTENIMIENTO INDUSTRIAL & ALTURAS',
    heroTitleLine1: 'EXCELENCIA EN MANTENIMIENTO.',
    heroTitleLine2: 'SEGURIDAD EN LAS ALTURAS.',
    heroDesc: 'Soluciones integrales de mantenimiento de fachadas, aseo especializado corporativo, obras civiles y logística modular para las infraestructuras más exigentes de Colombia.',
    heroCtaQuote: 'COTIZAR PROYECTO',
    heroCtaPortfolio: 'VER PORTAFOLIO',
    brandsTitle: 'PROYECTOS Y EMPRESAS QUE CONFÍAN EN NOSOTROS',

    // Value Manifest
    valueBadge: 'RESPALDO & GARANTÍA TÉCNICA',
    valueTitleLine1: 'NO SOLO MANTENEMOS EDIFICIOS.',
    valueTitleLine2: 'PRESERVAMOS SU VALOR.',
    valueDesc: 'En ACEA SAS combinamos precisión, tecnología y personal altamente certificado bajo el SG-SST para ejecutar operaciones de alto riesgo con cero incidentes. Respaldamos su tranquilidad y la de su proyecto con pólizas integrales de cumplimiento, calidad, salarios y manejo de anticipos.',
    valueFeature1: 'Pólizas Integrales 100%',
    valueFeature2: 'Normativa SG-SST Vigente',
    valueFeature3: 'Personal Certificado TSA',
    valueFeature4: 'Cero Incidentes Registrados',
    floatingCardTitle: 'Certificación SG-SST',
    floatingCardDesc: 'Operaciones de alto riesgo 100% aseguradas',

    // Solutions
    solutionsTag: 'SOLUCIONES INTEGRALES',
    solutionsTitle: 'NUESTRA EXPERTISE',
    sol1Title: 'Fachadas y Cubiertas',
    sol1Desc: 'Limpieza profunda, impermeabilización técnica y pintura de exteriores con acceso por cuerdas certificado.',
    sol1Badge: 'ALTURAS & FACHADAS',
    sol2Title: 'Aseo Especializado',
    sol2Desc: 'Personal rigurosamente capacitado para oficinas corporativas, centros comerciales y terminación de obras (fino/grueso).',
    sol2Badge: 'ASEO CORPORATIVO',
    sol3Title: 'Obra Civil y Pisos',
    sol3Desc: 'Reparaciones locativas, pulido, cristalización y sellado de pisos, junto con demarcación y señalización general.',
    sol3Badge: 'OBRA CIVIL',
    sol4Title: 'Logística Modular',
    sol4Desc: 'Venta y alquiler de contenedores marítimos (10FT, 20FT, 40FT) adecuados para campamentos, oficinas y bodegas seguras.',
    sol4Badge: 'CONTENEDORES',

    // Video Showcase / Operaciones
    navOperations: 'Operaciones',
    videoTag: 'INGENIERÍA & OPERACIONES EN ACCIÓN',
    videoTitleLine1: 'EXCELENCIA TÉCNICA',
    videoTitleLine2: 'EN CADA PROYECTO.',
    videoDesc: 'Observe nuestro despliegue en campo: maniobras de alta precisión en alturas, equipo industrial especializado y protocolos rigurosos de seguridad SG-SST que garantizan resultados impecables con cero incidentes.',
    videoStatusBadge: 'OPERACIÓN ACTIVA EN CAMPO',
    videoResolutionBadge: 'FULL HD 1080P',
    videoBadgeText: 'OPERACIONES INDUSTRIALES',
    videoSpec1Title: 'Seguridad en Alturas TSA',
    videoSpec1Desc: 'Acceso por cuerdas y anclajes certificados bajo norma nacional e internacional.',
    videoSpec2Title: 'Cero Incidentes Registrados',
    videoSpec2Desc: 'Gestión HSEQ integral con supervisión técnica permanente en cada jornada.',
    videoSpec3Title: 'Maquinaria de Alta Gama',
    videoSpec3Desc: 'Equipos de hidrolavado, cristalizado y logística modular de alto rendimiento.',
    videoSpec4Title: 'Pólizas de Respaldo 100%',
    videoSpec4Desc: 'Cobertura total en cumplimiento, salarios y estabilidad de obra garantizada.',
    videoPlay: 'Reproducir Video',
    videoPause: 'Pausar Video',
    videoMute: 'Silenciar',
    videoUnmute: 'Activar Sonido',
    videoFullscreen: 'Pantalla Completa',
    videoReplay: 'Reiniciar Video',
    videoClickToUnmute: 'Activar Audio 🔊',
    videoAudioActive: 'Audio Activo 🔊',

    // Galería Vanguardia Carrusel
    navGallery: 'Galería',
    galleryTag: 'PORTAFOLIO VISUAL EN TERRENO',
    galleryTitleLine1: 'SERVICIOS TÉCNICOS',
    galleryTitleLine2: 'EN ACCIÓN REAL.',
    gallerySubtitle: 'Explore nuestras intervenciones operativas más exigentes: hidrolavado a alta presión, acceso por cuerdas certificado, aseo especializado de ventanería en rascacielos y logística integral bajo norma SG-SST.',
    gallerySlide1Badge: 'FACHADAS & ALTURAS',
    gallerySlide1Title: 'Hidrolavado Técnico y Sellado de Fachadas',
    gallerySlide1Desc: 'Intervención integral de muros de cristal, granito y concreto mediante andamios colgantes certificados. Eliminación profunda de polución, eflorescencias y aplicación de hidrófugos protectores.',
    gallerySlide1Tag1: 'Andamios Motorizados Certificados',
    gallerySlide1Tag2: 'Presión Regulada 3500 PSI',
    gallerySlide1Tag3: 'Norma SG-SST Vigente',
    gallerySlide2Badge: 'ACCESO POR CUERDAS (TSA)',
    gallerySlide2Title: 'Mantenimiento de Ladrillo a la Vista & Descenso Vertical',
    gallerySlide2Desc: 'Maniobras tácticas de acceso por cuerdas en estructuras de alta complejidad geométrica. Lavado de ladrillo, resanes estructurales, hidrofugado y lavado de vidrios con doble anclaje independiente.',
    gallerySlide2Tag1: 'Técnicos Certificados TSA',
    gallerySlide2Tag2: 'Doble Línea de Vida Independiente',
    gallerySlide2Tag3: 'Cero Afectación a Transeúntes',
    gallerySlide3Badge: 'ASEO CORPORATIVO EN ALTURA',
    gallerySlide3Title: 'Limpieza Técnica de Muros Cortina y Ventanería',
    gallerySlide3Desc: 'Limpieza de alta precisión para rascacielos y sedes corporativas de máxima altura. Uso de agua desmineralizada, compuestos biodegradables y escobillas antiestáticas que evitan la adherencia de partículas.',
    gallerySlide3Tag1: 'Acabado Impecable Libre de Manchas',
    gallerySlide3Tag2: 'Productos Biodegradables Neutros',
    gallerySlide3Tag3: 'Supervisión Continua HSEQ',
    gallerySlide4Badge: 'INFRAESTRUCTURA & LOGÍSTICA',
    gallerySlide4Title: 'Despliegue Operativo Multidisciplinario',
    gallerySlide4Desc: 'Capacidad técnica simultánea a nivel nacional: obras civiles locativas, pulido de pisos, demarcación industrial y habilitación de campamentos seguros con contenedores marítimos acondicionados.',
    gallerySlide4Tag1: 'Cobertura a Nivel Nacional',
    gallerySlide4Tag2: 'Pólizas de Responsabilidad Civil 100%',
    gallerySlide4Tag3: 'Disponibilidad Operativa 24/7',
    galleryBtnQuote: 'Cotizar este Servicio',
    galleryBtnZoom: 'Ver en Detalle',
    gallerySlideCounter: 'Operación',
    galleryOf: 'de',
    galleryAutoplayPause: 'Pausar Carrusel',
    galleryAutoplayPlay: 'Reanudar Carrusel',

    // Stats
    stat1Number: '+10',
    stat1Label: 'Años de Experiencia',
    stat2Number: '100%',
    stat2Label: 'Personal Certificado (SG-SST)',
    stat3Number: '100%',
    stat3Label: 'Proyectos Asegurados',

    // Contact
    contactTag: 'CONTACTO DIRECTO',
    contactTitleLine1: 'ELEVE EL ESTÁNDAR',
    contactTitleLine2: 'DE SU PROYECTO.',
    contactLead: 'Un consultor técnico especializado evaluará su requerimiento y viabilidad operacional en menos de 24 horas.',
    address: 'Calle 53ª No 71c-19 Bogotá, D.C., Colombia',
    formTitle: 'Solicitud Técnica de Cotización',
    formSub: 'Ingrese los datos requeridos para recibir una propuesta personalizada.',
    placeholderCompany: 'Empresa / Entidad Solicitante *',
    placeholderName: 'Nombre del Solicitante o Encargado *',
    placeholderPhone: 'Teléfono Directo de Contacto *',
    placeholderSelect: 'Seleccione un servicio requerido... *',
    opt1: 'Mantenimiento de Fachadas / Cubiertas',
    opt2: 'Aseo Especializado Corporativo',
    opt3: 'Obra Civil / Mantenimiento de Pisos',
    opt4: 'Venta o Alquiler de Contenedores',
    placeholderDetails: 'Detalles adicionales o especificaciones del proyecto (opcional)',
    submitBtn: 'ENVIAR SOLICITUD TÉCNICA',
    sendingBtn: 'PROCESANDO...',
    valCompanyReq: 'El nombre de la empresa o entidad es obligatorio.',
    valCompanyShort: 'Debe ingresar al menos 2 caracteres.',
    valNameReq: 'El nombre del solicitante es obligatorio.',
    valNameShort: 'El nombre debe contener al menos 3 caracteres.',
    valNameLetters: 'El nombre solo debe contener letras.',
    valPhoneReq: 'El teléfono de contacto es obligatorio.',
    valPhonePattern: 'Ingrese un número telefónico válido (mínimo 7 dígitos).',
    valServiceReq: 'Debe seleccionar un servicio de la lista.',
    toastValError: 'Por favor corrige los errores del formulario antes de enviar.',
    toastSending: 'Enviando solicitud técnica a ACEA SAS...',
    toastSuccess: '¡Solicitud enviada con éxito! Un consultor se comunicará contigo.',
    toastError: 'Error al procesar la solicitud.',
    toastConnectionError: 'No se pudo conectar con el servidor backend (http://localhost:5000).',

    // Footer & WhatsApp
    copyright: '© 2026 ACEA SAS - Agencia Central de Aseo S.A.S. | NIT: 901304387-9 | Todos los derechos reservados.',
    whatsappTooltip: '¿Necesitas asesoría inmediata?',
    whatsappToast: 'Abriendo chat directo de WhatsApp con ACEA SAS... 💬',

    // Toast messages
    toastLangEs: 'Idioma cambiado a Español 🇪🇸',
    toastLangEn: 'Language changed to English 🇺🇸',
    toastNav: 'Navegando a la sección de',
    toastCtaInspect: 'Te redirigimos al formulario de inspección técnica 🚀',
    toastCtaQuote: 'Te llevamos al formulario para cotizar tu proyecto 🚀',
    toastCtaPortfolio: 'Explora nuestras soluciones integrales corporativas 🏢'
  },
  en: {
    // Header
    navSolutions: 'Solutions',
    navManifest: 'Manifesto',
    navHseq: 'HSEQ & Safety',
    navContact: 'Contact',
    btnRequestInspection: 'Request Inspection',

    // Hero
    heroBadge: 'LEADERS IN INDUSTRIAL MAINTENANCE & HEIGHT SERVICES',
    heroTitleLine1: 'MAINTENANCE EXCELLENCE.',
    heroTitleLine2: 'SAFETY AT HEIGHTS.',
    heroDesc: 'Comprehensive solutions for facade maintenance, specialized corporate cleaning, civil works, and modular logistics for Colombia\'s most demanding corporate infrastructures.',
    heroCtaQuote: 'QUOTE PROJECT',
    heroCtaPortfolio: 'VIEW PORTFOLIO',
    brandsTitle: 'TRUSTED BY LEADING CORPORATIONS AND INSTITUTIONS',

    // Value Manifest
    valueBadge: 'TECHNICAL GUARANTEE & ENDORSEMENT',
    valueTitleLine1: "WE DON'T JUST MAINTAIN BUILDINGS.",
    valueTitleLine2: 'WE PRESERVE THEIR VALUE.',
    valueDesc: 'At ACEA SAS we combine precision, technology, and highly certified personnel under SG-SST safety standards to execute high-risk operations with zero incidents. We back your peace of mind and project with comprehensive compliance, quality, wage, and advance payment insurance policies.',
    valueFeature1: '100% Comprehensive Policies',
    valueFeature2: 'Active SG-SST Regulations',
    valueFeature3: 'TSA Certified Personnel',
    valueFeature4: 'Zero Incidents Record',
    floatingCardTitle: 'SG-SST Certification',
    floatingCardDesc: '100% Insured High-Risk Operations',

    // Solutions
    solutionsTag: 'COMPREHENSIVE SOLUTIONS',
    solutionsTitle: 'OUR EXPERTISE',
    sol1Title: 'Facades & Roofing',
    sol1Desc: 'Deep cleaning, technical waterproofing, and exterior painting with certified rope access.',
    sol1Badge: 'HEIGHTS & FACADES',
    sol2Title: 'Specialized Cleaning',
    sol2Desc: 'Rigorously trained personnel for corporate offices, commercial centers, and post-construction cleaning.',
    sol2Badge: 'CORPORATE CLEANING',
    sol3Title: 'Civil Works & Flooring',
    sol3Desc: 'Facility repairs, floor polishing, crystallization, sealing, and industrial safety line marking.',
    sol3Badge: 'CIVIL WORKS',
    sol4Title: 'Modular Logistics',
    sol4Desc: 'Sale and rental of shipping containers (10FT, 20FT, 40FT) outfitted for site offices, camps, and secure storage.',
    sol4Badge: 'CONTAINERS',

    // Video Showcase / Operations
    navOperations: 'Operations',
    videoTag: 'ENGINEERING & OPERATIONS IN ACTION',
    videoTitleLine1: 'TECHNICAL EXCELLENCE',
    videoTitleLine2: 'IN EVERY PROJECT.',
    videoDesc: 'Witness our on-site deployment: high-precision rope access maneuvers, specialized industrial equipment, and rigorous SG-SST safety protocols guaranteeing flawless results with zero incidents.',
    videoStatusBadge: 'ACTIVE ON-SITE OPERATION',
    videoResolutionBadge: 'FULL HD 1080P',
    videoBadgeText: 'INDUSTRIAL OPERATIONS',
    videoSpec1Title: 'TSA Height Safety',
    videoSpec1Desc: 'Certified rope access and anchor systems complying with national and global safety norms.',
    videoSpec2Title: 'Zero Incidents Recorded',
    videoSpec2Desc: 'Comprehensive HSEQ management with permanent on-site technical supervision.',
    videoSpec3Title: 'High-End Machinery',
    videoSpec3Desc: 'High-performance pressure washers, floor crystallizers, and modular logistics units.',
    videoSpec4Title: '100% Comprehensive Coverage',
    videoSpec4Desc: 'Total coverage in compliance, civil liability, wages, and work stability guarantees.',
    videoPlay: 'Play Video',
    videoPause: 'Pause Video',
    videoMute: 'Mute',
    videoUnmute: 'Unmute',
    videoFullscreen: 'Fullscreen',
    videoReplay: 'Replay Video',
    videoClickToUnmute: 'Enable Audio 🔊',
    videoAudioActive: 'Audio Active 🔊',

    // Vanguard Gallery Carousel
    navGallery: 'Gallery',
    galleryTag: 'FIELD VISUAL PORTFOLIO',
    galleryTitleLine1: 'TECHNICAL SERVICES',
    galleryTitleLine2: 'IN REAL ACTION.',
    gallerySubtitle: 'Explore our most demanding operational interventions: high-pressure washing, certified rope access, specialized high-rise window cleaning, and comprehensive logistics complying with SG-SST norms.',
    gallerySlide1Badge: 'FACADES & HEIGHTS',
    gallerySlide1Title: 'Technical Facade Washing & Sealing',
    gallerySlide1Desc: 'Comprehensive maintenance of glass, granite, and concrete curtain walls using certified suspended scaffolds. Deep removal of pollution, efflorescence, and protective hydrophobic coating application.',
    gallerySlide1Tag1: 'Certified Motorized Scaffolding',
    gallerySlide1Tag2: 'Regulated Pressure 3500 PSI',
    gallerySlide1Tag3: 'SG-SST Safety Compliance',
    gallerySlide2Badge: 'ROPE ACCESS (TSA)',
    gallerySlide2Title: 'Exposed Brick Maintenance & Vertical Descent',
    gallerySlide2Desc: 'Tactical rope access maneuvers in architecturally complex structures. Brick pressure wash, structural patching, waterproofing, and glass cleaning with independent twin anchors.',
    gallerySlide2Tag1: 'TSA Certified Technicians',
    gallerySlide2Tag2: 'Dual Independent Lifelines',
    gallerySlide2Tag3: 'Zero Disruption to Pedestrians',
    gallerySlide3Badge: 'HIGH-RISE CORPORATE CLEANING',
    gallerySlide3Title: 'Curtain Wall & Architectural Window Cleaning',
    gallerySlide3Desc: 'High-precision window cleaning for top-tier skyscrapers and corporate headquarters. Demineralized water, biodegradable neutral compounds, and antistatic squeegees preventing dust accumulation.',
    gallerySlide3Tag1: 'Spotless Streak-Free Finish',
    gallerySlide3Tag2: 'Neutral Biodegradable Formulas',
    gallerySlide3Tag3: 'Continuous HSEQ On-Site Supervision',
    gallerySlide4Badge: 'INFRASTRUCTURE & LOGISTICS',
    gallerySlide4Title: 'Multidisciplinary Operational Deployment',
    gallerySlide4Desc: 'Simultaneous technical deployment across national territories: facility repairs, floor crystallization, industrial line marking, and customized shipping container jobsite offices.',
    gallerySlide4Tag1: 'Nationwide Logistics Coverage',
    gallerySlide4Tag2: '100% Civil Liability Policies',
    gallerySlide4Tag3: '24/7 Operational Readiness',
    galleryBtnQuote: 'Quote this Service',
    galleryBtnZoom: 'View Details',
    gallerySlideCounter: 'Operation',
    galleryOf: 'of',
    galleryAutoplayPause: 'Pause Carousel',
    galleryAutoplayPlay: 'Resume Carousel',

    // Stats
    stat1Number: '+10',
    stat1Label: 'Years of Experience',
    stat2Number: '100%',
    stat2Label: 'Certified Personnel (SG-SST)',
    stat3Number: '100%',
    stat3Label: 'Insured Projects',

    // Contact
    contactTag: 'DIRECT CONTACT',
    contactTitleLine1: 'ELEVATE THE STANDARD',
    contactTitleLine2: 'OF YOUR PROJECT.',
    contactLead: 'A specialized technical consultant will evaluate your requirement and operational feasibility in less than 24 hours.',
    address: 'Calle 53ª No 71c-19 Bogotá, D.C., Colombia',
    formTitle: 'Technical Quote Request',
    formSub: 'Fill in the required information to receive a tailored proposal.',
    placeholderCompany: 'Company / Requesting Entity *',
    placeholderName: 'Contact Name or Manager *',
    placeholderPhone: 'Direct Phone Number *',
    placeholderSelect: 'Select required service... *',
    opt1: 'Facade / Roofing Maintenance',
    opt2: 'Specialized Corporate Cleaning',
    opt3: 'Civil Works / Floor Maintenance',
    opt4: 'Container Sales or Rental',
    placeholderDetails: 'Additional details or project specifications (optional)',
    submitBtn: 'SUBMIT TECHNICAL REQUEST',
    sendingBtn: 'PROCESSING...',
    valCompanyReq: 'Company or entity name is required.',
    valCompanyShort: 'Must enter at least 2 characters.',
    valNameReq: 'Contact name is required.',
    valNameShort: 'Name must contain at least 3 characters.',
    valNameLetters: 'Name must contain only letters.',
    valPhoneReq: 'Phone number is required.',
    valPhonePattern: 'Enter a valid phone number (minimum 7 digits).',
    valServiceReq: 'Please select a service from the list.',
    toastValError: 'Please fix form errors before submitting.',
    toastSending: 'Sending technical request to ACEA SAS...',
    toastSuccess: 'Request sent successfully! A consultant will contact you shortly.',
    toastError: 'Error processing the request.',
    toastConnectionError: 'Could not connect to backend server (http://localhost:5000).',

    // Footer & WhatsApp
    copyright: '© 2026 ACEA SAS - Agencia Central de Aseo S.A.S. | NIT: 901304387-9 | All rights reserved.',
    whatsappTooltip: 'Need immediate assistance?',
    whatsappToast: 'Opening direct WhatsApp chat with ACEA SAS... 💬',

    // Toast messages
    toastLangEs: 'Idioma cambiado a Español 🇪🇸',
    toastLangEn: 'Language changed to English 🇺🇸',
    toastNav: 'Navigating to section',
    toastCtaInspect: 'Redirecting to technical inspection form 🚀',
    toastCtaQuote: 'Taking you to the project quote form 🚀',
    toastCtaPortfolio: 'Explore our comprehensive corporate solutions 🏢'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('acea-lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('acea-lang', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = (newLang) => {
    const targetLang = newLang || (language === 'es' ? 'en' : 'es');
    setLanguage(targetLang);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['es']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};

export default LanguageContext;
