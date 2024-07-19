import React, { useState } from 'react';

const AddStock = ({ handleAdd }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = { Name: name, Symbol: symbol };
    handleAdd(newStock);
    setName('');
    setSymbol('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Symbol:</label>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
      </div>
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default AddStock;
