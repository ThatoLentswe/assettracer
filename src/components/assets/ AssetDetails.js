import React from 'react';

const AssetDetails = ({ asset }) => {
  if (!asset) {
    return <p className="text-gray-500">Select an asset to view details</p>;
  }

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">Asset Details</h2>
      <p><strong>Name:</strong> {asset.name}</p>
      <p><strong>Type:</strong> {asset.type}</p>
      <p><strong>Value:</strong> ${asset.value}</p>
    </div>
  );
};

export default AssetDetails;
