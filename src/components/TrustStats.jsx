import React from 'react';
import { Clock, ShieldCheck, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustStats = () => {
  const { t } = useLanguage();

  return (
    <section className="trust" id="estadisticas">
      <div className="stat-card">
        <div className="stat-icon">
          <Clock size={28} />
        </div>
        <div className="stat">
          <h2>{t('stat1Number')}</h2>
          <p>{t('stat1Label')}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <ShieldCheck size={28} />
        </div>
        <div className="stat">
          <h2><span>{t('stat2Number')}</span></h2>
          <p>{t('stat2Label')}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <Award size={28} />
        </div>
        <div className="stat">
          <h2><span>{t('stat3Number')}</span></h2>
          <p>{t('stat3Label')}</p>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
