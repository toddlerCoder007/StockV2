import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = 'cqbul4hr01qmbcu8st5gcqbul4hr01qmbcu8st60';

const StockCalculator = () => {
  const [stockData, setStockData] = useState([]);
  const [symbol, setSymbol] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [shares, setShares] = useState('');

  const handleAddStock = async () => {
    if (!symbol || !purchasePrice || !shares) return;

    const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`;
    const metricsUrl = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${API_KEY}`;

    try {
      const [quoteResponse, metricsResponse] = await Promise.all([
        axios.get(quoteUrl),
        axios.get(metricsUrl)
      ]);

      const { c: currentPrice } = quoteResponse.data;
      const { metric: { peBasicExclExtraTTM: peRatio, '52WeekHigh': weekHigh, '52WeekLow': weekLow } } = metricsResponse.data;

      const gainOrLoss = ((currentPrice - purchasePrice) * shares).toFixed(2);

      setStockData([...stockData, {
        symbol,
        purchasePrice: parseFloat(purchasePrice),
        shares: parseInt(shares),
        currentPrice,
        gainOrLoss,
        peRatio,
        weekHigh,
        weekLow
      }]);

      setSymbol('');
      setPurchasePrice('');
      setShares('');
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Stock Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Stock Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
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
          value={shares}
          onChange={(e) => setShares(e.target.value)}
        />
        <button onClick={handleAddStock}>Add Stock</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Purchase Price</th>
            <th>Shares</th>
            <th>Current Price</th>
            <th>Gain/Loss</th>
            <th>PE Ratio</th>
            <th>52 Week High</th>
            <th>52 Week Low</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.purchasePrice}</td>
              <td>{stock.shares}</td>
              <td>{stock.currentPrice}</td>
              <td style={{ color: stock.gainOrLoss >= 0 ? 'green' : 'red' }}>
                {stock.gainOrLoss}
              </td>
              <td>{stock.peRatio}</td>
              <td>{stock.weekHigh}</td>
              <td>{stock.weekLow}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockCalculator;




/*import React, { useState } from 'react';
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
    //'https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${token}'
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

export default StockCalculator;*/
