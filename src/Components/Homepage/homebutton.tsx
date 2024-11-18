import React from 'react';
import { Home } from 'lucide-react';

const HomeButton = () => {
  return (
    <a href='/' className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-gray-700 rounded-md transition-colors">
      <Home className="w-4 h-4 mr-2" />
      Home
    </a>
  );
};

export default HomeButton;