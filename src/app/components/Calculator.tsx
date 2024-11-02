'use client'
import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('');

  const appendValue = (value: string) => {
    setDisplayValue(displayValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-gray-900 text-white rounded-lg shadow-lg border-2 border-blue-500">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Simple Calculator</h1>
        <input
          id="display"
          type="text"
          readOnly
          value={displayValue}
          className="w-full mb-4 p-3 text-right text-2xl bg-gray-800 rounded-lg"
        />
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => appendValue('1')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">1</button>
          <button onClick={() => appendValue('2')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">2</button>
          <button onClick={() => appendValue('3')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">3</button>
          <button onClick={() => appendValue('+')} className="p-4 bg-orange-500 rounded-lg hover:bg-orange-400">+</button>

          <button onClick={() => appendValue('4')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">4</button>
          <button onClick={() => appendValue('5')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">5</button>
          <button onClick={() => appendValue('6')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">6</button>
          <button onClick={() => appendValue('-')} className="p-4 bg-orange-500 rounded-lg hover:bg-orange-400">-</button>

          <button onClick={() => appendValue('7')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">7</button>
          <button onClick={() => appendValue('8')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">8</button>
          <button onClick={() => appendValue('9')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">9</button>
          <button onClick={() => appendValue('*')} className="p-4 bg-orange-500 rounded-lg hover:bg-orange-400">*</button>

          <button onClick={clearDisplay} className="p-4 bg-red-600 rounded-lg hover:bg-red-700">C</button>
          <button onClick={() => appendValue('0')} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">0</button>
          <button onClick={calculate} className="p-4 bg-green-600 rounded-lg hover:bg-green-700">=</button>
          <button onClick={() => appendValue('/')} className="p-4 bg-orange-500 rounded-lg hover:bg-orange-400">/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
