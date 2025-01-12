import React from 'react';
import { useTranslation } from 'react-i18next';
import { Line, Doughnut } from 'react-chartjs-2';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const { t } = useTranslation();

  const balanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: t('balance'),
        data: [3000, 3500, 3200, 3800, 3600, 4000],
        borderColor: '#B17C3F',
        backgroundColor: 'rgba(177, 124, 63, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const spendingData = {
    labels: [t('groceries'), t('utilities'), t('savings'), t('education')],
    datasets: [
      {
        data: [30, 20, 35, 15],
        backgroundColor: ['#B17C3F', '#2B4D7E', '#4CAF50', '#FF9800'],
      },
    ],
  };

  const transactions = [
    { type: 'income', amount: 1000, description: t('salaryDeposit'), date: '2024-03-15' },
    { type: 'expense', amount: 200, description: t('groceries'), date: '2024-03-14' },
    { type: 'expense', amount: 150, description: t('utilities'), date: '2024-03-13' },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Balance Overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="text-primary" size={20} />
            <span className="text-sm text-gray-600">{t('currentBalance')}</span>
          </div>
          <div className="text-2xl font-bold">₹4,000</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-secondary" size={20} />
            <span className="text-sm text-gray-600">{t('monthlyGrowth')}</span>
          </div>
          <div className="text-2xl font-bold">+12%</div>
        </div>
      </div>

      {/* Balance Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">{t('balanceOverview')}</h2>
        <Line data={balanceData} options={{ responsive: true }} />
      </div>

      {/* Spending Distribution */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">{t('spendingDistribution')}</h2>
        <div className="h-64">
          <Doughnut data={spendingData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">{t('recentTransactions')}</h2>
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div>
                <div className="font-medium">{transaction.description}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
              <div className={`flex items-center gap-1 ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type === 'income' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span className="font-medium">₹{transaction.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;