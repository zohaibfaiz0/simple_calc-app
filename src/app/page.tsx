import React from 'react';
import Calculator from './components/Calculator';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <Calculator />
    </div>
  );
};

export default Home;
