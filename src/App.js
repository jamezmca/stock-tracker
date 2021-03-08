import React from 'react';
import './App.css';
import CryptoRow from './components/CryptoRow';
import StockRow from './components/StockRow';

function App() {
  return (
    <div className="App">
      <div className="stock-rows">
        <h1 className="stock-title">Stock Tracker</h1>
        <StockRow ticker="tsla" />
        <StockRow ticker="pypl" />
        <StockRow ticker="GME" />
        <StockRow ticker="AMC" />
        <StockRow ticker="CRSR" />
      </div>
      <CryptoRow />

    </div>
  );
}


export default App;
