import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Send, Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logoDark from '../assets/images/logo-letra-blanca.png';
import logoLight from '../assets/images/Logo-fondo_transparente.png';

export const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('acea-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('acea-theme', theme);
  }, [theme]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    if (nextTheme === 'light') {
      toast('Modo claro activado ☀️', { icon: '☀️', duration: 2500 });
    } else {
      toast('Modo oscuro activado 🌙', { icon: '🌙', duration: 2500 });
    }
  };

  const handleToggleLanguage = () => {
    const nextLang = language === 'es' ? 'en' : 'es';
    toggleLanguage(nextLang);

    if (nextLang === 'en') {
      toast.success(t('toastLangEn'), { duration: 3000 });
    } else {
      toast.success(t('toastLangEs'), { duration: 3000 });
    }
  };

  const handleNavClick = (sectionName) => {
    setIsMobileMenuOpen(false);
    toast(`${t('toastNav')} ${sectionName}`, { icon: '📍', duration: 2500 });
  };

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false);
    toast.success(t('toastCtaInspect'), { duration: 3500 });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={isMobileMenuOpen ? 'menu-open' : ''}>
      <div className="logo-container">
        <a href="#">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="ACEA SAS Logo"
            className="brand-logo-img"
          />
        </a>
      </div>

      <button 
        className="mobile-menu-btn" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#soluciones" onClick={() => handleNavClick(t('navSolutions'))}>{t('navSolutions')}</a>
        <a href="#operaciones" onClick={() => handleNavClick(t('navOperations'))}>{t('navOperations')}</a>
        <a href="#galeria" onClick={() => handleNavClick(t('navGallery'))}>{t('navGallery')}</a>
        <a href="#manifiesto" onClick={() => handleNavClick(t('navManifest'))}>{t('navManifest')}</a>
        <a href="#estadisticas" onClick={() => handleNavClick(t('navHseq'))}>{t('navHseq')}</a>
        <a href="#contacto" onClick={() => handleNavClick(t('navContact'))}>{t('navContact')}</a>

        <div className="nav-controls">
          {/* Switcher de Idioma ES/EN */}
          <button
            onClick={handleToggleLanguage}
            className="lang-toggle-btn"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label="Cambiar idioma"
          >
            <Globe size={15} />
            <span>{language === 'es' ? 'ES 🇪🇸' : 'EN 🇺🇸'}</span>
          </button>

          {/* Switcher de Tema Claro / Oscuro */}
          <button
            onClick={handleToggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>

        <a href="#contacto" className="btn mobile-cta-btn" onClick={handleCtaClick}>
          <span>{t('btnRequestInspection')}</span>
          <Send size={16} />
        </a>
      </nav>

      <a href="#contacto" className="btn desktop-cta-btn" onClick={handleCtaClick}>
        <span>{t('btnRequestInspection')}</span>
        <Send size={16} />
      </a>
    </header>
  );
};

export default Header;
