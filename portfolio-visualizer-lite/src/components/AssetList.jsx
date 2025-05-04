// This component displays the list of assets in the portfolio
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAsset, updateAsset } from '../features/assetSlice';

const AssetList = () => {
  const assets = useSelector((state) => state.assets.assets);
  const dispatch = useDispatch();

  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', ticker: '', weight: '' });

  const handleDelete = (index) => {
    dispatch(deleteAsset(index));
  }

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditForm(assets[index]);
  }

  const handleSave = () => {
    if (!editForm.name.trim() || !editForm.ticker.trim() || isNaN(parseFloat(editForm.weight))) {
      alert('All fields must be filled and weight must be a number.');
      return;
    }
    
    dispatch(updateAsset({ index: editIndex, updatedAsset: { 
      name: editForm.name.trim(), 
      ticker: editForm.ticker.trim(), 
      weight: parseFloat(editForm.weight) 
    }}));    
    setEditIndex(null);
    setEditForm({ name: '', ticker: '', weight: '' });
  }

  if (assets.length === 0) return <p>No assets added yet.</p>;
  const totalWeight = assets.reduce((sum, asset) => {
    const weight = parseFloat(asset.weight)
    return sum + (isNaN(weight) ? 0 : weight);
  }, 0);
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Asset Allocation</h2>
      <ul className="space-y-2">
        {assets.map((asset, index) => (
            <li key={index} className="flex items-center border p-2 rounded">
            {editIndex === index ? (
                <div className='flex flex-auto items-center gap-2'>
                <input
                  type="text"
                  className='border rounded p-1 w-20 flex-1'
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                />
                <input
                  type="text"
                  className='border rounded p-1 w-20 flex-1'
                  value={editForm.ticker}
                  onChange={(e) => setEditForm({ ...editForm, ticker: e.target.value })}
                />
                <input
                  type="number"
                  className='border rounded p-1 w-20 flex-1'
                  value={editForm.weight}
                  onChange={(e) => setEditForm({ ...editForm, weight: e.target.value })}
                />
                <button onClick={handleSave} className="border rounded p-1 flex-2 text-blue-600 hover:underline">Save</button>
                <button onClick={() => setEditIndex(null)} className="border rounded p-1 flex-2 text-gray-600 hover:underline">Cancel</button>
              </div>
            ) : (
                <div className='flex flex-auto items-center gap-2'>
                  <span className='flex-1'>{asset.name} ({asset.ticker}) - {asset.weight}%</span>
                  <button className="flex-2 text-blue-700 hover:underline" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="flex-2 text-red-600 text-right hover:underline" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
            )}
            </li>
        ))}
      </ul>
      {totalWeight !== 100 && (
        <p style={{ color: 'red' }}>
            ⚠️ Total weight must equal 100%. Currently at {totalWeight}%.
        </p>
    )}
    </div>
  );
};

export default AssetList;
