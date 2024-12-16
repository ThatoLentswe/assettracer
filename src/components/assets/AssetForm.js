import React, { useState } from 'react';
import { createAsset, updateAsset } from '../../services/assetService';

const AssetForm = ({ asset, onSuccess }) => {
  const [formData, setFormData] = useState(asset || { name: '', type: '', value: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (asset) {
      await updateAsset(asset.id, formData);
    } else {
      await createAsset(formData);
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block">Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block">Value</label>
        <input
          type="number"
          name="value"
          value={formData.value}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {asset ? 'Update' : 'Create'} Asset
      </button>
    </form>
  );
};

export default AssetForm;
