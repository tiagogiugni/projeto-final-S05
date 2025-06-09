import React from 'react';
import { Bell, Menu } from 'lucide-react';

const Header = ({ title = "Inatel Tickets" }) => {
  return (
    <header className="bg-blue-600 text-white px-4 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">I</span>
          </div>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

