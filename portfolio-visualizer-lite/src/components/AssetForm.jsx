// This component allows users to add a new asset to their portfolio.
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAsset } from '../features/assetSlice';

const AssetForm = () => {
  const [name, setName] = useState('');
  const [ticker, setTicker] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.assets);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !ticker.trim() || !weight.trim()) {
      setError('All fields are required.');
      return;
    }

    const isDuplicate = assets.some(
      (asset) => asset.name.trim().toLowerCase() === name.trim().toLowerCase()
    );

    if (isDuplicate) {
      setError('Asset with this name already exists.');
      return;
    }    

    const parsedWeight = parseFloat(weight);
    if (isNaN(parsedWeight) || parsedWeight <= 0) {
      setError('Weight must be a positive number.');
      return;
    }
    const currentTotal = assets.reduce((total, asset) => total + parseFloat(asset.weight), 0);
    const newTotal = currentTotal + parsedWeight;

    if (newTotal > 100) {
      setError(`Adding this asset will exceed 100% total weight. Current total: ${currentTotal}%.`);
      return;
    }

    dispatch(addAsset({ name, ticker, weight: parsedWeight }));
    setName(''); // Reset form after submit
    setTicker('');
    setWeight('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <input
        type="text"
        name="name"
        placeholder="Asset Name"
        value={name}
        required
        className="w-full p-2 border rounded"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="ticker"
        placeholder="Asset Ticker"
        value={ticker}
        required
        className="w-full p-2 border rounded"
        onChange={(e) => setTicker(e.target.value)}
      />
      <input
        type="number"
        name="weight"
        placeholder="Weight (%)"
        value={weight}
        required
        className="w-full p-2 border rounded"
        onChange={(e) => setWeight(e.target.value)}
      />
      <button type="submit"className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Add Asset
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default AssetForm;
