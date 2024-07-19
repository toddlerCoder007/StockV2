import React, { useState } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const [stockCode, setStockCode] = useState('');
  const [dividends, setDividends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setStockCode(event.target.value);
  };

  const fetchDividends = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=DIVIDENDS&symbol=${stockCode}&apikey=5UKVS9O0PVBSM92I`);
      const data = response.data;
      
      // Extract relevant fields
      const dividendsData = data['data'];
      
      // Get current date and date from 6 months ago
      const currentDate = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
      
      // Filter dividends for the last 6 months
      const filteredDividends = dividendsData.filter(dividend => {
        const exDate = new Date(dividend.exDate);
        return exDate >= sixMonthsAgo && exDate <= currentDate;
      });

      if (filteredDividends.length === 0) {
        setError('This stock has no corporate action in the recent 6 months');
      } else {
        setDividends(filteredDividends);
      }
    } catch (err) {
      setError('Error fetching data. Please check the stock code and try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Stock Dividends Fetcher</h1>
      <input
        type="text"
        value={stockCode}
        onChange={handleInputChange}
        placeholder="Enter stock code"
      />
      <button onClick={fetchDividends} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Dividends'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {dividends.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Ex-Date</th>
              <th>Payment Amount</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {dividends.map((dividend, index) => (
              <tr key={index}>
                <td>{dividend.exDate}</td>
                <td>{dividend.paymentAmount}</td>
                <td>{dividend.paymentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserProfile;
