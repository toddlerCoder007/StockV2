import React, { useState } from 'react';

const AddStock = ({ handleAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [distributionYield, setDistributionYield] = useState('');
  const [priceToBook, setPriceToBook] = useState('');
  const [dpu, setDpu] = useState('');
  const [nav, setNav] = useState('');
  const [propertyYield, setPropertyYield] = useState('');
  const [gearingRatio, setGearingRatio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      Name: name,
      Price: parseFloat(price),
      'Distribution Yield': distributionYield,
      'Price to Book': parseFloat(priceToBook),
      DPU: parseFloat(dpu),
      NAV: parseFloat(nav),
      'Property Yield': propertyYield,
      'Gearing Ratio*': gearingRatio
    };
    handleAdd(newStock);
    setName('');
    setPrice('');
    setDistributionYield('');
    setPriceToBook('');
    setDpu('');
    setNav('');
    setPropertyYield('');
    setGearingRatio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Distribution Yield:</label>
        <input type="text" value={distributionYield} onChange={(e) => setDistributionYield(e.target.value)} required />
      </div>
      <div>
        <label>Price to Book:</label>
        <input type="number" value={priceToBook} onChange={(e) => setPriceToBook(e.target.value)} required />
      </div>
      <div>
        <label>DPU:</label>
        <input type="number" value={dpu} onChange={(e) => setDpu(e.target.value)} required />
      </div>
      <div>
        <label>NAV:</label>
        <input type="number" value={nav} onChange={(e) => setNav(e.target.value)} required />
      </div>
      <div>
        <label>Property Yield:</label>
        <input type="text" value={propertyYield} onChange={(e) => setPropertyYield(e.target.value)} required />
      </div>
      <div>
        <label>Gearing Ratio:</label>
        <input type="text" value={gearingRatio} onChange={(e) => setGearingRatio(e.target.value)} required />
      </div>
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default AddStock;
