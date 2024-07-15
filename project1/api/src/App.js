// src/App.js
import React from 'react';
import './App.css';
import StockPrices from './StockPrices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Finnhub Stock Prices</h1>
      </header>
      <main>
        <StockPrices />
      </main>
    </div>
  );
}

export default App;
