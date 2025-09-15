// Datos de signos vitales - Estructura principal
const vitals = [
  {
    id: 'pulso',
    name: 'Pulso',
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2L13.09 8.26L22 9L15 14L17.18 22L12 18.74L6.82 22L9 14L2 9L10.91 8.26L12 2Z"/><path d="M12 6L12.6 9.4L16 10L13 12L14.2 16L12 14.4L9.8 16L11 12L8 10L11.4 9.4L12 6Z"/></svg>`,
    normal: '60–100 lat/min',
    normalValue: 80,
    normalRange: [60, 100],
    image: '/pulso_normal.jpg',
    description: 'El pulso es el número de latidos del corazón por minuto. Refleja la frecuencia cardíaca y es un indicador vital importante del funcionamiento cardiovascular.',
    alterations: [
      {
        id: 'taquicardia',
        name: 'Taquicardia',
        desc: 'Aumento del ritmo cardíaco por encima de 100 latidos por minuto en reposo.',
        image: '/taquicardia.jpg',
        factors: ['Ejercicio intenso', 'Ansiedad y estrés'],
        recommendations: ['Mantener reposo y respiración pausada', 'Consultar a un médico si persiste'],
        extendedDesc: 'La taquicardia se caracteriza por un aumento significativo de la frecuencia cardíaca. Puede ser una respuesta normal al ejercicio o estrés, pero cuando ocurre en reposo puede indicar problemas de salud que requieren atención médica.'
      },
      {
        id: 'bradicardia',
        name: 'Bradicardia',
        desc: 'Disminución del ritmo cardíaco por debajo de 60 latidos por minuto.',
        image: '/bradicardia.jpg',
        factors: ['Medicamentos beta-bloqueadores', 'Hipotiroidismo'],
        recommendations: ['Revisión médica regular', 'Evitar esfuerzo físico extremo sin supervisión'],
        extendedDesc: 'La bradicardia se presenta cuando el corazón late muy lentamente. Aunque algunos atletas pueden tener bradicardia normal, en otras personas puede indicar problemas con el sistema de conducción eléctrica del corazón.'
      }
    ]
  },
  {
    id: 'respiracion',
    name: 'Frecuencia Respiratoria',
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C15.31 2 18 4.69 18 8C18 12.5 12 21 12 21S6 12.5 6 8C6 4.69 8.69 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6Z"/><circle cx="12" cy="8" r="2"/></svg>`,
    normal: '12–20 resp/min',
    normalValue: 16,
    normalRange: [12, 20],
    image: '/resp_normal.jpg',
    description: 'La frecuencia respiratoria es el número de respiraciones por minuto. Es fundamental para el intercambio de oxígeno y dióxido de carbono en el organismo.',
    alterations: [
      {
        id: 'bradipnea',
        name: 'Bradipnea',
        desc: 'Disminución de la frecuencia respiratoria por debajo de 12 respiraciones por minuto.',
        image: '/bradipnea.jpg',
        factors: ['Depresión del sistema nervioso central', 'Intoxicación por medicamentos'],
        recommendations: ['Buscar atención médica inmediata', 'Mantener vías respiratorias despejadas'],
        extendedDesc: 'La bradipnea puede ser peligrosa ya que reduce el intercambio de gases. Puede ser causada por medicamentos depresores del sistema nervioso central o condiciones que afecten el centro respiratorio en el cerebro.'
      },
      {
        id: 'taquipnea',
        name: 'Taquipnea',
        desc: 'Aumento de la frecuencia respiratoria por encima de 20 respiraciones por minuto.',
        image: '/taquipnea.jpg',
        factors: ['Fiebre alta', 'Ansiedad o pánico'],
        recommendations: ['Técnicas de respiración controlada', 'Tratar la causa subyacente'],
        extendedDesc: 'La taquipnea puede ser una respuesta normal al ejercicio o una compensación por diferentes condiciones médicas. Es importante identificar y tratar la causa subyacente para normalizar la respiración.'
      }
    ]
  },
  {
    id: 'temperatura',
    name: 'Temperatura Corporal',
    icon: `<svg viewBox="0 0 24 24"><path d="M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C7.79 14.66 7.79 16.84 9 18.5C10.21 20.16 12.79 20.16 14 18.5C15.21 16.84 15.21 14.66 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z"/></svg>`,
    normal: '36.1°C–37.2°C',
    normalValue: 36.6,
    normalRange: [36.1, 37.2],
    image: '/temp_normal.jpg',
    description: 'La temperatura corporal refleja el equilibrio entre la producción y pérdida de calor del organismo. Es crucial para el funcionamiento óptimo de los procesos metabólicos.',
    alterations: [
      {
        id: 'hipotermia',
        name: 'Hipotermia',
        desc: 'Disminución de la temperatura corporal por debajo de 36°C.',
        image: '/hipotermia.jpg',
        factors: ['Exposición prolongada al frío', 'Deshidratación severa'],
        recommendations: ['Calentar gradualmente el cuerpo', 'Buscar atención médica urgente'],
        extendedDesc: 'La hipotermia es una condición potencialmente mortal donde el cuerpo pierde calor más rápido de lo que puede producirlo. Requiere tratamiento médico inmediato y recalentamiento gradual y controlado.'
      },
      {
        id: 'hipertermia',
        name: 'Hipertermia (Fiebre)',
        desc: 'Aumento de la temperatura corporal por encima de 37.5°C.',
        image: '/hipertermia.jpg',
        factors: ['Infección bacteriana o viral', 'Exposición excesiva al calor'],
        recommendations: ['Hidratarse adecuadamente', 'Usar medios físicos de enfriamiento'],
        extendedDesc: 'La hipertermia o fiebre es generalmente una respuesta del sistema inmunitario a infecciones. Temperaturas muy altas pueden ser peligrosas y requieren tratamiento médico para evitar complicaciones.'
      }
    ]
  },
  {
    id: 'presion',
    name: 'Presión Arterial',
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C8.69 2 6 4.69 6 8C6 15 12 22 12 22S18 15 18 8C18 4.69 15.31 2 12 2M12 6C13.1 6 14 6.9 14 8S13.1 10 12 10 10 9.1 10 8 10.9 6 12 6Z"/><path d="M9 8C9 6.34 10.34 5 12 5S15 6.34 15 8 13.66 11 12 11 9 9.66 9 8Z"/></svg>`,
    normal: '90/60–120/80 mmHg',
    normalValue: 110,
    normalRange: [90, 120],
    image: '/pa_normal.jpg',
    description: 'La presión arterial mide la fuerza que ejerce la sangre contra las paredes de las arterias. Se expresa en dos valores: sistólica (durante la contracción) y diastólica (durante la relajación).',
    alterations: [
      {
        id: 'hipertension',
        name: 'Hipertensión',
        desc: 'Aumento sostenido de la presión arterial por encima de 140/90 mmHg.',
        image: '/hipertension.jpg',
        factors: ['Dieta alta en sodio', 'Estrés crónico'],
        recommendations: ['Reducir consumo de sal', 'Realizar ejercicio regular moderado'],
        extendedDesc: 'La hipertensión arterial es conocida como el "asesino silencioso" porque puede no presentar síntomas. A largo plazo puede dañar órganos vitales como corazón, cerebro y riñones.'
      },
      {
        id: 'hipotension',
        name: 'Hipotensión',
        desc: 'Disminución de la presión arterial por debajo de 90/60 mmHg.',
        image: '/hipotension.jpg',
        factors: ['Deshidratación severa', 'Pérdida de sangre'],
        recommendations: ['Aumentar ingesta de líquidos', 'Levantarse lentamente para evitar mareos'],
        extendedDesc: 'La hipotensión puede causar síntomas como mareos, debilidad y desmayos. En casos severos puede comprometer el flujo sanguíneo a órganos vitales y requerir tratamiento inmediato.'
      }
    ]
  },
  {
    id: 'saturacion',
    name: 'Saturación de Oxígeno',
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"/></svg>`,
    normal: '95%–100%',
    normalValue: 98,
    normalRange: [95, 100],
    image: '/sat_normal.jpg',
    description: 'La saturación de oxígeno mide el porcentaje de hemoglobina en la sangre que está saturada con oxígeno. Es fundamental para el funcionamiento celular adecuado.',
    alterations: [
      {
        id: 'hipoxemia',
        name: 'Hipoxemia',
        desc: 'Disminución de la saturación de oxígeno por debajo del 95%.',
        image: '/hipoxemia.jpg',
        factors: ['Enfermedades pulmonares', 'Altitud elevada'],
        recommendations: ['Buscar atención médica inmediata', 'Administrar oxígeno suplementario si está disponible'],
        extendedDesc: 'La hipoxemia es una condición grave que puede comprometer el funcionamiento de todos los órganos. Requiere evaluación médica urgente y puede necesitar oxigenoterapia.'
      },
      {
        id: 'hiperoxemia',
        name: 'Hiperoxemia',
        desc: 'Saturación de oxígeno superior al 100% (poco común, generalmente iatrogénica).',
        image: '/hiperoxemia.jpg',
        factors: ['Administración excesiva de oxígeno', 'Ventilación mecánica inadecuada'],
        recommendations: ['Ajustar la administración de oxígeno', 'Supervisión médica continua'],
        extendedDesc: 'La hiperoxemia es rara y generalmente ocurre en pacientes hospitalizados recibiendo oxígeno suplementario. El exceso de oxígeno puede ser tóxico y requiere ajuste del tratamiento.'
      }
    ]
  }
];

// Base de datos de valores normales por edad (actualizada con información médica precisa)
const vitalRangesByAge = {
  // Pulso cardíaco por edad (latidos por minuto)
  heartRate: [
    { ageMin: 3, ageMax: 5, min: 80, max: 120, category: 'Preescolar' },
    { ageMin: 6, ageMax: 12, min: 60, max: 118, category: 'Escolar' },
    { ageMin: 13, ageMax: 17, min: 60, max: 100, category: 'Adolescente' },
    { ageMin: 18, ageMax: 64, min: 60, max: 100, category: 'Adulto' },
    { ageMin: 65, ageMax: 100, min: 60, max: 100, category: 'Adulto mayor' }
  ],
  // Frecuencia respiratoria por edad (respiraciones por minuto)
  respiratoryRate: [
    { ageMin: 3, ageMax: 5, min: 22, max: 34, category: 'Preescolar' },
    { ageMin: 6, ageMax: 12, min: 16, max: 30, category: 'Escolar' },
    { ageMin: 13, ageMax: 17, min: 12, max: 20, category: 'Adolescente' },
    { ageMin: 18, ageMax: 64, min: 12, max: 20, category: 'Adulto' },
    { ageMin: 65, ageMax: 100, min: 12, max: 20, category: 'Adulto mayor' }
  ],
  // Temperatura corporal (°C) por edad
  temperature: [
    { ageMin: 3, ageMax: 17, min: 36.1, max: 37.2, category: 'Niños y adolescentes (oral)' },
    { ageMin: 18, ageMax: 64, min: 36.1, max: 37.2, average: 37.0, category: 'Adulto (oral)' },
    { ageMin: 65, ageMax: 100, min: 36.0, max: 37.1, feverThreshold: 37.5, category: 'Adulto mayor (basal más baja)' }
  ]
};

// Configuración de animaciones con Anime.js
class VitalsAnimator {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.initializeObserver();
    this.initializeAnimations();
    this.initializeScrollEffects();
    this.initializeCarousel();
  }

  // Inicializar efectos de scroll
  initializeScrollEffects() {
    // Remover efectos de scroll - carrusel y contenido siempre visibles
    const carouselSection = document.getElementById('carousel-section');
    const mainContent = document.getElementById('main-content');
    
    // Mostrar carrusel y contenido principal inmediatamente
    carouselSection.classList.add('active');
    mainContent.classList.remove('section-hidden');
    mainContent.classList.add('section-visible');
  }

  // Inicializar carrusel
  initializeCarousel() {
    this.carouselImages = [
      { src: '/13317.jpg', title: 'Pulso de la vida', desc: 'Un vital liquido que recorre por largos caminos' },
      { src: '/16766421982683.jpg', title: 'El corazón también trabaja', desc: 'Un guerrero que labora hasta 3,000 millones de latidos a lo largo de toda una vida' },
      { src: '/Constantes-Vitales.jpg', title: 'Chequeo médico: el radar silencioso de tu salud', desc: 'Escucha tu corazón antes de que grite. ¡Haz tu chequeo!' },
      { src: '/Hipertension-arterial.jpg', title: 'Gracias, Riva-Rocci', desc: 'por enseñarnos a escuchar el corazón con cifras' },
      { src: '/hiperttenesos.jpg', title: 'Temperatura Normal', desc: '36.1°C - 37.2°C' },
      { src: '/midiendo-pulso.jpg', title: 'Hipertensión Arterial', desc: 'Presión arterial superior a 120/80 mmHg' },
      { src: '/ENFERMERIA_¿En-que-brazo-se-toma-la-tension-arterial-.jpg', title: 'Brazo izquierdo, decisión inteligente', desc: '¡Cuida tu presión, cuida tu corazón!' }
      
    ];
    
    this.currentSlide = 0;
    this.carouselAutoPlay = null;
    
    this.renderCarousel();
    this.setupCarouselControls();
    this.startCarouselAutoPlay();
  }

  // Renderizar carrusel
  renderCarousel() {
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');
    
    // Renderizar slides
    track.innerHTML = this.carouselImages.map(image => `
      <div class="carousel-slide">
        <img src="${image.src}" alt="${image.title}" class="carousel-image" loading="lazy">
        <div class="carousel-overlay">
          <h3 class="carousel-title">${image.title}</h3>
          <p class="carousel-desc">${image.desc}</p>
        </div>
      </div>
    `).join('');
    
    // Renderizar indicadores
    indicators.innerHTML = this.carouselImages.map((_, index) => `
      <button class="carousel-indicator ${index === 0 ? 'active' : ''}" 
              data-slide="${index}" 
              aria-label="Ir a imagen ${index + 1}"></button>
    `).join('');
  }

  // Configurar controles del carrusel
  setupCarouselControls() {
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    prevBtn.addEventListener('click', () => this.previousSlide());
    nextBtn.addEventListener('click', () => this.nextSlide());
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Pausar autoplay al hover
    const carousel = document.getElementById('carousel-section');
    carousel.addEventListener('mouseenter', () => this.pauseCarouselAutoPlay());
    carousel.addEventListener('mouseleave', () => this.startCarouselAutoPlay());
  }

  // Navegación del carrusel
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
    this.updateCarousel();
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.updateCarousel();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateCarousel();
  }

  // Actualizar posición del carrusel
  updateCarousel() {
    const track = document.getElementById('carousel-track');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    // Cada slide ocupa 100vw, así que desplazamos 12.5% del track por cada imagen
    // (porque el track es 800% y cada slide es 100vw = 12.5% del track)
    const slidePercentage = 12.5; // 100% / 8 images = 12.5%
    const translatePercentage = this.currentSlide * slidePercentage;
    
    // Animar transición
    anime({
      targets: track,
      translateX: `${-translatePercentage}%`,
      duration: 800,
      easing: 'easeInOutCubic'
    });
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentSlide);
    });
  }

  // Auto-reproducción del carrusel
  startCarouselAutoPlay() {
    this.pauseCarouselAutoPlay();
    this.carouselAutoPlay = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  pauseCarouselAutoPlay() {
    if (this.carouselAutoPlay) {
      clearInterval(this.carouselAutoPlay);
      this.carouselAutoPlay = null;
    }
  }
  initializeObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, this.observerOptions);
  }

  // Inicializar animaciones principales
  initializeAnimations() {
    // Animación inicial del hero (solo si estamos en la parte superior)
    if (window.scrollY < 100) {
      this.animateHero();
    }
    
    // Observar elementos para animación on scroll
    document.querySelectorAll('.vital-card, .summary-card, .simulation').forEach(el => {
      this.observer.observe(el);
    });
  }

  // Animación del hero section
  animateHero() {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    timeline
      .add({
        targets: '.hero h2',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 2000 // Esperar a que termine la animación de la imagen
      })
      .add({
        targets: '.hero p',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600
      }, '-=600');
  }

  // Animar elemento individual
  animateElement(element) {
    if (element.classList.contains('animated')) return;
    
    element.classList.add('animated');

    if (element.classList.contains('vital-card')) {
      this.animateVitalCard(element);
    } else if (element.classList.contains('summary-card')) {
      this.animateSummaryCard(element);
    } else if (element.classList.contains('simulation')) {
      this.animateSimulation(element);
    }
  }

  // Animar tarjeta de signo vital
  animateVitalCard(card) {
    anime({
      targets: card,
      translateY: [50, 0],
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .8)',
      delay: anime.stagger(100)
    });

    // Animar gauge después de la tarjeta
    setTimeout(() => {
      this.animateGauge(card.querySelector('.gauge-fill'));
    }, 400);
  }

  // Animar gauge/barra de progreso
  animateGauge(gauge) {
    if (!gauge) return;

    const vitalId = gauge.closest('.vital-card').dataset.vital;
    const vital = vitals.find(v => v.id === vitalId);
    
    if (vital) {
      const percentage = (vital.normalValue / Math.max(...vital.normalRange)) * 100;
      
      anime({
        targets: gauge,
        width: `${Math.min(percentage, 100)}%`,
        duration: 1500,
        easing: 'easeInOutQuad',
        backgroundColor: percentage > 100 ? '#FFD6D6' : '#D7F2FF'
      });
    }
  }

  // Animar tarjeta de resumen
  animateSummaryCard(card) {
    anime({
      targets: card,
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutQuart',
      delay: anime.stagger(100)
    });
  }

  // Animar sección de simulación
  animateSimulation(simulation) {
    anime({
      targets: simulation,
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutBack(1.7)'
    });
  }

  // Animación hover para tarjetas
  setupHoverAnimations() {
    document.querySelectorAll('.vital-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        anime({
          targets: card,
          translateY: -5,
          scale: 1.02,
          boxShadow: '0 8px 30px rgba(44, 62, 80, 0.2)',
          duration: 300,
          easing: 'easeOutQuart'
        });
      });

      card.addEventListener('mouseleave', () => {
        anime({
          targets: card,
          translateY: 0,
          scale: 1,
          boxShadow: '0 4px 20px rgba(44, 62, 80, 0.1)',
          duration: 300,
          easing: 'easeOutQuart'
        });
      });
    });
  }

  // Animación de modal
  animateModalOpen(modal) {
    const timeline = anime.timeline({
      easing: 'easeOutExpo'
    });

    timeline
      .add({
        targets: modal.querySelector('.modal-overlay'),
        opacity: [0, 1],
        duration: 200
      })
      .add({
        targets: modal.querySelector('.modal'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 400
      }, '-=100');
  }

  // Animación de cierre de modal
  animateModalClose(modal, callback) {
    const timeline = anime.timeline({
      easing: 'easeInExpo',
      complete: callback
    });

    timeline
      .add({
        targets: modal.querySelector('.modal'),
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 200
      })
      .add({
        targets: modal.querySelector('.modal-overlay'),
        opacity: [1, 0],
        duration: 200
      }, '-=100');
  }

  // Animación de simulación
  animateSimulationReading(vitalId) {
    const card = document.querySelector(`[data-vital="${vitalId}"]`);
    const gauge = card.querySelector('.gauge-fill');
    const vital = vitals.find(v => v.id === vitalId);

    if (!gauge || !vital) return;

    // Animación de lectura simulada
    anime({
      targets: gauge,
      width: ['0%', '20%', '40%', '60%', '80%', '100%'],
      duration: 2000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false,
      complete: () => {
        // Volver al valor normal
        const normalPercentage = (vital.normalValue / Math.max(...vital.normalRange)) * 100;
        anime({
          targets: gauge,
          width: `${normalPercentage}%`,
          duration: 500,
          easing: 'easeOutQuart'
        });
      }
    });

    // Efecto de pulso en la tarjeta
    anime({
      targets: card,
      scale: [1, 1.05, 1],
      duration: 500,
      easing: 'easeInOutQuad',
      loop: 4
    });
  }
}

// Clase principal de la aplicación
class VitalsApp {
  constructor() {
    this.currentModal = null;
    this.currentFilter = 'all';
    this.animator = new VitalsAnimator();
    
    // Array de integrantes del equipo para barajado aleatorio
    this.teamMembers = [
      { name: 'Merari Edith', surname: 'Ramos Morales' },
      { name: 'Frida Lissette', surname: 'Zelaya Orellana' },
      { name: 'Alejandra María', surname: 'Vigil López' },
      { name: 'Andrea Nicole', surname: 'Orellana Domínguez' },
      { name: 'Camila Nahomi', surname: 'Martínez Hernández' },
      { name: 'Diego Gabriel', surname: 'Mendoza Arriaga' }
    ];
    
    // Contador de veces que se abre el modal
    this.modalOpenCount = 0;
    
    this.init();
  }

  // Inicializar la aplicación
  init() {
    this.renderVitals();
    this.renderSummary();
    this.setupEventListeners();
    this.animator.setupHoverAnimations();
    this.loadFromStorage();
  }

  // Función para barajar array (algoritmo Fisher-Yates)
  shuffleArray(array) {
    const shuffled = [...array]; // Crear copia para no modificar el original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Generar HTML dinámico para el grid del equipo
  generateTeamGrid() {
    const shuffledMembers = this.shuffleArray(this.teamMembers);
    
    // Array de gradientes de fondo para barajar también
    const gradients = [
      'linear-gradient(135deg, var(--color-celeste), var(--color-blanco))',
      'linear-gradient(135deg, var(--color-amarillo), var(--color-blanco))',
      'linear-gradient(135deg, var(--color-rosado), var(--color-blanco))',
      'linear-gradient(135deg, var(--color-rojo-palido), var(--color-blanco))',
      'linear-gradient(135deg, var(--color-celeste), var(--color-rosado))',
      'linear-gradient(135deg, var(--color-amarillo), var(--color-rojo-palido))'
    ];
    
    const shuffledGradients = this.shuffleArray(gradients);
    
    return shuffledMembers.map((member, index) => `
      <div class="team-member" data-index="${index}" style="background: ${shuffledGradients[index]};">
        <div class="team-member-name">${member.name}<br>${member.surname}</div>
      </div>
    `).join('');
  }

  // Generar animación de entrada aleatoria para cada cuadro
  getRandomEntryAnimation() {
    const animations = [
      { 
        scale: [0.5, 1], 
        rotate: [-15, 0], 
        opacity: [0, 1] 
      },
      { 
        scale: [0.3, 1], 
        rotate: [20, 0], 
        opacity: [0, 1] 
      },
      { 
        scale: [0.7, 1], 
        rotate: [-25, 0], 
        opacity: [0, 1] 
      },
      { 
        scale: [0.4, 1], 
        rotate: [30, 0], 
        opacity: [0, 1] 
      }
    ];
    
    return animations[Math.floor(Math.random() * animations.length)];
  }

  // Renderizar tarjetas de signos vitales
  renderVitals() {
    const container = document.getElementById('vitals-container');
    
    container.innerHTML = vitals.map(vital => `
      <article class="vital-card loading" data-vital="${vital.id}">
        <div class="vital-header">
          <div class="vital-icon">${vital.icon}</div>
          <h3 class="vital-title">${vital.name}</h3>
        </div>
        
        <img src="${vital.image}" alt="Imagen representativa de ${vital.name} normal" 
             class="vital-image" loading="lazy">
        
        <div class="vital-normal">
          <h4>Valores Normales</h4>
          <div class="vital-normal-value">${vital.normal}</div>
          <div class="gauge-container">
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="gauge-marker" style="left: ${(vital.normalValue / Math.max(...vital.normalRange)) * 100}%"></div>
            </div>
          </div>
        </div>

        <div class="alterations">
          ${vital.alterations.map(alt => `
            <div class="alteration">
              <h4 class="alteration-title">${alt.name}</h4>
              <p class="alteration-desc">${alt.desc}</p>
              <img src="${alt.image}" alt="Imagen representativa de ${alt.name}" 
                   class="alteration-image" loading="lazy">
              
              <div class="factors">
                <h5>Factores que lo alteran:</h5>
                <ul>
                  ${alt.factors.map(factor => `<li>${factor}</li>`).join('')}
                </ul>
              </div>
              
              <div class="recommendations">
                <h5>Recomendaciones:</h5>
                <ul>
                  ${alt.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>

        
      </article>
    `).join('');

    // Agregar clase loaded después de un breve delay
    setTimeout(() => {
      document.querySelectorAll('.vital-card').forEach(card => {
        card.classList.remove('loading');
        card.classList.add('loaded');
      });
    }, 100);
  }

  // Renderizar sección de resumen
  renderSummary() {
    const summaryGrid = document.getElementById('summary-grid');
    
    const allItems = vitals.flatMap(vital => [
      { type: 'normal', name: vital.name, value: vital.normal, id: vital.id },
      ...vital.alterations.map(alt => ({ type: 'alteration', name: alt.name, value: alt.desc, id: vital.id }))
    ]);

    summaryGrid.innerHTML = allItems.map(item => `
      <div class="summary-card loading" data-type="${item.type}" data-vital="${item.id}">
        <h4>${item.name}</h4>
        <p>${item.value}</p>
      </div>
    `).join('');

    setTimeout(() => {
      document.querySelectorAll('.summary-card').forEach(card => {
        card.classList.remove('loading');
        card.classList.add('loaded');
      });
    }, 200);
  }

  // Configurar event listeners
  setupEventListeners() {
    // Botones "Más información"
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('more-info-btn')) {
        const vitalId = e.target.dataset.vital;
        this.openModal(vitalId);
      }
    });

    // Cerrar modal
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
        this.closeModal();
      }
    });

    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.currentModal) {
        this.closeModal();
      }
    });

    // Modal de integrantes del grupo
    const simulationInfo = document.getElementById('simulation-info');
    const teamModalOverlay = document.getElementById('team-modal-overlay');
    const teamModalClose = document.getElementById('team-modal-close');

    // Abrir modal de integrantes
    simulationInfo.addEventListener('click', () => {
      this.openTeamModal();
    });

    // Cerrar modal de integrantes
    teamModalClose.addEventListener('click', () => {
      this.closeTeamModal();
    });

    // Cerrar modal al hacer click fuera
    teamModalOverlay.addEventListener('click', (e) => {
      if (e.target === teamModalOverlay) {
        this.closeTeamModal();
      }
    });

    // Cerrar modal de integrantes con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && teamModalOverlay.classList.contains('active')) {
        this.closeTeamModal();
      }
    });

    // Filtros de resumen
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filterSummary(e.target.dataset.filter);
      });
    });

    // Simulación
    const simulateBtn = document.getElementById('simulate-all');
    if (simulateBtn) {
      simulateBtn.addEventListener('click', () => {
        this.simulateReading();
      });
    }

    // Navegación por teclado en modal
    document.addEventListener('keydown', (e) => {
      if (this.currentModal && e.key === 'Tab') {
        this.trapFocus(e);
      }
    });
  }

  // Abrir modal con información detallada
  openModal(vitalId) {
    const vital = vitals.find(v => v.id === vitalId);
    if (!vital) return;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h2 id="modal-title" class="modal-title">${vital.name} - Información Detallada</h2>
          <button class="modal-close" aria-label="Cerrar modal">
            <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>
        <div class="modal-content">
          <img src="${vital.image}" alt="Imagen detallada de ${vital.name}" class="modal-image" loading="lazy">
          <p class="mb-md">${vital.description}</p>
          
          <div class="mb-md">
            <h3>Valores Normales: ${vital.normal}</h3>
          </div>
          
          <div class="alterations">
            ${vital.alterations.map(alt => `
              <div class="alteration mb-md">
                <h4 class="alteration-title">${alt.name}</h4>
                <img src="${alt.image}" alt="Imagen detallada de ${alt.name}" class="alteration-image" loading="lazy">
                <p class="alteration-desc mb-sm">${alt.extendedDesc}</p>
                
                <div class="factors mb-sm">
                  <h5>Factores que lo alteran:</h5>
                  <ul>
                    ${alt.factors.map(factor => `<li>${factor}</li>`).join('')}
                  </ul>
                </div>
                
                <div class="recommendations">
                  <h5>Recomendaciones:</h5>
                  <ul>
                    ${alt.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div class="text-center">
            <small><em>Fuente: Guías clínicas de signos vitales - OMS</em></small>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.classList.add('no-scroll');
    this.currentModal = modal;

    // Animar apertura
    this.animator.animateModalOpen(modal);

    // Focus en el modal
    setTimeout(() => {
      modal.querySelector('.modal-close').focus();
    }, 100);

    // Guardar en localStorage
    this.saveToStorage('lastModal', vitalId);
  }

  // Cerrar modal
  closeModal() {
    if (!this.currentModal) return;

    this.animator.animateModalClose(this.currentModal, () => {
      document.body.removeChild(this.currentModal);
      document.body.classList.remove('no-scroll');
      this.currentModal = null;
    });
  }

  // Abrir modal de integrantes del grupo
  openTeamModal() {
    const teamModal = document.getElementById('team-modal-overlay');
    const teamGrid = teamModal.querySelector('.team-grid');
    const teamTitle = teamModal.querySelector('.team-modal-title');
    
    // Incrementar contador
    this.modalOpenCount++;
    
    // Actualizar título con indicador de orden aleatorio
    teamTitle.innerHTML = `Integrantes del Grupo <small style="display:none;">(Orden #${this.modalOpenCount})</small>`;
    
    // Regenerar el contenido con orden aleatorio
    teamGrid.innerHTML = this.generateTeamGrid();
    
    // Resetear estilos de animación antes de mostrar
    const teamMembers = teamGrid.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
      member.style.transform = 'scale(0.3) rotate(-15deg)';
      member.style.opacity = '0';
    });
    
    teamModal.classList.add('active');
    document.body.classList.add('no-scroll');

    // Animar entrada con anime.js
    anime({
      targets: teamModal,
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutQuart'
    });

    anime({
      targets: '#team-modal',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 400,
      delay: 100,
      easing: 'easeOutBack'
    });

    // Animar el título con efecto de aparición
    anime({
      targets: teamTitle,
      scale: [0.9, 1],
      opacity: [0.7, 1],
      duration: 300,
      delay: 200,
      easing: 'easeOutQuart'
    });

    // Animar cada miembro individualmente con animación aleatoria
    teamMembers.forEach((member, index) => {
      const randomAnimation = this.getRandomEntryAnimation();
      
      anime({
        targets: member,
        ...randomAnimation,
        duration: anime.random(500, 800),
        delay: 300 + (index * anime.random(100, 200)),
        easing: 'easeOutElastic(1, .8)'
      });
    });

    // Focus en el botón de cerrar
    setTimeout(() => {
      document.getElementById('team-modal-close').focus();
    }, 800);
  }

  // Cerrar modal de integrantes del grupo
  closeTeamModal() {
    const teamModal = document.getElementById('team-modal-overlay');
    
    // Animar salida
    anime({
      targets: '.team-member',
      scale: [1, 0.5],
      opacity: [1, 0],
      rotate: [0, 10],
      duration: 300,
      delay: anime.stagger(50),
      easing: 'easeInBack'
    });

    anime({
      targets: '#team-modal',
      scale: [1, 0.8],
      opacity: [1, 0],
      duration: 300,
      delay: 200,
      easing: 'easeInBack'
    });

    anime({
      targets: teamModal,
      opacity: [1, 0],
      duration: 200,
      delay: 400,
      easing: 'easeInQuart',
      complete: () => {
        teamModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // Filtrar tarjetas de resumen
  filterSummary(filter) {
    this.currentFilter = filter;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.filter === filter) {
        btn.classList.add('active');
      }
    });

    // Filtrar tarjetas
    document.querySelectorAll('.summary-card').forEach(card => {
      const shouldShow = filter === 'all' || card.dataset.type === filter;
      
      if (shouldShow) {
        anime({
          targets: card,
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 400,
          easing: 'easeOutQuart'
        });
        card.style.display = 'block';
      } else {
        anime({
          targets: card,
          opacity: [1, 0],
          scale: [1, 0.8],
          duration: 200,
          easing: 'easeInQuart',
          complete: () => {
            card.style.display = 'none';
          }
        });
      }
    });

    this.saveToStorage('lastFilter', filter);
  }

  // Simular lectura de signos vitales
  simulateReading() {
    const button = document.getElementById('simulate-all');
    button.textContent = 'Simulando...';
    button.disabled = true;

    vitals.forEach((vital, index) => {
      setTimeout(() => {
        this.animator.animateSimulationReading(vital.id);
        
        if (index === vitals.length - 1) {
          setTimeout(() => {
            button.textContent = 'Simular Lectura';
            button.disabled = false;
          }, 2500);
        }
      }, index * 500);
    });
  }

  // Trap focus en modal para accesibilidad
  trapFocus(e) {
    if (!this.currentModal) return;

    const focusableElements = this.currentModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  }

  // Guardar estado en localStorage
  saveToStorage(key, value) {
    try {
      localStorage.setItem(`vitals_${key}`, JSON.stringify(value));
    } catch (error) {
      console.log('No se pudo guardar en localStorage:', error);
    }
  }

  // Cargar estado desde localStorage
  loadFromStorage() {
    try {
      const lastFilter = JSON.parse(localStorage.getItem('vitals_lastFilter'));
      if (lastFilter && lastFilter !== 'all') {
        this.filterSummary(lastFilter);
      }
    } catch (error) {
      console.log('No se pudo cargar desde localStorage:', error);
    }
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Verificar que anime.js esté cargado
  if (typeof anime === 'undefined') {
    console.error('Anime.js no está cargado. Algunas animaciones no funcionarán.');
    return;
  }

  // Inicializar la aplicación
  new VitalsApp();

  // Agregar funcionalidad adicional para modo alto contraste (opcional)
  const addHighContrastMode = () => {
    const button = document.createElement('button');
    button.textContent = 'Alto Contraste';
    button.className = 'btn btn-primary';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '1001';
    
    button.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      button.textContent = document.body.classList.contains('high-contrast') 
        ? 'Modo Normal' : 'Alto Contraste';
    });

    document.body.appendChild(button);
  };

  // Descomenta la siguiente línea para habilitar el modo alto contraste
  // addHighContrastMode();
});

// Estilos para modo alto contraste (opcional)
const highContrastCSS = `
.high-contrast {
  --color-amarillo: #FFFF00 !important;
  --color-rojo-palido: #FF0000 !important;
  --color-rosado: #FF00FF !important;
  --color-blanco: #FFFFFF !important;
  --color-celeste: #00FFFF !important;
  --color-texto-primario: #000000 !important;
  --color-texto-secundario: #333333 !important;
}

.high-contrast * {
  border-color: #000000 !important;
}

.high-contrast img {
  filter: contrast(150%) brightness(120%) !important;
}
`;

// Agregar estilos de alto contraste al head si se necesitan
const addHighContrastStyles = () => {
  const style = document.createElement('style');
  style.textContent = highContrastCSS;
  document.head.appendChild(style);
};

// Manejo de errores globales
window.addEventListener('error', (e) => {
  console.error('Error en la aplicación:', e.error);
});

// Funcionalidad de navegación suave
class NavigationManager {
  constructor() {
    this.navToggle = null;
    this.navMenu = null;
    this.navLinks = [];
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupSmoothScrolling();
    this.setupMobileMenu();
    this.setupScrollSpy();
  }

  setupNavigation() {
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');

    // Crear botón toggle si no existe
    if (!this.navToggle && this.navMenu) {
      this.createMobileToggle();
    }
  }

  createMobileToggle() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    toggle.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    navbar.appendChild(toggle);
    this.navToggle = toggle;
  }

  setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('#mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('#mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (!mobileMenuBtn || !mobileMenuOverlay) return;

    // Abrir menú
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuOverlay.classList.add('active');
      mobileMenuBtn.classList.add('active');
      document.body.classList.add('nav-open');
    });

    // Cerrar menú con botón X
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    }

    // Cerrar menú al hacer clic en un enlace
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Cerrar menú al hacer clic en el overlay
    mobileMenuOverlay.addEventListener('click', (e) => {
      if (e.target === mobileMenuOverlay) {
        this.closeMobileMenu();
      }
    });

    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });
  }

  closeMobileMenu() {
    const mobileMenuOverlay = document.querySelector('#mobile-menu-overlay');
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
    
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
    }
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove('active');
    }
    document.body.classList.remove('nav-open');
  }

  setupSmoothScrolling() {
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    allNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (!targetId.startsWith('#')) return;
        
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        this.scrollToSection(targetSection);
      });
    });
  }

  scrollToSection(target) {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 70;
    const targetPosition = target.offsetTop - headerHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          
          // Remover clase active de todos los enlaces
          navLinks.forEach(link => link.classList.remove('active'));
          
          // Agregar clase active al enlace correspondiente
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }
}

// Inicializar navegación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new NavigationManager();
  new DynamicHealthChecker(); // Inicializar la dinámica de salud
});

// Clase para manejar la dinámica interactiva de salud
class DynamicHealthChecker {
  constructor() {
    this.currentState = 'initial';
    this.userAge = null;
    this.userHeartRate = null;
    this.userRespiratoryRate = null;
    this.userTemperature = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const acceptBtn = document.getElementById('accept-dynamic-btn');
    const declineBtn = document.getElementById('decline-dynamic-btn');
    const homeBtn = document.getElementById('dynamic-home-btn');

    if (acceptBtn) acceptBtn.addEventListener('click', () => this.handleAccept());
    if (declineBtn) declineBtn.addEventListener('click', () => this.handleDecline());
    if (homeBtn) homeBtn.addEventListener('click', () => this.resetToInitial());
  }

  changeEmojiAndCard(emojiSrc, cardContent) {
    const emojiImg = document.getElementById('dynamic-emoji-img');
    const cardContentDiv = document.getElementById('dynamic-card-content');
    
    if (emojiImg) {
      emojiImg.src = emojiSrc;
      // Agregar animación suave
      emojiImg.style.transform = 'scale(0.8)';
      setTimeout(() => {
        emojiImg.style.transform = 'scale(1)';
      }, 200);
    }
    
    if (cardContentDiv) {
      cardContentDiv.style.opacity = '0';
      setTimeout(() => {
        cardContentDiv.innerHTML = cardContent;
        cardContentDiv.style.opacity = '1';
      }, 300);
    }
  }

  handleAccept() {
    this.currentState = 'accepted';
    this.changeEmojiAndCard('emojiesonriente.png', `
      <h3>¡Excelente! 🎉</h3>
      <p>¡Gracias por aceptar participar en nuestra dinámica de salud! Esta herramienta te ayudará a conocer si tus signos vitales están dentro de los rangos normales para tu edad.</p>
      <p>Por favor, completa los siguientes campos con tus datos actuales:</p>
      <div class="health-form">
        <div class="form-group">
          <label for="user-age">Edad (años):</label>
          <input type="number" id="user-age" min="3" max="100" placeholder="Tu edad" required>
        </div>
        <div class="form-group">
          <label for="user-heart-rate">Pulso cardíaco (lat/min):</label>
          <input type="number" id="user-heart-rate" min="30" max="180" placeholder="Pulso actual" required>
        </div>
        <div class="form-group">
          <label for="user-respiratory-rate">Frecuencia respiratoria (resp/min) - Opcional:</label>
          <input type="number" id="user-respiratory-rate" min="5" max="50" placeholder="Respiraciones por minuto">
        </div>
        <div class="form-group">
          <label for="user-temperature">Temperatura corporal (°C) - Opcional:</label>
          <input type="number" id="user-temperature" step="0.1" min="25" max="42" placeholder="Temperatura actual">
        </div>
        <div class="dynamic-buttons">
          <button class="btn btn-primary" id="analyze-vitals-btn">Analizar mis signos vitales</button>
        </div>
      </div>
    `);
    
    // Agregar listener para el botón de análisis
    setTimeout(() => {
      const analyzeBtn = document.getElementById('analyze-vitals-btn');
      if (analyzeBtn) analyzeBtn.addEventListener('click', () => this.analyzeVitals());
    }, 400);
  }

  handleDecline() {
    this.changeEmojiAndCard('emojietriste.png', `
      <h3>¡No hay problema! 😊</h3>
      <p>Entendemos tu decisión. Aunque no participaste en la dinámica, queremos dejarte algunos consejos importantes para mantener tu salud:</p>
      <ul class="health-tips">
        <li>🏃‍♂️ Realiza actividad física regular, al menos 30 minutos al día</li>
        <li>🥗 Mantén una alimentación balanceada rica en frutas y verduras</li>
        <li>💧 Bebe suficiente agua durante el día (8 vasos mínimo)</li>
        <li>😴 Duerme entre 7-9 horas diarias para un descanso adecuado</li>
      </ul>
      <p><strong>¡Gracias por tu tiempo y cuida tu salud!</strong></p>
      <div class="dynamic-buttons">
        <button class="btn btn-secondary" id="try-again-btn">Tal vez más tarde</button>
      </div>
    `);
    
    setTimeout(() => {
      const tryAgainBtn = document.getElementById('try-again-btn');
      if (tryAgainBtn) tryAgainBtn.addEventListener('click', () => this.resetToInitial());
    }, 400);
  }

  analyzeVitals() {
    // Obtener valores de los inputs
    this.userAge = parseInt(document.getElementById('user-age')?.value);
    this.userHeartRate = parseInt(document.getElementById('user-heart-rate')?.value);
    this.userRespiratoryRate = parseInt(document.getElementById('user-respiratory-rate')?.value) || null;
    this.userTemperature = parseFloat(document.getElementById('user-temperature')?.value) || null;

    // Validar datos requeridos
    if (!this.userAge || !this.userHeartRate) {
      alert('Por favor, completa al menos la edad y el pulso cardíaco.');
      return;
    }

    // Validar rangos actualizados
    if (this.userAge < 3 || this.userAge > 100) {
      alert('La edad debe estar entre 3 y 100 años.');
      return;
    }

    if (this.userHeartRate < 30 || this.userHeartRate > 180) {
      alert('El pulso cardíaco debe estar entre 30 y 180 latidos por minuto.');
      return;
    }

    if (this.userRespiratoryRate && (this.userRespiratoryRate < 5 || this.userRespiratoryRate > 50)) {
      alert('La frecuencia respiratoria debe estar entre 5 y 50 respiraciones por minuto.');
      return;
    }

    if (this.userTemperature && (this.userTemperature < 25 || this.userTemperature > 42)) {
      alert('La temperatura debe estar entre 25°C y 42°C.');
      return;
    }

    // Analizar los valores
    const analysis = this.performVitalAnalysis();
    this.showAnalysisResult(analysis);
  }

  performVitalAnalysis() {
    const analysis = {
      heartRate: this.analyzeHeartRate(),
      respiratoryRate: this.userRespiratoryRate ? this.analyzeRespiratoryRate() : null,
      temperature: this.userTemperature ? this.analyzeTemperature() : null,
      overall: 'normal'
    };

    // Determinar el estado general
    if (analysis.heartRate.status !== 'normal' || 
        (analysis.respiratoryRate && analysis.respiratoryRate.status !== 'normal') ||
        (analysis.temperature && analysis.temperature.status !== 'normal')) {
      analysis.overall = 'abnormal';
    }

    return analysis;
  }

  analyzeHeartRate() {
    const heartRateRange = vitalRangesByAge.heartRate.find(
      range => this.userAge >= range.ageMin && this.userAge <= range.ageMax
    );

    if (!heartRateRange) {
      return { status: 'unknown', message: 'No se encontraron rangos para esta edad.' };
    }

    if (this.userHeartRate >= heartRateRange.min && this.userHeartRate <= heartRateRange.max) {
      return {
        status: 'normal',
        message: `Tu pulso cardíaco (${this.userHeartRate} lat/min) está dentro del rango normal para tu edad (${heartRateRange.min}-${heartRateRange.max} lat/min).`,
        range: heartRateRange
      };
    } else if (this.userHeartRate < heartRateRange.min) {
      return {
        status: 'low',
        message: `Tu pulso cardíaco (${this.userHeartRate} lat/min) está por debajo del rango normal para tu edad (${heartRateRange.min}-${heartRateRange.max} lat/min).`,
        range: heartRateRange
      };
    } else {
      return {
        status: 'high',
        message: `Tu pulso cardíaco (${this.userHeartRate} lat/min) está por encima del rango normal para tu edad (${heartRateRange.min}-${heartRateRange.max} lat/min).`,
        range: heartRateRange
      };
    }
  }

  analyzeRespiratoryRate() {
    const respRange = vitalRangesByAge.respiratoryRate.find(
      range => this.userAge >= range.ageMin && this.userAge <= range.ageMax
    );

    if (!respRange) {
      return { status: 'unknown', message: 'No se encontraron rangos para esta edad.' };
    }

    if (this.userRespiratoryRate >= respRange.min && this.userRespiratoryRate <= respRange.max) {
      return {
        status: 'normal',
        message: `Tu frecuencia respiratoria (${this.userRespiratoryRate} resp/min) está dentro del rango normal para tu edad (${respRange.min}-${respRange.max} resp/min).`,
        range: respRange
      };
    } else if (this.userRespiratoryRate < respRange.min) {
      return {
        status: 'low',
        message: `Tu frecuencia respiratoria (${this.userRespiratoryRate} resp/min) está por debajo del rango normal para tu edad (${respRange.min}-${respRange.max} resp/min).`,
        range: respRange
      };
    } else {
      return {
        status: 'high',
        message: `Tu frecuencia respiratoria (${this.userRespiratoryRate} resp/min) está por encima del rango normal para tu edad (${respRange.min}-${respRange.max} resp/min).`,
        range: respRange
      };
    }
  }

  analyzeTemperature() {
    const tempRange = vitalRangesByAge.temperature.find(
      range => this.userAge >= range.ageMin && this.userAge <= range.ageMax
    );

    if (!tempRange) {
      return { status: 'unknown', message: 'No se encontraron rangos de temperatura para esta edad.' };
    }

    // Verificar si está dentro del rango normal
    if (this.userTemperature >= tempRange.min && this.userTemperature <= tempRange.max) {
      let message = `Tu temperatura corporal (${this.userTemperature}°C) está dentro del rango normal para ${tempRange.category} (${tempRange.min}°C-${tempRange.max}°C).`;
      
      // Agregar información específica para adultos mayores
      if (tempRange.category.includes('Adulto mayor')) {
        message += ' Nota: Los adultos mayores pueden tener una temperatura basal ligeramente más baja.';
      }
      
      return {
        status: 'normal',
        message: message,
        range: tempRange
      };
    } else if (this.userTemperature < tempRange.min) {
      return {
        status: 'low',
        message: `Tu temperatura corporal (${this.userTemperature}°C) está por debajo del rango normal para ${tempRange.category} (${tempRange.min}°C-${tempRange.max}°C). Esto podría indicar hipotermia.`,
        range: tempRange
      };
    } else {
      // Para adultos mayores, usar el umbral de fiebre específico si está disponible
      let feverThreshold = tempRange.feverThreshold || tempRange.max;
      let feverMessage = this.userTemperature >= feverThreshold ? ' Esto indica fiebre.' : ' Esto indica temperatura elevada.';
      
      return {
        status: 'high',
        message: `Tu temperatura corporal (${this.userTemperature}°C) está por encima del rango normal para ${tempRange.category} (${tempRange.min}°C-${tempRange.max}°C).${feverMessage}`,
        range: tempRange
      };
    }
  }

  showAnalysisResult(analysis) {
    if (analysis.overall === 'normal') {
      this.showNormalResults(analysis);
    } else {
      this.showAbnormalResults(analysis);
    }
  }

  showNormalResults(analysis) {
    this.currentState = 'normal';
    this.changeEmojiAndCard('emojiefeliz.png', `
      <h3>¡Excelentes Resultados! 🎉</h3>
      <p><strong>¡Felicitaciones! Tus signos vitales están dentro de los rangos normales para tu edad.</strong></p>
      
      <div class="results-summary">
        <div class="result-item success">
          <h4>✅ Tus Resultados:</h4>
          <p>${analysis.heartRate.message}</p>
          ${analysis.respiratoryRate ? `<p>${analysis.respiratoryRate.message}</p>` : ''}
          ${analysis.temperature ? `<p>${analysis.temperature.message}</p>` : ''}
        </div>
      </div>
      
      <div class="health-congratulations">
        <p><strong>🌟 ¡Tienes una salud excelente!</strong></p>
        <p>Tus valores indican que estás cuidando muy bien tu salud. Te invitamos a que continues con estos hábitos saludables:</p>
        <ul class="health-tips">
          <li>🏃‍♂️ Mantén tu rutina de actividad física regular</li>
          <li>🥗 Continúa con una alimentación balanceada y nutritiva</li>
          <li>😴 Conserva tus buenos hábitos de descanso</li>
          <li>💧 Sigue manteniéndote bien hidratado/a</li>
        </ul>
        <p><strong>¡Sigue así y cuida tu salud siempre!</strong></p>
      </div>
      
      <div class="dynamic-buttons">
        <button class="btn btn-primary" id="continue-btn">Quiero seguir</button>
        <button class="btn btn-secondary" id="thanks-normal-btn">¡Gracias!</button>
      </div>
    `);

    setTimeout(() => {
      const continueBtn = document.getElementById('continue-btn');
      const thanksBtn = document.getElementById('thanks-normal-btn');
      
      if (continueBtn) continueBtn.addEventListener('click', () => this.resetToInitial());
      if (thanksBtn) thanksBtn.addEventListener('click', () => this.showNormalThanks());
    }, 400);
  }

  showNormalThanks() {
    this.changeEmojiAndCard('emojieguiño.png', `
      <h3>😉 ¡Gracias por Participar!</h3>
      <p><strong>Ha sido genial tenerte en nuestra dinámica de salud.</strong></p>
      
      <p>Nos alegra saber que tienes unos signos vitales excelentes. Esto demuestra que estás cuidando muy bien tu salud.</p>
      
      <div class="final-advice">
        <h4>💝 Recordatorio Especial:</h4>
        <p>Aunque tus resultados actuales son excelentes, recuerda que la salud es un cuidado constante. Te invitamos a:</p>
        <ul class="health-tips">
          <li>🩺 Realizar chequeos médicos regulares</li>
          <li>📊 Monitorear tus signos vitales periódicamente</li>
          <li>🌱 Mantener siempre hábitos saludables</li>
          <li>📚 Seguir aprendiendo sobre el cuidado de tu salud</li>
        </ul>
      </div>
      
      <p><strong>¡Sigue cuidando tu salud y mantente siempre saludable!</strong></p>
      
      <div class="dynamic-buttons">
        <button class="btn btn-primary" id="play-again-normal-btn">Jugar de nuevo</button>
      </div>
    `);

    setTimeout(() => {
      const playAgainBtn = document.getElementById('play-again-normal-btn');
      if (playAgainBtn) playAgainBtn.addEventListener('click', () => this.resetToInitial());
    }, 400);
  }

  showAbnormalResults(analysis) {
    this.currentState = 'abnormal';
    this.changeEmojiAndCard('emojieshock.png', `
      <h3>⚠️ Atención Requerida</h3>
      <p><strong>Hemos detectado algunos valores fuera del rango normal para tu edad.</strong></p>
      
      <div class="results-summary">
        <div class="result-item warning">
          <h4>📊 Resultados:</h4>
          ${analysis.heartRate.status !== 'normal' ? `<p>❗ ${analysis.heartRate.message}</p>` : `<p>✅ ${analysis.heartRate.message}</p>`}
          ${analysis.respiratoryRate ? (analysis.respiratoryRate.status !== 'normal' ? `<p>❗ ${analysis.respiratoryRate.message}</p>` : `<p>✅ ${analysis.respiratoryRate.message}</p>`) : ''}
          ${analysis.temperature ? (analysis.temperature.status !== 'normal' ? `<p>❗ ${analysis.temperature.message}</p>` : `<p>✅ ${analysis.temperature.message}</p>`) : ''}
        </div>
      </div>
      
      <p>Es importante que consultes con un profesional de la salud para una evaluación más detallada.</p>
      
      <div class="dynamic-buttons">
        <button class="btn btn-primary" id="get-help-btn">Quiero más información</button>
        <button class="btn btn-secondary" id="no-help-btn">No, gracias</button>
      </div>
    `);

    setTimeout(() => {
      const getHelpBtn = document.getElementById('get-help-btn');
      const noHelpBtn = document.getElementById('no-help-btn');
      
      if (getHelpBtn) getHelpBtn.addEventListener('click', () => this.showHealthAdvice(analysis));
      if (noHelpBtn) noHelpBtn.addEventListener('click', () => this.showRefusalMessage());
    }, 400);
  }

  showHealthAdvice(analysis) {
    this.changeEmojiAndCard('emojiefeliz.png', `
      <h3>📚 Consejos para tu Salud</h3>
      <p>Aquí tienes algunos consejos prácticos basados en tus resultados:</p>
      
      <div class="health-advice">
        ${this.generateHealthAdvice(analysis)}
      </div>
      
      <div class="general-tips">
        <h4>💡 Consejos Generales:</h4>
        <ul>
          <li>🏥 Consulta con un médico para una evaluación profesional</li>
          <li>📱 Lleva un registro de tus signos vitales diariamente</li>
          <li>🧘‍♀️ Practica técnicas de relajación y manejo del estrés</li>
          <li>🚫 Evita el consumo de tabaco y alcohol</li>
        </ul>
      </div>
      
      <p><strong>¡Gracias por participar en nuestra dinámica de salud!</strong></p>
      
      <div class="dynamic-buttons">
        <button class="btn btn-primary" id="final-thanks-btn">¡De nada!</button>
      </div>
    `);

    setTimeout(() => {
      const finalThanksBtn = document.getElementById('final-thanks-btn');
      if (finalThanksBtn) finalThanksBtn.addEventListener('click', () => this.showFinalThanks());
    }, 400);
  }

  generateHealthAdvice(analysis) {
    let advice = '<ul>';
    
    if (analysis.heartRate.status === 'high') {
      advice += `
        <li><strong>Pulso elevado:</strong> Practica respiración profunda, reduce el consumo de cafeína y considera ejercicio suave como caminar.</li>
      `;
    } else if (analysis.heartRate.status === 'low') {
      advice += `
        <li><strong>Pulso bajo:</strong> Mantente hidratado, evita cambios bruscos de posición y consulta si tienes síntomas como mareos.</li>
      `;
    }
    
    if (analysis.respiratoryRate && analysis.respiratoryRate.status === 'high') {
      advice += `
        <li><strong>Respiración acelerada:</strong> Practica técnicas de respiración pausada, busca un ambiente tranquilo y reduce el estrés.</li>
      `;
    } else if (analysis.respiratoryRate && analysis.respiratoryRate.status === 'low') {
      advice += `
        <li><strong>Respiración lenta:</strong> Mantén las vías respiratorias despejadas y busca atención médica si persiste.</li>
      `;
    }
    
    if (analysis.temperature && analysis.temperature.status === 'high') {
      advice += `
        <li><strong>Temperatura elevada:</strong> Mantente hidratado, usa ropa ligera y considera medios físicos de enfriamiento.</li>
      `;
    } else if (analysis.temperature && analysis.temperature.status === 'low') {
      advice += `
        <li><strong>Temperatura baja:</strong> Mantente abrigado, bebe líquidos calientes y busca un ambiente cálido.</li>
      `;
    }
    
    advice += '</ul>';
    return advice;
  }

  showRefusalMessage() {
    this.changeEmojiAndCard('emojietriste.png', `
      <h3>Entendemos tu Decisión</h3>
      <p>Respetamos tu elección. Aun así, queremos dejarte algunos consejos básicos para mantener una buena salud:</p>
      
      <ul class="health-tips">
        <li>❤️ Monitorea tus signos vitales regularmente en casa</li>
        <li>🩺 Visita a tu médico al menos una vez al año para chequeos preventivos</li>
        <li>🏃‍♂️ Mantén un estilo de vida activo con ejercicio regular</li>
        <li>🥬 Come una dieta balanceada rica en frutas y verduras</li>
      </ul>
      
      <p><strong>¡Gracias por jugar nuestra dinámica de salud! Cuídate mucho.</strong></p>
      
      <div class="dynamic-buttons">
        <button class="btn btn-secondary" id="final-goodbye-btn">¡Hasta la vista!</button>
      </div>
    `);

    setTimeout(() => {
      const goodbyeBtn = document.getElementById('final-goodbye-btn');
      if (goodbyeBtn) goodbyeBtn.addEventListener('click', () => this.resetToInitial());
    }, 400);
  }

  showFinalThanks() {
    this.changeEmojiAndCard('emojieguiño.png', `
      <h3>¡Hasta Pronto!</h3>
      <p>Ha sido un placer tenerte en nuestra dinámica interactiva de salud. Esperamos que hayas aprendido algo nuevo sobre tus signos vitales.</p>
      
      <p><strong>¡Esperamos verte pronto por aquí de nuevo!</strong></p>
      
      <p>Recuerda siempre cuidar tu salud y realizar chequeos regulares con profesionales médicos.</p>
      
      <div class="dynamic-buttons">
        <button class="btn btn-primary" id="restart-dynamic-btn">Jugar de nuevo</button>
      </div>
    `);

    setTimeout(() => {
      const restartBtn = document.getElementById('restart-dynamic-btn');
      if (restartBtn) restartBtn.addEventListener('click', () => this.resetToInitial());
    }, 400);
  }

  resetToInitial() {
    this.currentState = 'initial';
    this.userAge = null;
    this.userHeartRate = null;
    this.userRespiratoryRate = null;
    this.userTemperature = null;

    this.changeEmojiAndCard('emojiefeliz.png', `
      <h3>¡Descubre tu Estado de Salud!</h3>
      <p>Te invitamos a participar en una dinámica especial donde podrás conocer si tus signos vitales están dentro de los rangos normales para tu edad.</p>
      <p>Es rápido, educativo y completamente seguro. ¿Te animas a probar?</p>
      <div class="dynamic-buttons">
        <button class="btn btn-primary" id="accept-dynamic-btn">¡Sí, quiero probar!</button>
        <button class="btn btn-secondary" id="decline-dynamic-btn">No, gracias</button>
      </div>
    `);

    // Re-configurar event listeners
    setTimeout(() => {
      this.setupEventListeners();
    }, 400);
  }
}

// Exportar para uso en otros módulos si es necesario
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VitalsApp, VitalsAnimator, vitals, NavigationManager, DynamicHealthChecker };
}
