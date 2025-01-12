import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Scissors, 
  Cookie, 
  Milk, 
  Store, 
  IndianRupee, 
  TrendingUp,
  Building,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const Investments = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('business');

  const businessPlans = [
    {
      title: t('tailoring'),
      description: t('tailoringDesc'),
      investment: 15000,
      return: '8000-12000',
      icon: Scissors,
    },
    {
      title: t('papadMaking'),
      description: t('papadMakingDesc'),
      investment: 10000,
      return: '5000-8000',
      icon: Cookie,
    },
    {
      title: t('dairyBusiness'),
      description: t('dairyBusinessDesc'),
      investment: 50000,
      return: '15000-20000',
      icon: Milk,
    },
    {
      title: t('groceryStore'),
      description: t('groceryStoreDesc'),
      investment: 100000,
      return: '20000-30000',
      icon: Store,
    },
  ];

  const loans = [
    {
      title: t('mudraLoan'),
      description: t('mudraLoanDesc'),
      amount: '50,000 - 10,00,000',
      interest: '7%',
      icon: Building,
    },
    {
      title: t('shgLoan'),
      description: t('shgLoanDesc'),
      amount: '1,00,000 - 5,00,000',
      interest: '4%',
      icon: Users,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Tab Switcher */}
      <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-md">
        <button
          onClick={() => setActiveTab('business')}
          className={`flex-1 py-2 rounded-md transition-colors ${
            activeTab === 'business' ? 'bg-primary text-white' : 'hover:bg-gray-100'
          }`}
        >
          {t('businessPlans')}
        </button>
        <button
          onClick={() => setActiveTab('loans')}
          className={`flex-1 py-2 rounded-md transition-colors ${
            activeTab === 'loans' ? 'bg-primary text-white' : 'hover:bg-gray-100'
          }`}
        >
          {t('loanOptions')}
        </button>
      </div>

      {/* Business Plans */}
      {activeTab === 'business' && (
        <div className="grid gap-4 md:grid-cols-2">
          {businessPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <plan.icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-gray-500">{t('initialInvestment')}</span>
                      <div className="font-semibold">₹{plan.investment}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500">{t('monthlyReturn')}</span>
                      <div className="font-semibold text-green-600">₹{plan.return}</div>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    {t('getStarted')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Loan Options */}
      {activeTab === 'loans' && (
        <div className="space-y-4">
          {loans.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <loan.icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{loan.title}</h3>
                  <p className="text-gray-600 mb-4">{loan.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-gray-500">{t('loanAmount')}</span>
                      <div className="font-semibold">₹{loan.amount}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500">{t('interestRate')}</span>
                      <div className="font-semibold text-green-600">{loan.interest}</div>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    {t('applyNow')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Investments;