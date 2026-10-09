import React, { useState, useEffect, useRef, useCallback } from 'react';
import toast from 'react-hot-toast';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  ShieldCheck,
  HardHat,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  Camera,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ServiceGallery = () => {
  const { t } = useLanguage();

  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const timerRef = useRef(null);
  const AUTOPLAY_DURATION = 6500; // 6.5 segundos por slide

  const slides = [
    {
      id: 0,
      image: '/images/2c7f9a92-347a-4bb1-8046-0b6ce8af03f0.jpeg',
      badge: t('gallerySlide1Badge'),
      title: t('gallerySlide1Title'),
      desc: t('gallerySlide1Desc'),
      tags: [t('gallerySlide1Tag1'), t('gallerySlide1Tag2'), t('gallerySlide1Tag3')],
      icon: ShieldCheck,
      serviceCode: 'fachadas',
      metricLabel: 'Presión Regulada',
      metricValue: '3500 PSI'
    },
    {
      id: 1,
      image: '/images/99b97dc4-f3dc-40ef-aff6-0b11cdca1e1d.jpeg',
      badge: t('gallerySlide2Badge'),
      title: t('gallerySlide2Title'),
      desc: t('gallerySlide2Desc'),
      tags: [t('gallerySlide2Tag1'), t('gallerySlide2Tag2'), t('gallerySlide2Tag3')],
      icon: HardHat,
      serviceCode: 'alturas-tsa',
      metricLabel: 'Certificación TSA',
      metricValue: 'Nivel 2 y 3'
    },
    {
      id: 2,
      image: '/images/7273be78-895e-4dc3-9d93-fb4857169985.jpeg',
      badge: t('gallerySlide3Badge'),
      title: t('gallerySlide3Title'),
      desc: t('gallerySlide3Desc'),
      tags: [t('gallerySlide3Tag1'), t('gallerySlide3Tag2'), t('gallerySlide3Tag3')],
      icon: Sparkles,
      serviceCode: 'aseo-alturas',
      metricLabel: 'Acabado Técnico',
      metricValue: 'Anti-Polución'
    },
    {
      id: 3,
      image: '/images/Gemini_Generated_Image_ghi9m2ghi9m2ghi9.jpeg',
      badge: t('gallerySlide4Badge'),
      title: t('gallerySlide4Title'),
      desc: t('gallerySlide4Desc'),
      tags: [t('gallerySlide4Tag1'), t('gallerySlide4Tag2'), t('gallerySlide4Tag3')],
      icon: Layers,
      serviceCode: 'operaciones-integrales',
      metricLabel: 'Disponibilidad',
      metricValue: '24/7 Nacional'
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx) => {
    setActiveSlide(idx);
  };

  // Manejo del autoplay
  useEffect(() => {
    if (isAutoplay && !lightboxOpen) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, AUTOPLAY_DURATION);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoplay, lightboxOpen, nextSlide]);

  // Teclado para navegar carrusel y cerrar modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextSlide, prevSlide]);

  // Soporte táctil / swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const diffX = touchStartX - touchEndX;
    if (diffX > 50) {
      nextSlide();
    } else if (diffX < -50) {
      prevSlide();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  const toggleAutoplay = () => {
    const nextState = !isAutoplay;
    setIsAutoplay(nextState);
    if (nextState) {
      toast.success(t('galleryAutoplayPlay'), { id: 'carousel-state', duration: 1800 });
    } else {
      toast(t('galleryAutoplayPause'), { icon: '⏸️', id: 'carousel-state', duration: 1800 });
    }
  };

  const handleQuoteClick = (serviceTitle) => {
    toast.success(`${t('galleryBtnQuote')}: ${serviceTitle}`, { duration: 3000 });
  };

  const current = slides[activeSlide];
  const CurrentIcon = current.icon;

  return (
    <section className="service-gallery-section" id="galeria">
      <div className="gallery-ambient-glow" />

      <div className="gallery-container">
        {/* Encabezado Vanguardista */}
        <div className="gallery-header">
          <div className="gallery-badge-pill">
            <Camera size={15} className="pulse-icon" />
            <span>{t('galleryTag')}</span>
          </div>

          <h2 className="gallery-main-title">
            {t('galleryTitleLine1')}{' '}
            <span className="gradient-highlight">{t('galleryTitleLine2')}</span>
          </h2>

          <p className="gallery-subtitle">{t('gallerySubtitle')}</p>
        </div>

        {/* Carrusel Principal Vanguardista */}
        <div
          className="gallery-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => {
            if (timerRef.current) clearInterval(timerRef.current);
          }}
          onMouseLeave={() => {
            if (isAutoplay && !lightboxOpen) {
              timerRef.current = setInterval(nextSlide, AUTOPLAY_DURATION);
            }
          }}
        >
          {/* Barra Superior con Contador y Control Autoplay */}
          <div className="carousel-top-bar">
            <div className="carousel-counter-badge">
              <span className="counter-curr">0{activeSlide + 1}</span>
              <span className="counter-divider">/</span>
              <span className="counter-total">0{totalSlides}</span>
              <span className="counter-tag">{t('gallerySlideCounter')}</span>
            </div>

            <div className="carousel-top-actions">
              <button
                type="button"
                className="carousel-icon-btn"
                onClick={toggleAutoplay}
                title={isAutoplay ? t('galleryAutoplayPause') : t('galleryAutoplayPlay')}
                aria-label={isAutoplay ? t('galleryAutoplayPause') : t('galleryAutoplayPlay')}
              >
                {isAutoplay ? <Pause size={15} /> : <Play size={15} />}
              </button>

              <button
                type="button"
                className="carousel-icon-btn"
                onClick={() => setLightboxOpen(true)}
                title={t('galleryBtnZoom')}
                aria-label={t('galleryBtnZoom')}
              >
                <Maximize2 size={15} />
              </button>
            </div>
          </div>

          {/* Tarjeta del Slide Activo (Split Layout: Imagen + Contenido de Vanguardia) */}
          <div className="carousel-slide-stage">
            {slides.map((slide, idx) => {
              const isActive = idx === activeSlide;
              const IconComp = slide.icon;

              return (
                <div
                  key={slide.id}
                  className={`carousel-slide-panel ${isActive ? 'is-active' : ''}`}
                  aria-hidden={!isActive}
                >
                  {/* Lado Imagen con Efecto Zoom Ken Burns y Botón de Ampliación */}
                  <div
                    className="slide-image-col"
                    onClick={() => setLightboxOpen(true)}
                    title={t('galleryBtnZoom')}
                  >
                    <div
                      className="slide-image-bg"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="slide-image-overlay" />
                    
                    <div className="slide-image-watermark">
                      <IconComp size={16} />
                      <span>ACEA SAS</span>
                    </div>

                    <button
                      type="button"
                      className="slide-zoom-chip"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxOpen(true);
                      }}
                      title={t('galleryBtnZoom')}
                    >
                      <Maximize2 size={14} />
                      <span>{t('galleryBtnZoom')}</span>
                    </button>
                  </div>

                  {/* Lado Información Técnica & Especificaciones del Servicio */}
                  <div className="slide-content-col">
                    <div className="slide-badge-row">
                      <span className="slide-category-badge">
                        <IconComp size={14} />
                        {slide.badge}
                      </span>
                      <div className="slide-metric-pill">
                        <span className="metric-lbl">{slide.metricLabel}:</span>
                        <span className="metric-val">{slide.metricValue}</span>
                      </div>
                    </div>

                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-description">{slide.desc}</p>

                    {/* Chips de especificaciones técnicas */}
                    <div className="slide-tags-grid">
                      {slide.tags.map((tagText, tIdx) => (
                        <div className="slide-tag-chip" key={tIdx}>
                          <CheckCircle2 size={13} className="tag-check-icon" />
                          <span>{tagText}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botón CTA con enlace a Cotización */}
                    <div className="slide-action-row">
                      <a
                        href="#contacto"
                        className="btn btn-slide-quote"
                        onClick={() => handleQuoteClick(slide.title)}
                      >
                        <span>{t('galleryBtnQuote')}</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flechas de Navegación Flotantes */}
          <button
            type="button"
            className="carousel-nav-btn prev"
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            className="carousel-nav-btn next"
            onClick={nextSlide}
            aria-label="Slide siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Barra de Progreso de Autoplay */}
          <div className="carousel-progress-track">
            <div
              key={activeSlide}
              className={`carousel-progress-bar ${isAutoplay ? 'animating' : ''}`}
              style={{ animationDuration: `${AUTOPLAY_DURATION}ms` }}
            />
          </div>
        </div>

        {/* Tira de Miniaturas Interactivas (Thumbnail Strip) */}
        <div className="gallery-thumbs-strip">
          {slides.map((thumb, tIdx) => {
            const isThumbActive = tIdx === activeSlide;
            return (
              <button
                type="button"
                key={thumb.id}
                className={`gallery-thumb-item ${isThumbActive ? 'active' : ''}`}
                onClick={() => goToSlide(tIdx)}
                aria-label={`Ir al servicio ${tIdx + 1}: ${thumb.title}`}
              >
                <div
                  className="thumb-image"
                  style={{ backgroundImage: `url(${thumb.image})` }}
                />
                <div className="thumb-info">
                  <span className="thumb-number">0{tIdx + 1}</span>
                  <span className="thumb-title">{thumb.badge}</span>
                </div>
                {isThumbActive && <div className="thumb-active-line" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal de Alta Definición */}
      {lightboxOpen && (
        <div className="gallery-lightbox-backdrop" onClick={() => setLightboxOpen(false)}>
          <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxOpen(false)}
              aria-label="Cerrar vista detallada"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              className="lightbox-nav-btn prev"
              onClick={prevSlide}
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              type="button"
              className="lightbox-nav-btn next"
              onClick={nextSlide}
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>

            <div className="lightbox-image-box">
              <img
                src={current.image}
                alt={current.title}
                className="lightbox-main-img"
              />
            </div>

            <div className="lightbox-footer-info">
              <div className="lightbox-badge-pill">
                <CurrentIcon size={15} />
                <span>{current.badge}</span>
              </div>
              <h4>{current.title}</h4>
              <p>{current.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceGallery;
