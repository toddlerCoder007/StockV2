import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = ({ stocks, handleDelete }) => {
  const [sortedStocks, setSortedStocks] = useState(stocks);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortArray = (key, direction) => {
    let sortedArray = [...stocks];
    if (direction === 'ascending') {
      sortedArray.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    } else {
      sortedArray.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    }
    setSortedStocks(sortedArray);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    sortArray(key, direction);
  };

  return (
    <div className="portfolio">
      <h2>Your Portfolio</h2>
      <table>
        <thead>
          <tr>
            <th>
              Name
              <button onClick={() => handleSort('Name')}>Sort</button>
            </th>
            <th>
              Price
              <button onClick={() => handleSort('Price')}>Sort</button>
            </th>
            <th>
              Distribution Yield
              <button onClick={() => handleSort('Distribution Yield')}>Sort</button>
            </th>
            <th>Price to Book</th>
            <th>DPU</th>
            <th>NAV</th>
            <th>Property Yield</th>
            <th>Gearing Ratio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedStocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.Name}</td>
              <td>{stock.Price}</td>
              <td>{stock['Distribution Yield']}</td>
              <td>{stock['Price to Book']}</td>
              <td>{stock.DPU}</td>
              <td>{stock.NAV}</td>
              <td>{stock['Property Yield']}</td>
              <td>{stock['Gearing Ratio*']}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
