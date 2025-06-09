import React, { createContext, useContext, useReducer } from 'react';
import { mockEvents, mockTickets, mockUser } from '../data/mockData';

// Estado inicial
const initialState = {
  user: mockUser,
  events: mockEvents,
  tickets: mockTickets,
  cart: [],
  currentPage: 'events'
};

// Tipos de ações
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  ADD_TICKET: 'ADD_TICKET',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  PURCHASE_TICKET: 'PURCHASE_TICKET'
};

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    
    case actionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        tickets: state.tickets.map(ticket =>
          ticket.id === action.payload.ticketId
            ? { ...ticket, favorito: !ticket.favorito }
            : ticket
        )
      };
    
    case actionTypes.ADD_TICKET:
      const newTicket = {
        id: Date.now(),
        eventoId: action.payload.eventoId,
        status: 'ativo',
        dataEmissao: new Date().toISOString().split('T')[0],
        codigoQR: `QR${Date.now()}`,
        favorito: false,
        evento: action.payload.evento
      };
      return {
        ...state,
        tickets: [...state.tickets, newTicket]
      };
    
    case actionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    
    case actionTypes.PURCHASE_TICKET:
      // Simula a compra de um bilhete
      const event = state.events.find(e => e.id === action.payload.eventoId);
      if (event) {
        const newPurchasedTicket = {
          id: Date.now(),
          eventoId: event.id,
          status: 'ativo',
          dataEmissao: new Date().toISOString().split('T')[0],
          codigoQR: `QR${Date.now()}`,
          favorito: false,
          evento: {
            titulo: event.titulo,
            data: event.data,
            local: event.local
          }
        };
        return {
          ...state,
          tickets: [...state.tickets, newPurchasedTicket],
          cart: []
        };
      }
      return state;
    
    default:
      return state;
  }
}

// Contexto
const AppContext = createContext();

// Provider
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
    actions: {
      addToCart: (event) => dispatch({ type: actionTypes.ADD_TO_CART, payload: event }),
      removeFromCart: (event) => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: event }),
      clearCart: () => dispatch({ type: actionTypes.CLEAR_CART }),
      toggleFavorite: (ticketId) => dispatch({ type: actionTypes.TOGGLE_FAVORITE, payload: { ticketId } }),
      addTicket: (eventoId, evento) => dispatch({ type: actionTypes.ADD_TICKET, payload: { eventoId, evento } }),
      setCurrentPage: (page) => dispatch({ type: actionTypes.SET_CURRENT_PAGE, payload: page }),
      purchaseTicket: (eventoId) => dispatch({ type: actionTypes.PURCHASE_TICKET, payload: { eventoId } })
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Hook personalizado
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
}

