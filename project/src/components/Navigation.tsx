import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, PieChart, Users, DollarSign, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();

  const NavItem = ({ to, icon: Icon, label }: { to: string; icon: any; label: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center p-2 ${isActive ? 'text-primary' : 'text-gray-600'}`
      }
    >
      <Icon size={24} />
      <span className="text-xs mt-1">{label}</span>
    </NavLink>
  );

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t shadow-lg">
      <div className="flex justify-around items-center">
        <NavItem to="/" icon={Home} label={t('home', 'Home')} />
        <NavItem to="/learning" icon={BookOpen} label={t('learning', 'Learning')} />
        <NavItem to="/budgeting" icon={PieChart} label={t('budgeting', 'Budgeting')} />
        <NavItem to="/mentorship" icon={Users} label={t('mentorship', 'Mentorship')} />
        <NavItem to="/investments" icon={DollarSign} label={t('investments', 'Investments')} />
        <NavItem to="/govt-schemes" icon={Globe} label={t('govtSchemes', 'Schemes')} />
      </div>
    </nav>
  );
};

export default Navigation;