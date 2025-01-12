import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Bell, 
  HelpCircle, 
  User, 
  Shield,
  Sun,
  Moon,
  LogOut,
  Info,
  MessageSquare
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
    setShowLogoutConfirm(false);
    setShowSettings(false);
  };

  return (
    <header className="bg-primary dark:bg-gray-800 text-white p-4 shadow-md relative transition-colors duration-300">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">{t('appName')}</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <Settings size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {showSettings && (
          <motion.div
            key="settings-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-4 top-16 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg p-4 w-72 z-50"
          >
            <div className="space-y-4">
              {/* Profile Section */}
              <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                <User className="text-primary dark:text-primary/80" size={20} />
                <div>
                  <div className="font-medium">Lakshmi Devi</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">View Profile</div>
                </div>
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="text-primary dark:text-primary/80" size={20} />
                    <span className="font-medium">{t('darkMode')}</span>
                  </>
                ) : (
                  <>
                    <Sun className="text-primary dark:text-primary/80" size={20} />
                    <span className="font-medium">{t('lightMode')}</span>
                  </>
                )}
              </button>

              {/* Notifications */}
              <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                <Bell className="text-primary dark:text-primary/80" size={20} />
                <div className="font-medium">{t('notifications')}</div>
              </div>

              {/* Language Settings */}
              <div className="p-3">
                <div className="font-medium mb-2">{t('language')}</div>
                <LanguageSwitcher />
              </div>

              {/* Security */}
              <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                <Shield className="text-primary dark:text-primary/80" size={20} />
                <div className="font-medium">{t('security')}</div>
              </div>

              {/* Help */}
              <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                <HelpCircle className="text-primary dark:text-primary/80" size={20} />
                <div className="font-medium">{t('help')}</div>
              </div>

              {/* About */}
              <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                <Info className="text-primary dark:text-primary/80" size={20} />
                <div>
                  <div className="font-medium">{t('about')}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">v1.0.0</div>
                </div>
              </div>

              {/* Feedback */}
              <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                <MessageSquare className="text-primary dark:text-primary/80" size={20} />
                <div className="font-medium">{t('feedback')}</div>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full p-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg transition-colors"
              >
                <LogOut size={20} />
                <span className="font-medium">{t('logout')}</span>
              </button>
            </div>
          </motion.div>
        )}

        {showLogoutConfirm && (
          <motion.div
            key="logout-confirm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4"
            >
              <h3 className="text-lg font-semibold mb-2">{t('logoutConfirmTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t('logoutConfirmMessage')}</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {t('cancel')}
                </button>
                <button
                  onClick={confirmLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  {t('logout')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;