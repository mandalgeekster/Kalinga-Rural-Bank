import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Play, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Learning = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t('basicFinance'),
      description: t('basicFinanceDesc'),
      progress: 60,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400',
      icon: BookOpen,
    },
    {
      title: t('investmentBasics'),
      description: t('investmentBasicsDesc'),
      progress: 30,
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400',
      icon: Play,
    },
    {
      title: t('savingStrategies'),
      description: t('savingStrategiesDesc'),
      progress: 45,
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=400',
      icon: Award,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Featured Course */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-xl"
      >
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          alt="Featured course"
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
          <h2 className="text-2xl font-bold text-white mb-2">{t('featuredCourse')}</h2>
          <p className="text-white/90 mb-4">{t('featuredCourseDesc')}</p>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 w-fit">
            {t('startLearning')}
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* Course List */}
      <div className="grid gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors"
          >
            <div className="flex">
              <div className="w-1/3">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                    <course.icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {course.description}
                    </p>
                    <div className="space-y-2">
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="absolute h-full bg-primary rounded-full"
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          {course.progress}% {t('completed')}
                        </span>
                        <span className="text-primary font-medium">
                          {t('continue')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Learning;