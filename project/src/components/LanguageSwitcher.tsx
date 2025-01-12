import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileTap={{ scale: 0.95 }}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            i18n.language === lang.code
              ? 'bg-primary text-white dark:bg-primary/80'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {lang.nativeName}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;