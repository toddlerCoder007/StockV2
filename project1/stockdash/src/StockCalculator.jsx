/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StockCalculator.css';

const API_KEY = 'qbul4hr01qmbcu8st5gcqbul4hr01qmbcu8st60';

const StockCalculator = () => {
  const [stockName, setStockName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [numShares, setNumShares] = useState('');
  const [stocks, setStocks] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const fetchLatestPrice = async (symbol) => {
    try {
      const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
      return response.data.c; // Latest price
    } catch (error) {
      console.error('Error fetching latest stock price:', error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const latestPrice = await fetchLatestPrice(stockName);
    if (latestPrice) {
      const newStock = {
        stockName,
        purchasePrice: parseFloat(purchasePrice),
        numShares: parseInt(numShares),
        latestPrice
      };
      setStocks([...stocks, newStock]);
      setStockName('');
      setPurchasePrice('');
      setNumShares('');
    }
  };

  const handleDelete = (index) => {
    const updatedStocks = stocks.filter((_, i) => i !== index);
    setStocks(updatedStocks);
  };

  const calculateTotalGainOrLoss = () => {
    return stocks.reduce((total, stock) => {
      const gainOrLoss = (stock.latestPrice - stock.purchasePrice) * stock.numShares;
      return total + gainOrLoss;
    }, 0);
  };

  const sortedStocks = [...stocks];
  if (sortConfig.key) {
    sortedStocks.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const totalGainOrLoss = calculateTotalGainOrLoss();

  return (
    <div className="App">
      <h1>Stock Gains/Losses</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
          placeholder="Enter stock name"
          required
        />
        <input
          type="number"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
          placeholder="Enter purchase price"
          required
        />
        <input
          type="number"
          value={numShares}
          onChange={(e) => setNumShares(e.target.value)}
          placeholder="Enter number of shares"
          required
        />
        <button type="submit">Add Stock</button>
      </form>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('stockName')}>Stock Name</th>
            <th onClick={() => requestSort('purchasePrice')}>Purchase Price (USD)</th>
            <th onClick={() => requestSort('numShares')}>Number of Shares</th>
            <th>Latest Price (USD)</th>
            <th onClick={() => requestSort('gainOrLoss')}>Gain/Loss (USD)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedStocks.map((stock, index) => {
            const gainOrLoss = (stock.latestPrice - stock.purchasePrice) * stock.numShares;
            return (
              <tr key={index}>
                <td>{stock.stockName}</td>
                <td>{stock.purchasePrice.toFixed(2)}</td>
                <td>{stock.numShares}</td>
                <td>{stock.latestPrice.toFixed(2)}</td>
                <td style={{ color: gainOrLoss >= 0 ? 'green' : 'red' }}>
                  {gainOrLoss.toFixed(2)}
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total Gain/Loss (USD)</td>
            <td style={{ color: totalGainOrLoss >= 0 ? 'green' : 'red' }}>
              {totalGainOrLoss.toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StockCalculator;

*/




import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const StockCalculator = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [numShares, setNumShares] = useState('');
  const [stocks, setStocks] = useState([]);

  const fetchLatestPrice = async (symbol) => {
    const token = 'cqbul4hr01qmbcu8st5gcqbul4hr01qmbcu8st60';
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`;
    const response = await axios.get(url);
    return response.data.c;
  };

  const addStock = async () => {
    const latestPrice = await fetchLatestPrice(stockSymbol);
    const gainOrLoss = ((latestPrice - purchasePrice) * numShares).toFixed(2);
    const gainOrLossColor = gainOrLoss >= 0 ? 'green' : 'red';

    const newStock = {
      stockSymbol,
      purchasePrice: parseFloat(purchasePrice).toFixed(2),
      numShares: parseFloat(numShares).toFixed(2),
      latestPrice: latestPrice.toFixed(2),
      gainOrLoss: parseFloat(gainOrLoss).toFixed(2),
      gainOrLossColor,
    };

    setStocks([...stocks, newStock]);
    setStockSymbol('');
    setPurchasePrice('');
    setNumShares('');
  };

  const totalGainOrLoss = stocks.reduce((acc, stock) => acc + parseFloat(stock.gainOrLoss), 0).toFixed(2);
  const totalGainOrLossColor = totalGainOrLoss >= 0 ? 'green' : 'red';

  return (
    <div className="app">
      <h1>Stock Gain or Loss Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Stock Name or Code"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
        />
        <input
          type="number"
          placeholder="Purchase Price"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Shares"
          value={numShares}
          onChange={(e) => setNumShares(e.target.value)}
        />
        <button onClick={addStock}>Add Stock</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Stock Name/Code</th>
            <th>Purchase Price</th>
            <th>Number of Shares</th>
            <th>Latest Price</th>
            <th>Gain/Loss </th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.stockSymbol}</td>
              <td>{stock.purchasePrice}</td>
              <td>{stock.numShares}</td>
              <td>{stock.latestPrice}</td>
              <td style={{ color: stock.gainOrLossColor }}>{stock.gainOrLoss}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">Total Gain/Loss</td>
            <td style={{ color: totalGainOrLossColor }}>{totalGainOrLoss}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockCalculator;
