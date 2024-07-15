import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Portfolio from './Portfolio';
import AddStock from './AddStock';


const API_KEY = 'cq8q0hpr01qnitif2ar0cq8q0hpr01qnitif2arg'; //  Finnhub API key

const dummyData = [
  {
    "Name": "Apple",
    "Symbol": "AAPL"
  },
  {
    "Name": "Google",
    "Symbol": "GOOG"
  },
  {
    "Name": "Boeing",
    "Symbol": "BA"
  },
  {
    "Name": "Microsoft",
    "Symbol": "MSFT"
  },
  {
    "Name": "Intel",
    "Symbol": "INTC"
  }
];

function App() {
  const [stocks, setStocks] = useState(dummyData);

  const fetchStockData = async (symbol) => {
    try {
      console.log(`Fetching data for symbol: ${symbol}`);
      const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
      console.log(response.data); // Log the response to see the data structure
      if (response.data.c) {
        const latestPrice = response.data.c;
        return {
          close: latestPrice,
          symbol
        };
      } else {
        console.error(`No data found for symbol: ${symbol}`);
        return { close: null, symbol };
      }
    } catch (error) {
      console.error(`Error fetching data for symbol: ${symbol}`, error);
      return { close: null, symbol };
    }
  };

  const fetchData = async () => {
    console.log('Fetching data for all stocks');
    const updatedStocks = await Promise.all(
      stocks.map(async (stock) => {
        const result = await fetchStockData(stock.Symbol);
        return {
          ...stock,
          Price: result.close
        };
      })
    );
    console.log('Updated Stocks:', updatedStocks); // Log updated stocks to verify state
    setStocks(updatedStocks);
  };

  useEffect(() => {
    fetchData();

    // Set interval to fetch data periodically (e.g., every 5 minutes)
    const interval = setInterval(fetchData, 300000); // 300000 ms = 5 minutes

    return () => clearInterval(interval);
  }, []);

  const handleAddStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  const handleDeleteStock = (index) => {
    const newStocks = stocks.filter((_, i) => i !== index);
    setStocks(newStocks);
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="App">
      <Header />
      <AddStock handleAdd={handleAddStock} />
      <button className="refresh-button" onClick={handleRefresh}>Refresh Prices</button>
      <Portfolio stocks={stocks} handleDelete={handleDeleteStock} />
    </div>
  );
}

export default App;
