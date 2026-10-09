import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  ShieldCheck,
  HardHat,
  Award,
  Wrench,
  Sparkles,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import promoVideo from '../assets/videos/Video-publicitario.mp4';

export const VideoShowcase = () => {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hideControlsTimerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.85);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  // Intentar reproducción automática silenciada de inicio
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasStartedPlaying(true);
          })
          .catch(() => {
            // Autoplay bloqueado por el navegador hasta interacción del usuario
            setIsPlaying(false);
          });
      }
    }
  }, []);

  // Sincronizar eventos de pantalla completa
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Ocultar controles automáticamente cuando esté reproduciendo e inactivo
  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }
    if (isPlaying) {
      hideControlsTimerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play().then(() => {
        setIsPlaying(true);
        setHasStartedPlaying(true);
      });
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      video.volume = volume > 0 ? volume : 0.85;
      setIsMuted(false);
      toast.success(t('videoAudioActive'), { duration: 2000, id: 'audio-status' });
    } else {
      video.muted = true;
      setIsMuted(true);
      toast(t('videoMute'), { icon: '🔇', duration: 2000, id: 'audio-status' });
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    const video = videoRef.current;
    if (!video) return;

    setVolume(newVol);
    video.volume = newVol;
    if (newVol === 0) {
      video.muted = true;
      setIsMuted(true);
    } else if (isMuted) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const targetTime = Math.max(0, Math.min(pos * duration, duration));
    video.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
    toast(t('videoReplay'), { icon: '🔄', duration: 2000 });
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const specs = [
    {
      icon: HardHat,
      title: t('videoSpec1Title'),
      desc: t('videoSpec1Desc')
    },
    {
      icon: ShieldCheck,
      title: t('videoSpec2Title'),
      desc: t('videoSpec2Desc')
    },
    {
      icon: Wrench,
      title: t('videoSpec3Title'),
      desc: t('videoSpec3Desc')
    },
    {
      icon: Award,
      title: t('videoSpec4Title'),
      desc: t('videoSpec4Desc')
    }
  ];

  return (
    <section className="video-showcase-section" id="operaciones">
      {/* Elemento de iluminación ambiental y rejilla técnica */}
      <div className="video-ambient-glow" />
      <div className="video-grid-overlay" />

      <div className="video-showcase-container">
        {/* Encabezado temático enfocado al rubro industrial */}
        <div className="video-header">
          <div className="video-badge-pill">
            <Activity size={15} className="pulse-icon" />
            <span>{t('videoTag')}</span>
          </div>

          <h2 className="video-main-title">
            {t('videoTitleLine1')}{' '}
            <span className="gradient-highlight">{t('videoTitleLine2')}</span>
          </h2>

          <p className="video-subtitle">{t('videoDesc')}</p>
        </div>

        {/* Marco Elegante del Video */}
        <div
          className={`video-frame-wrapper ${isPlaying ? 'is-playing' : 'is-paused'}`}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Barra Superior Tecnológica del Marco */}
          <div className="video-frame-top-bar">
            <div className="video-frame-top-left">
              <span className="live-status-dot" />
              <span className="live-status-text">{t('videoStatusBadge')}</span>
              <span className="tech-divider">/</span>
              <span className="corporate-tag">ACEA SAS HSEQ</span>
            </div>

            <div className="video-frame-top-right">
              <span className="hd-badge">{t('videoResolutionBadge')}</span>
              {isMuted && (
                <button
                  type="button"
                  className="unmute-banner-btn"
                  onClick={toggleMute}
                  title={t('videoClickToUnmute')}
                >
                  <VolumeX size={14} />
                  <span>{t('videoClickToUnmute')}</span>
                </button>
              )}
            </div>
          </div>

          {/* Reproductor de Video */}
          <div className="video-player-container" onClick={togglePlay}>
            <video
              ref={videoRef}
              src={promoVideo}
              poster="/images/2c7f9a92-347a-4bb1-8046-0b6ce8af03f0.jpeg"
              loop
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="showcase-video-element"
            >
              <source src="/videos/Video-publicitario.mp4" type="video/mp4" />
              Tu navegador no soporta reproducción de video HTML5.
            </video>

            {/* Botón Central Flotante con Onda Expansiva */}
            {!isPlaying && (
              <div className="video-center-play-overlay">
                <button
                  type="button"
                  className="video-big-play-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  aria-label={t('videoPlay')}
                >
                  <div className="play-btn-ripple" />
                  <Play size={32} className="play-icon" />
                </button>
              </div>
            )}
          </div>

          {/* Barra de Controles Elegante Inferior */}
          <div
            className={`video-controls-bar ${showControls || !isPlaying ? 'visible' : 'hidden'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra de Progreso / Seek Bar */}
            <div className="video-progress-container" onClick={handleSeek}>
              <div className="video-progress-bg">
                <div
                  className="video-progress-fill"
                  style={{ width: `${progress}%` }}
                >
                  <div className="video-progress-thumb" />
                </div>
              </div>
            </div>

            <div className="video-controls-row">
              {/* Controles Izquierdos: Play, Replay, Volumen, Tiempo */}
              <div className="video-controls-left">
                <button
                  type="button"
                  className="video-ctrl-btn"
                  onClick={togglePlay}
                  title={isPlaying ? t('videoPause') : t('videoPlay')}
                  aria-label={isPlaying ? t('videoPause') : t('videoPlay')}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>

                <button
                  type="button"
                  className="video-ctrl-btn"
                  onClick={handleReplay}
                  title={t('videoReplay')}
                  aria-label={t('videoReplay')}
                >
                  <RotateCcw size={16} />
                </button>

                {/* Control de Audio con Slider Expandible */}
                <div className="video-volume-group">
                  <button
                    type="button"
                    className="video-ctrl-btn"
                    onClick={toggleMute}
                    title={isMuted ? t('videoUnmute') : t('videoMute')}
                    aria-label={isMuted ? t('videoUnmute') : t('videoMute')}
                  >
                    {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="video-volume-slider"
                    aria-label="Volumen"
                  />
                </div>

                {/* Marcador de Tiempo */}
                <div className="video-time-display">
                  <span>{formatTime(currentTime)}</span>
                  <span className="time-sep">/</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controles Derechos: Badge de Operación y Pantalla Completa */}
              <div className="video-controls-right">
                <div className="video-format-pill">
                  <Sparkles size={13} />
                  <span>ACEA SAS</span>
                </div>

                <button
                  type="button"
                  className="video-ctrl-btn"
                  onClick={toggleFullscreen}
                  title={t('videoFullscreen')}
                  aria-label={t('videoFullscreen')}
                >
                  {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas de Rigor Técnico & Rubro de la Empresa */}
        <div className="video-specs-grid">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="video-spec-card" key={idx}>
                <div className="spec-card-icon-box">
                  <Icon size={22} />
                </div>
                <div className="spec-card-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Llamado a la acción rápido hacia cotización */}
        <div className="video-bottom-cta">
          <div className="cta-ribbon">
            <CheckCircle2 size={18} className="cta-ribbon-icon" />
            <span>¿Tiene un requerimiento en alturas o mantenimiento de infraestructura?</span>
          </div>
          <a href="#contacto" className="btn btn-video-cta">
            <span>SOLICITAR EVALUACIÓN TÉCNICA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
