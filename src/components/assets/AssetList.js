import React, { useEffect, useState } from 'react';
import { getAssets } from '../../services/assetService';

const AssetList = ({ onSelect }) => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const data = await getAssets();
      setAssets(data);
    };
    fetchAssets();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">Asset List</h2>
      <ul>
        {assets.map((asset) => (
          <li
            key={asset.id}
            className="border p-2 mb-2 cursor-pointer"
            onClick={() => onSelect(asset)}
          >
            {asset.name} - {asset.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;
