import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-bottom">
      {t('copyright')}
    </footer>
  );
};

export default Footer;
