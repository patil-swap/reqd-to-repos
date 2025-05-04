import React from 'react';
import AssetForm from '../components/AssetForm';
import AssetList from '../components/AssetList';
import AssetChart from '../components/AssetChart';

const Home = () => {
  return (
    <div className="min-h-screen text-gray-800 p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Portfolio Visualizer</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <div>
          <AssetForm />
          <AssetList />
        </div>
        <div className='items-center justify-center'>
          <AssetChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
