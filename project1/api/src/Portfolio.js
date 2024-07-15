import React from 'react';
import './Portfolio.css';

const Portfolio = ({ stocks, handleDelete }) => {
  return (
    <div className="portfolio">
      <h2>Your Portfolio</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.Name}</td>
              <td>{stock.Price !== null ? `$${stock.Price.toFixed(2)}` : 'N/A'}</td>
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
