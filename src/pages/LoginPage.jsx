import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import inatelLogo from '../assets/inatel-logo.svg';

const LoginPage = () => {
  const { actions } = useApp();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.setCurrentPage('events');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm space-y-6">
        <div className="flex justify-center">
          <img src={inatelLogo} alt="Inatel" className="h-12" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="matricula" className="block text-sm font-medium text-gray-700">Matrícula</label>
            <input
              id="matricula"
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              className="inatel-input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="inatel-input mt-1"
              required
            />
          </div>
          <button type="submit" className="inatel-button-primary w-full">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;