import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Portfolio from './Portfolio';
import AddStock from './AddStock';

const dummyData = [
  {
    id: 1,
    name: 'CapitaLand Ascendas REIT',
    price: 2.57,
    distributionYield: '5.90%',
    priceToBook: 1.14,
    dpu: 0.1516,
    nav: 2.26,
    propertyYield: '6.06%',
    gearingRatio: '37.90%'
  },
  {
    id: 2,
    name: 'CapitaLand Ascott Trust',
    price: 0.88,
    distributionYield: '7.51%',
    priceToBook: 0.75,
    dpu: 0.0657,
    nav: 1.16,
    propertyYield: '5.20%',
    gearingRatio: '39.50%'
  },
  {
    id: 3,
    name: 'CapitaLand China Trust',
    price: 0.67,
    distributionYield: '10.06%',
    priceToBook: 0.55,
    dpu: 0.0674,
    nav: 1.21,
    propertyYield: '5.43%',
    gearingRatio: '41.50%'
  },
  {
    id: 4,
    name: 'CapitaLand Integrated Commercial Trust',
    price: 1.99,
    distributionYield: '5.40%',
    priceToBook: 0.93,
    dpu: 0.1075,
    nav: 2.13,
    propertyYield: '4.65%',
    gearingRatio: '39.90%'
  },
  {
    id: 5,
    name: 'Mapletree Industrial Trust',
    price: 2.11,
    distributionYield: '6.36%',
    priceToBook: 1.20,
    dpu: 0.1343,
    nav: 1.76,
    propertyYield: '6.11%',
    gearingRatio: '39.00%'
  }
];

function App() {
  const [stocks, setStocks] = useState(dummyData);

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
