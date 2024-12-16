import React from 'react';

const DashboardCard = ({ title, count }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-4xl font-bold text-blue-600">{count}</p>
    </div>
  );
};

export default DashboardCard;
