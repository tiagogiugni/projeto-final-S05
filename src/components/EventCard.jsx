import React from 'react';
import { Calendar, MapPin, Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const EventCard = ({ event, onAddTicket }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 border border-gray-200">
      {/* Imagem do evento */}
      <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-center">
          <Calendar size={32} className="mx-auto mb-2" />
          <p className="text-sm font-medium">{event.categoria}</p>
        </div>
      </div>
      
      {/* Conteúdo do cartão */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {event.titulo}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar size={16} className="mr-2 text-blue-500" />
            <span>{formatDate(event.data)} às {event.hora}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-2 text-blue-500" />
            <span className="line-clamp-1">{event.local}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Users size={16} className="mr-2 text-blue-500" />
            <span>{event.vagasRestantes} vagas restantes</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-600">
              {formatPrice(event.preco)}
            </p>
            <p className="text-xs text-gray-500">por pessoa</p>
          </div>
          
          <Button
            onClick={() => onAddTicket(event)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            disabled={event.vagasRestantes === 0}
          >
            <Plus size={16} />
            <span>Comprar</span>
          </Button>
        </div>
        
        {event.vagasRestantes <= 10 && event.vagasRestantes > 0 && (
          <div className="mt-3 p-2 bg-orange-50 border border-orange-200 rounded-md">
            <p className="text-orange-700 text-xs font-medium">
              ⚠️ Últimas vagas disponíveis!
            </p>
          </div>
        )}
        
        {event.vagasRestantes === 0 && (
          <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-700 text-xs font-medium">
              🚫 Evento esgotado
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;

