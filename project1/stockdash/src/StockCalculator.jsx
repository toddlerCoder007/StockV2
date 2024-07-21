import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = 'cqbul4hr01qmbcu8st5gcqbul4hr01qmbcu8st60';

 // Replace with your actual API key

const StockCalculator = () => {
  const [stocks, setStocks] = useState([]);
  const [stockName, setStockName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [numShares, setNumShares] = useState('');

  const handleAddStock = async () => {
    try {
      const symbol = stockName.toUpperCase();
      const quoteResponse = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
      const metricResponse = await axios.get(`https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${API_KEY}`);

      const latestPrice = quoteResponse.data.c;
      const peRatio = metricResponse.data.metric.peExclExtraTTM;
      const high52Weeks = metricResponse.data.metric['52WeekHigh'];
      const low52Weeks = metricResponse.data.metric['52WeekLow'];
      const purchaseAmount = parseFloat(purchasePrice);
      const shares = parseInt(numShares, 10);
      const totalInvestment = purchaseAmount * shares;
      const totalValue = latestPrice * shares;
      const gainLoss = totalValue - totalInvestment;
      const gainLossPercentage = ((latestPrice - purchaseAmount) / purchaseAmount) * 100;

      const newStock = {
        symbol,
        purchasePrice: purchaseAmount,
        numShares: shares,
        latestPrice,
        gainLoss,
        gainLossPercentage,
        peRatio,
        high52Weeks,
        low52Weeks
      };

      setStocks([...stocks, newStock]);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  const totalGainLoss = stocks.reduce((acc, stock) => acc + stock.gainLoss, 0);

  return (
    <div>
      <h1>Stock Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Stock Name"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
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
        <button onClick={handleAddStock}>Add Stock</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Purchase Price</th>
            <th>Number of Shares</th>
            <th>Latest Price</th>
            <th>Gain/Loss</th>
            <th>Gain/Loss %</th>
            <th>P/E Ratio</th>
            <th>52 Weeks High</th>
            <th>52 Weeks Low</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.purchasePrice.toFixed(2)}</td>
              <td>{stock.numShares}</td>
              <td>{stock.latestPrice.toFixed(2)}</td>
              <td style={{ color: stock.gainLoss >= 0 ? 'green' : 'red' }}>
                {stock.gainLoss.toFixed(2)}
              </td>
              <td style={{ color: stock.gainLossPercentage >= 0 ? 'green' : 'red' }}>
                {stock.gainLossPercentage.toFixed(2)}%
              </td>
              <td>{stock.peRatio.toFixed(2)}</td>
              <td>{stock.high52Weeks.toFixed(2)}</td>
              <td>{stock.low52Weeks.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">Total Gain/Loss</td>
            <td colSpan="5" style={{ color: totalGainLoss >= 0 ? 'green' : 'red' }}>
              {totalGainLoss.toFixed(2)}
            </td>
          </tr>
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
