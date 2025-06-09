import React from 'react';
import { Calendar, Ticket, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const BottomNavigation = () => {
  const { state, actions } = useApp();
  const { currentPage } = state;

  const navItems = [
    {
      id: 'events',
      label: 'Eventos',
      icon: Calendar,
      active: currentPage === 'events'
    },
    {
      id: 'tickets',
      label: 'Bilhetes',
      icon: Ticket,
      active: currentPage === 'tickets'
    },
    {
      id: 'profile',
      label: 'Perfil',
      icon: User,
      active: currentPage === 'profile'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => actions.setCurrentPage(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                item.active
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <IconComponent size={24} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;

