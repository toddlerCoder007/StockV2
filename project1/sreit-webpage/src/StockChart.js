import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockChart = ({ data }) => {
  const formatData = (data) => {
    return Object.keys(data).map((date) => ({
      date,
      close: parseFloat(data[date]['4. close']),
    }));
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={formatData(data)}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
