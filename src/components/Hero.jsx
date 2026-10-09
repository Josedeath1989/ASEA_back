import React from 'react';
import toast from 'react-hot-toast';
import { Award, ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const handleQuoteClick = () => {
    toast.success(t('toastCtaQuote'), { duration: 4000 });
  };

  const handlePortfolioClick = () => {
    toast(t('toastCtaPortfolio'), { icon: '🔎', duration: 4000 });
  };

  return (
    <section className="hero">
      <div className="hero-badge">
        <Award size={16} />
        <span>{t('heroBadge')}</span>
      </div>

      <h1>{t('heroTitleLine1')}<br />{t('heroTitleLine2')}</h1>
      
      <p>{t('heroDesc')}</p>

      <div className="hero-btns">
        <a href="#contacto" className="btn" onClick={handleQuoteClick}>
          <span>{t('heroCtaQuote')}</span>
          <ArrowRight size={18} />
        </a>
        <a href="#soluciones" className="btn btn-outline" onClick={handlePortfolioClick}>
          <FileText size={18} />
          <span>{t('heroCtaPortfolio')}</span>
        </a>
      </div>

      <div className="brands-container">
        <span className="brands-title">{t('brandsTitle')}</span>
        <div className="brands">
          <span>HILTON</span> • <span>MARRIOTT</span> • <span>CLARO</span> • <span>ÉXITO</span> • <span>EJÉRCITO NACIONAL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
