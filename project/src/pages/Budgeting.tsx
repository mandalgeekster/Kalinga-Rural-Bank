import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Plus, Trash2, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Budgeting = () => {
  const { t } = useTranslation();
  const [expenses, setExpenses] = useState([
    { category: 'groceries', amount: 2000, limit: 3000 },
    { category: 'utilities', amount: 1500, limit: 2000 },
    { category: 'education', amount: 1000, limit: 1500 },
  ]);

  const [goals, setGoals] = useState([
    { title: t('businessExpansion'), target: 50000, saved: 30000 },
    { title: t('educationFund'), target: 100000, saved: 45000 },
    { title: t('emergencyFund'), target: 25000, saved: 20000 },
  ]);

  const [newExpense, setNewExpense] = useState({ category: '', amount: '', limit: '' });
  const [newGoal, setNewGoal] = useState({ title: '', target: '', saved: '' });

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExpense.category && newExpense.amount && newExpense.limit) {
      setExpenses([
        ...expenses,
        {
          category: newExpense.category,
          amount: Number(newExpense.amount),
          limit: Number(newExpense.limit),
        },
      ]);
      setNewExpense({ category: '', amount: '', limit: '' });
    }
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGoal.title && newGoal.target && newGoal.saved) {
      setGoals([
        ...goals,
        {
          title: newGoal.title,
          target: Number(newGoal.target),
          saved: Number(newGoal.saved),
        },
      ]);
      setNewGoal({ title: '', target: '', saved: '' });
    }
  };

  const handleDeleteExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleDeleteGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 space-y-6">
      {/* Budget Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="text-primary" size={24} />
          <h2 className="text-lg font-semibold">{t('budgetOverview')}</h2>
        </div>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="capitalize">{t(expense.category)}</span>
                <button
                  onClick={() => handleDeleteExpense(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="relative h-2 bg-gray-200 rounded">
                <div
                  className={`absolute h-full rounded ${
                    (expense.amount / expense.limit) * 100 > 80
                      ? 'bg-red-500'
                      : 'bg-primary'
                  }`}
                  style={{ width: `${(expense.amount / expense.limit) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹{expense.amount}</span>
                <span>₹{expense.limit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Financial Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <div className="flex items-center gap-2 mb-4">
          <Target className="text-primary" size={24} />
          <h2 className="text-lg font-semibold">{t('financialGoals')}</h2>
        </div>
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{goal.title}</span>
                <button
                  onClick={() => handleDeleteGoal(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="relative h-2 bg-gray-200 rounded">
                <div
                  className="absolute h-full bg-green-500 rounded"
                  style={{ width: `${(goal.saved / goal.target) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  ₹{goal.saved} / ₹{goal.target}
                </span>
                <span className="text-green-600">
                  {Math.round((goal.saved / goal.target) * 100)}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Add New Expense */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onSubmit={handleAddExpense}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Plus size={20} className="text-primary" />
          {t('addNewExpense')}
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder={t('category')}
            value={newExpense.category}
            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            placeholder={t('amount')}
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            placeholder={t('limit')}
            value={newExpense.limit}
            onChange={(e) => setNewExpense({ ...newExpense, limit: e.target.value })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
          >
            {t('addExpense')}
          </button>
        </div>
      </motion.form>

      {/* Add New Goal */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleAddGoal}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Target size={20} className="text-primary" />
          {t('addNewGoal')}
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder={t('goalTitle')}
            value={newGoal.title}
            onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            placeholder={t('targetAmount')}
            value={newGoal.target}
            onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            placeholder={t('savedAmount')}
            value={newGoal.saved}
            onChange={(e) => setNewGoal({ ...newGoal, saved: e.target.value })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
          >
            {t('addGoal')}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Budgeting;