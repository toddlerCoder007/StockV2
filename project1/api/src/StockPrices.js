// src/StockPrices.js
import React, { useState, useEffect } from 'react';

const StockPrices = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'cq8q0hpr01qnitif2ar0cq8q0hpr01qnitif2arg'; // Replace with your Finnhub API key
  const symbol = 'AAPL'; // Replace with the stock symbol you want to query

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (result.error) {
          throw new Error(result.error.message);
        }

        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [symbol, API_KEY]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Stock Prices for {symbol}</h1>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Current Price</th>
              <th>High Price of the Day</th>
              <th>Low Price of the Day</th>
              <th>Open Price of the Day</th>
              <th>Previous Close Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.c}</td>
              <td>{data.h}</td>
              <td>{data.l}</td>
              <td>{data.o}</td>
              <td>{data.pc}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default StockPrices;
