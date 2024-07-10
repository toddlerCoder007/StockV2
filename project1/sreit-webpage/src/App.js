import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Portfolio from './Portfolio';
import AddStock from './AddStock';

// Dummy data to mimic the CSV data
const dummyData = [
  {
    "Name": "CapitaLand Ascendas REIT",
    "Price": 2.57,
    "Distribution Yield": "5.90%",
    "Price to Book": 1.14,
    "DPU": 0.1516,
    "NAV": 2.26,
    "Property Yield": "6.06%",
    "Gearing Ratio*": "37.90%"
  },
  {
    "Name": "CapitaLand Ascott Trust",
    "Price": 0.88,
    "Distribution Yield": "7.51%",
    "Price to Book": 0.75,
    "DPU": 0.0657,
    "NAV": 1.16,
    "Property Yield": "5.20%",
    "Gearing Ratio*": "39.50%"
  },
  {
    "Name": "CapitaLand China Trust",
    "Price": 0.67,
    "Distribution Yield": "10.06%",
    "Price to Book": 0.55,
    "DPU": 0.0674,
    "NAV": 1.21,
    "Property Yield": "5.43%",
    "Gearing Ratio*": "41.50%"
  },
  {
    "Name": "CapitaLand Integrated Commercial Trust",
    "Price": 1.99,
    "Distribution Yield": "5.40%",
    "Price to Book": 0.93,
    "DPU": 0.1075,
    "NAV": 2.13,
    "Property Yield": "4.65%",
    "Gearing Ratio*": "39.90%"
  },
  {
    "Name": "Mapletree Industrial Trust",
    "Price": 2.11,
    "Distribution Yield": "6.36%",
    "Price to Book": 1.20,
    "DPU": 0.1343,
    "NAV": 1.76,
    "Property Yield": "6.11%",
    "Gearing Ratio*": "39.00%"
  }
];

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Mimic fetching data from a CSV file
    setStocks(dummyData);
  }, []);

  const handleAddStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  const handleDeleteStock = (index) => {
    const newStocks = stocks.filter((_, i) => i !== index);
    setStocks(newStocks);
  };

  return (
    <div className="App">
      <Header />
      <AddStock handleAdd={handleAddStock} />
      <Portfolio stocks={stocks} handleDelete={handleDeleteStock} />
    </div>
  );
}

export default App;
