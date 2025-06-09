import React from 'react';
import { User, Mail, Phone, Settings, LogOut, CreditCard, Bell } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '@/components/ui/button.jsx';

const ProfilePage = () => {
  const { state } = useApp();
  const { user, tickets } = state;

  const profileStats = [
    {
      label: 'Bilhetes Comprados',
      value: tickets.length,
      icon: CreditCard,
      color: 'text-blue-600'
    },
    {
      label: 'Favoritos',
      value: tickets.filter(t => t.favorito).length,
      icon: Bell,
      color: 'text-red-500'
    }
  ];

  const menuItems = [
    {
      label: 'Configurações',
      icon: Settings,
      action: () => alert('Funcionalidade em desenvolvimento')
    },
    {
      label: 'Notificações',
      icon: Bell,
      action: () => alert('Funcionalidade em desenvolvimento')
    },
    {
      label: 'Métodos de Pagamento',
      icon: CreditCard,
      action: () => alert('Funcionalidade em desenvolvimento')
    },
    {
      label: 'Sair',
      icon: LogOut,
      action: () => alert('Funcionalidade em desenvolvimento'),
      danger: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Informações do perfil */}
      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <User size={32} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {user.nomeCompleto}
            </h2>
            <p className="text-gray-500 text-sm">{user.papel}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-gray-600">
            <Mail size={16} />
            <span className="text-sm">{user.email}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Phone size={16} />
            <span className="text-sm">+55 (35) 9999-9999</span>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 gap-4">
        {profileStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center space-x-3">
                <IconComponent size={24} className={stat.color} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Menu de opções */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Configurações</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className={`w-full flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors ${
                  item.danger ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                <IconComponent size={20} />
                <span className="flex-1 text-left">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Informações da aplicação */}
      <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-blue-600 font-bold text-lg">I</span>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Inatel Tickets</h4>
          <p className="text-xs text-gray-500 mb-3">Versão 1.0.0</p>
          <p className="text-xs text-gray-400">
            © 2025 Instituto Nacional de Telecomunicações
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

