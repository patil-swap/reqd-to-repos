import React from 'react';
import { useSelector } from 'react-redux';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const pastelColor = (i) => `hsl(${(i * 137.508) % 360}, 70%, 75%)`;

const AssetChart = () => {
  const assets = useSelector((state) => state.assets.assets);

  if (assets.length === 0) return null;

  const data = assets.map(asset => ({
    name: `${asset.name} (${asset.ticker})`,
    value: parseFloat(asset.weight),
    color: pastelColor(assets.indexOf(asset))
  }));

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Portfolio Allocation</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No data to display</p>
      ) : (
        <div className="h-80 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={pastelColor(index)} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      )}
    </div>
  );
};

export default AssetChart;
