import React from 'react';
import { Building2, Sparkles, Wrench, Box } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Solutions = () => {
  const { t } = useLanguage();

  const solutionsData = [
    {
      id: 1,
      title: t('sol1Title'),
      description: t('sol1Desc'),
      icon: Building2,
      badge: t('sol1Badge')
    },
    {
      id: 2,
      title: t('sol2Title'),
      description: t('sol2Desc'),
      icon: Sparkles,
      badge: t('sol2Badge')
    },
    {
      id: 3,
      title: t('sol3Title'),
      description: t('sol3Desc'),
      icon: Wrench,
      badge: t('sol3Badge')
    },
    {
      id: 4,
      title: t('sol4Title'),
      description: t('sol4Desc'),
      icon: Box,
      badge: t('sol4Badge')
    }
  ];

  return (
    <section className="solutions" id="soluciones">
      <div className="solutions-header">
        <span className="tag">{t('solutionsTag')}</span>
        <h2 className="solutions-title">{t('solutionsTitle')}</h2>
      </div>

      <div className="grid">
        {solutionsData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div className="card" key={item.id}>
              <div className="card-badge">{item.badge}</div>
              <div className="card-content">
                <div className="card-icon-box">
                  <IconComponent size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solutions;
