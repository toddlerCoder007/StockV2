import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container">
        <h2>Welcome to SREIT</h2>
        <p>Your trusted partner in real estate investment.</p>
        <div className="cards">
          <div className="card">
            <h3>Portfolio</h3>
            <p>Explore our diverse portfolio of properties.</p>
          </div>
          <div className="card">
            <h3>Performance</h3>
            <p>See our track record of success.</p>
          </div>
          <div className="card">
            <h3>Insights</h3>
            <p>Get the latest market insights and analysis.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
