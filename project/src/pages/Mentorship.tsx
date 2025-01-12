import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Calendar, 
  Video,
  Users,
  BookOpen,
  Star
} from 'lucide-react';

const Mentorship = () => {
  const { t } = useTranslation();
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      name: 'Priya Sharma',
      expertise: t('financialPlanning'),
      rating: 4.8,
      language: t('hindiOdia'),
      available: true,
    },
    {
      name: 'Rajesh Kumar',
      expertise: t('businessGrowth'),
      rating: 4.9,
      language: t('hindiEnglish'),
      available: true,
    },
    {
      name: 'Sunita Patel',
      expertise: t('womenEntrepreneurship'),
      rating: 4.7,
      language: t('odiaEnglish'),
      available: false,
    },
  ];

  const upcomingSessions = [
    {
      title: t('groupSession'),
      date: '2024-03-20',
      time: '10:00 AM',
      type: 'group',
      topic: t('savingStrategies'),
    },
    {
      title: t('oneOnOne'),
      date: '2024-03-22',
      time: '2:00 PM',
      type: 'individual',
      topic: t('businessPlanning'),
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Upcoming Sessions */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="text-primary" size={20} />
          {t('upcomingSessions')}
        </h2>
        <div className="space-y-3">
          {upcomingSessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <div className="font-medium">{session.title}</div>
                <div className="text-sm text-gray-600">
                  {session.date} • {session.time}
                </div>
                <div className="text-sm text-primary">{session.topic}</div>
              </div>
              <button className="bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/90">
                {t('join')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Available Mentors */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="text-primary" size={20} />
          {t('availableMentors')}
        </h2>
        <div className="space-y-4">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.expertise}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm">{mentor.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{mentor.language}</p>
                </div>
                <div className="space-y-2">
                  <button
                    className={`flex items-center gap-1 px-3 py-1 rounded-md ${
                      mentor.available
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!mentor.available}
                  >
                    <Video size={16} />
                    {t('schedule')}
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 rounded-md border hover:bg-gray-50 w-full">
                    <MessageCircle size={16} />
                    {t('message')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="text-primary" size={20} />
          {t('mentorResources')}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {['businessPlan', 'financialGoals', 'marketingBasics', 'riskManagement'].map(
            (resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <h3 className="font-medium">{t(resource)}</h3>
                <p className="text-sm text-gray-600 mt-1">{t(`${resource}Desc`)}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;