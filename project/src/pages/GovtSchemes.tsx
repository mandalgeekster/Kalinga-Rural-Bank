import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Home,
  Users,
  Heart,
  Tractor,
  GraduationCap,
  Building2
} from 'lucide-react';

const GovtSchemes = () => {
  const { t } = useTranslation();

  const schemes = [
    {
      title: t('pmayg'),
      description: t('pmaygDesc'),
      provider: 'central',
      icon: Home,
    },
    {
      title: t('mmsy'),
      description: t('mmsyDesc'),
      provider: 'odisha',
      icon: Users,
    },
    {
      title: t('bsky'),
      description: t('bskyDesc'),
      provider: 'odisha',
      icon: Heart,
    },
    {
      title: t('kalia'),
      description: t('kaliaDesc'),
      provider: 'odisha',
      icon: Tractor,
    },
    {
      title: t('pmkvy'),
      description: t('pmkvyDesc'),
      provider: 'central',
      icon: GraduationCap,
    },
    {
      title: t('mudra'),
      description: t('mudraDesc'),
      provider: 'central',
      icon: Building2,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t('govtSchemes')}</h1>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm">{t('central')}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm">{t('state')}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {schemes.map((scheme, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 ${
              scheme.provider === 'central' ? 'border-primary' : 'border-secondary'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${
                scheme.provider === 'central' ? 'bg-primary/10' : 'bg-secondary/10'
              }`}>
                <scheme.icon className={
                  scheme.provider === 'central' ? 'text-primary' : 'text-secondary'
                } size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{scheme.title}</h3>
                <p className="text-gray-600">{scheme.description}</p>
                <button className={`mt-4 px-4 py-2 rounded-md text-white ${
                  scheme.provider === 'central' ? 'bg-primary' : 'bg-secondary'
                } hover:opacity-90 transition-opacity`}>
                  {t('learnMore')}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GovtSchemes;