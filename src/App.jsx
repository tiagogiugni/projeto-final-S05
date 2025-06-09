import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Layout from './components/Layout';
import EventsPage from './pages/EventsPage';
import TicketsPage from './pages/TicketsPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

// Componente principal da aplicação
function AppContent() {
  const { state } = useApp();
  const { currentPage } = state;

  const renderCurrentPage = () => {
    switch (currentPage) {
            case 'login':
        return 'Login';
      case 'events':
        return <EventsPage />;
      case 'tickets':
        return <TicketsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <EventsPage />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'events':
        return 'Eventos Disponíveis';
      case 'tickets':
        return 'Meus Bilhetes';
      case 'profile':
        return 'Meu Perfil';
      case 'login':
        return 'Login'
      default:
        return 'Login';
    }
  };

  return (
    currentPage === 'login' ? (
      <LoginPage />
    ) : (
      <Layout title={getPageTitle()}>
        {renderCurrentPage()}
      </Layout>
    )
  );
}

// Componente raiz com provider
function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;

