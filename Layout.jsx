import React from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title={title} />
      
      <main className="flex-1 pb-20 pt-4">
        <div className="max-w-md mx-auto px-4">
          {children}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Layout;

