import React, { useState } from 'react';
import { X, CreditCard, Smartphone, FileText, Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { mockPaymentMethods } from '../data/mockData';

const PaymentModal = ({ isOpen, onClose, event, onPaymentComplete }) => {
  const [currentStep, setCurrentStep] = useState('method'); // method, details, confirmation
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentData, setPaymentData] = useState({});

  if (!isOpen || !event) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setCurrentStep('details');
  };

  const handlePaymentSubmit = () => {
    setCurrentStep('confirmation');
    // Simular processamento
    setTimeout(() => {
      onPaymentComplete();
      onClose();
      setCurrentStep('method');
      setSelectedMethod(null);
      setPaymentData({});
    }, 2000);
  };

  const renderMethodSelection = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Escolha o método de pagamento</h3>
        <p className="text-gray-600 text-sm">{event.titulo}</p>
        <p className="text-2xl font-bold text-blue-600 mt-2">{formatPrice(event.preco)}</p>
      </div>

      <div className="space-y-3">
        {mockPaymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => handleMethodSelect(method)}
            className="w-full p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center space-x-3"
          >
            <span className="text-2xl">{method.icone}</span>
            <div className="flex-1 text-left">
              <p className="font-medium">{method.nome}</p>
              <p className="text-sm text-gray-500">{method.descricao}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderPaymentDetails = () => {
    if (!selectedMethod) return null;

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3 mb-6">
          <button
            onClick={() => setCurrentStep('method')}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h3 className="text-lg font-semibold">{selectedMethod.nome}</h3>
            <p className="text-sm text-gray-600">{formatPrice(event.preco)}</p>
          </div>
        </div>

        {selectedMethod.tipo === 'pix' && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Smartphone size={48} className="mx-auto text-blue-600 mb-3" />
              <p className="font-medium mb-2">PIX Copia e Cola</p>
              <div className="bg-white p-3 rounded border text-xs font-mono break-all">
                00020126580014br.gov.bcb.pix0136{Math.random().toString(36).substring(7)}520400005303986540{event.preco.toFixed(2)}5802BR5913INATEL TICKETS6009SAO_PAULO62070503***6304
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Copie o código PIX e cole no seu aplicativo bancário
              </p>
            </div>
          </div>
        )}

        {selectedMethod.tipo === 'cartao' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Número do Cartão</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border border-gray-300 rounded-lg"
                onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-2">Validade</label>
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => setPaymentData({...paymentData, expiry: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nome no Cartão</label>
              <input
                type="text"
                placeholder="João Silva"
                className="w-full p-3 border border-gray-300 rounded-lg"
                onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
              />
            </div>
          </div>
        )}

        {selectedMethod.tipo === 'boleto' && (
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <FileText size={48} className="mx-auto text-orange-600 mb-3" />
              <p className="font-medium mb-2">Boleto Bancário</p>
              <p className="text-sm text-gray-600 mb-3">
                O boleto será gerado após a confirmação e enviado por email
              </p>
              <div className="bg-white p-3 rounded border">
                <p className="text-xs text-gray-600">Vencimento: 3 dias úteis</p>
                <p className="text-xs text-gray-600">Valor: {formatPrice(event.preco)}</p>
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={handlePaymentSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
        >
          {selectedMethod.tipo === 'pix' ? 'Confirmar PIX' : 
           selectedMethod.tipo === 'cartao' ? 'Pagar com Cartão' : 
           'Gerar Boleto'}
        </Button>
      </div>
    );
  };

  const renderConfirmation = () => (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check size={32} className="text-green-600" />
      </div>
      <h3 className="text-lg font-semibold">Processando Pagamento...</h3>
      <p className="text-gray-600">Aguarde enquanto confirmamos seu pagamento</p>
      <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Pagamento</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {currentStep === 'method' && renderMethodSelection()}
          {currentStep === 'details' && renderPaymentDetails()}
          {currentStep === 'confirmation' && renderConfirmation()}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

