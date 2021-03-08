import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import StockRow from './components/StockRow';

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date & Time</th>
              <th>Buy In</th>
              <th>Quantity</th>
              <th>Profit</th>
              <th>Profit %</th>
              
            </tr>
          </thead>
          <tbody>
            <StockRow ticker="amzn" />
            <StockRow ticker="crsr" />
            <StockRow ticker="tsla" />
            <StockRow ticker="pypl" />
            <StockRow ticker="gme" />
            <StockRow ticker="amc" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
