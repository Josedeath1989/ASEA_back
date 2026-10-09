import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, FileCheck, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ValueManifest = () => {
  const { t } = useLanguage();

  return (
    <section className="value" id="manifiesto">
      <div className="value-text">
        <div className="value-badge">
          <ShieldCheck size={18} />
          <span>{t('valueBadge')}</span>
        </div>

        <h2>{t('valueTitleLine1')}<br />{t('valueTitleLine2')}</h2>
        
        <p>{t('valueDesc')}</p>

        <div className="value-features">
          <div className="feature-item">
            <CheckCircle2 size={20} className="feature-icon" />
            <span>{t('valueFeature1')}</span>
          </div>
          <div className="feature-item">
            <Lock size={20} className="feature-icon" />
            <span>{t('valueFeature2')}</span>
          </div>
          <div className="feature-item">
            <FileCheck size={20} className="feature-icon" />
            <span>{t('valueFeature3')}</span>
          </div>
          <div className="feature-item">
            <Award size={20} className="feature-icon" />
            <span>{t('valueFeature4')}</span>
          </div>
        </div>
      </div>

      <div className="value-img-wrapper">
        <div className="value-img">
          <div className="value-img-overlay"></div>
        </div>
        <div className="floating-glass-card">
          <ShieldCheck size={36} color="#06b6d4" />
          <div>
            <h4>{t('floatingCardTitle')}</h4>
            <p>{t('floatingCardDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueManifest;
