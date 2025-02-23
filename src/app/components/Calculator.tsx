'use client'
import React, { useState, useEffect } from 'react';

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

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key;

    if (/\d/.test(key)) { // Check if the key is a number
      appendValue(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendValue(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      clearDisplay();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [displayValue]);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold mb-4 text-center">Simple Calculator</h1>
        <input
          id="display"
          type="text"
          readOnly
          value={displayValue}
          className="w-full mb-4 p-3 text-right text-3xl bg-gray-800 rounded-lg border border-gray-600 shadow-inner"
        />
        <div className="grid grid-cols-4 gap-2">
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (item === 'C') {
                  clearDisplay();
                } else if (item === '=') {
                  calculate();
                } else {
                  appendValue(item);
                }
              }}
              className={`p-4 text-xl font-semibold rounded-lg transition duration-200 
                ${item === 'C' ? 'bg-red-600 hover:bg-red-500' : 
                  item === '=' ? 'bg-green-600 hover:bg-green-500' : 
                  item === '+' || item === '-' || item === '*' || item === '/' ? 'bg-blue-600 hover:bg-blue-500' : 
                  'bg-gray-700 hover:bg-gray-600'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;