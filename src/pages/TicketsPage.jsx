import React, { useState } from 'react';
import { Search, Filter, Heart, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';
import TicketCard from '../components/TicketCard';

const TicketsPage = () => {
  const { state, actions } = useApp();
  const { tickets } = state;
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.evento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.evento.local.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesFilter = true;
    switch (filterType) {
      case 'favorites':
        matchesFilter = ticket.favorito;
        break;
      case 'active':
        matchesFilter = ticket.status === 'ativo';
        break;
      case 'upcoming':
        const eventDate = new Date(ticket.evento.data);
        const today = new Date();
        matchesFilter = eventDate >= today;
        break;
      default:
        matchesFilter = true;
    }
    
    return matchesSearch && matchesFilter;
  });

  const handleToggleFavorite = (ticketId) => {
    actions.toggleFavorite(ticketId);
  };

  const filterOptions = [
    { value: 'all', label: 'Todos', icon: Calendar },
    { value: 'favorites', label: 'Favoritos', icon: Heart },
    { value: 'active', label: 'Ativos', icon: Filter },
    { value: 'upcoming', label: 'Próximos', icon: Calendar }
  ];

  return (
    <div className="space-y-4">
      {/* Barra de pesquisa */}
      <div className="relative">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar bilhetes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filtros */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {filterOptions.map(option => {
          const IconComponent = option.icon;
          return (
            <button
              key={option.value}
              onClick={() => setFilterType(option.value)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filterType === option.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <IconComponent size={16} />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>

      {/* Estatísticas rápidas */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
          <p className="text-2xl font-bold text-blue-600">{tickets.length}</p>
          <p className="text-xs text-gray-500">Total</p>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
          <p className="text-2xl font-bold text-red-500">
            {tickets.filter(t => t.favorito).length}
          </p>
          <p className="text-xs text-gray-500">Favoritos</p>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
          <p className="text-2xl font-bold text-green-600">
            {tickets.filter(t => t.status === 'ativo').length}
          </p>
          <p className="text-xs text-gray-500">Ativos</p>
        </div>
      </div>

      {/* Lista de bilhetes */}
      <div className="space-y-4">
        {filteredTickets.length > 0 ? (
          filteredTickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onToggleFavorite={handleToggleFavorite}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500 mb-2">
              {searchTerm || filterType !== 'all' 
                ? 'Nenhum bilhete encontrado' 
                : 'Você ainda não possui bilhetes'
              }
            </p>
            {!searchTerm && filterType === 'all' && (
              <p className="text-sm text-gray-400">
                Compre bilhetes na aba Eventos
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketsPage;

