import React from 'react';
import DashboardCard from '../components/common/DashboardCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard title="Total Assets" count="120" />
      <DashboardCard title="Maintenance Due" count="3" />
      <DashboardCard title="Inventory Alerts" count="5" />
    </div>
  );
};

export default Dashboard;
