import React from 'react';
import { Heart, Calendar, MapPin, QrCode, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const TicketCard = ({ ticket, onToggleFavorite }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const generateQRCode = (code) => {
    // Simulação de QR code usando um padrão visual simples
    return (
      <div className="w-16 h-16 bg-gray-900 rounded-md flex items-center justify-center">
        <div className="grid grid-cols-4 gap-0.5">
          {Array.from({ length: 16 }, (_, i) => (
            <div
              key={i}
              className={`w-1 h-1 ${
                Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 border border-gray-200">
      <div className="p-4">
        {/* Cabeçalho do bilhete */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            {/* Ícone do bilhete */}
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <RotateCcw size={20} className="text-blue-600" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                {ticket.evento.titulo}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Bilhete #{ticket.id}
              </p>
            </div>
          </div>
          
          {/* Botão de favorito */}
          <button
            onClick={() => onToggleFavorite(ticket.id)}
            className={`p-2 rounded-full transition-colors ${
              ticket.favorito
                ? 'text-red-500 bg-red-50 hover:bg-red-100'
                : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
            }`}
          >
            <Heart
              size={18}
              fill={ticket.favorito ? 'currentColor' : 'none'}
            />
          </button>
        </div>

        {/* Informações do evento */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-xs">
            <Calendar size={14} className="mr-2 text-blue-500" />
            <span>{formatDate(ticket.evento.data)}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-xs">
            <MapPin size={14} className="mr-2 text-blue-500" />
            <span className="line-clamp-1">{ticket.evento.local}</span>
          </div>
        </div>

        {/* QR Code e status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {generateQRCode(ticket.codigoQR)}
            <div>
              <p className="text-xs text-gray-500 mb-1">Status</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                ticket.status === 'ativo'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {ticket.status === 'ativo' ? 'Ativo' : 'Inativo'}
              </span>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            <QrCode size={16} className="mr-1" />
            Ver QR
          </Button>
        </div>

        {/* Data de emissão */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Emitido em {formatDate(ticket.dataEmissao)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

