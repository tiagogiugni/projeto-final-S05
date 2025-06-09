import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';
import EventCard from '../components/EventCard';
import PaymentModal from '../components/PaymentModal';

const EventsPage = () => {
  const { state, actions } = useApp();
  const { events } = state;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filtrar eventos
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.local.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Obter categorias únicas
  const categories = ['all', ...new Set(events.map(event => event.categoria))];

  const handleAddTicket = (event) => {
    setSelectedEvent(event);
    setShowPaymentModal(true);
  };

  const handlePaymentComplete = () => {
    if (selectedEvent) {
      actions.purchaseTicket(selectedEvent.id);
      alert('Bilhete comprado com sucesso!');
    }
  };

  return (
    <div className="space-y-4">
      {/* Barra de pesquisa */}
      <div className="relative">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar eventos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filtros de categoria */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category === 'all' ? 'Todos' : category}
          </button>
        ))}
      </div>

      {/* Lista de eventos */}
      <div className="space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onAddTicket={handleAddTicket}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhum evento encontrado</p>
          </div>
        )}
      </div>

      {/* Modal de pagamento */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        event={selectedEvent}
        onPaymentComplete={handlePaymentComplete}
      />
    </div>
  );
};

export default EventsPage;

