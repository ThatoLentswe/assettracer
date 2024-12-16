import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-semibold mb-6">Asset Management</h2>
      <ul>
        <li><Link to="/dashboard" className="block py-2">Dashboard</Link></li>
        <li><Link to="/assets" className="block py-2">Assets</Link></li>
        <li><Link to="/inventory" className="block py-2">Inventory</Link></li>
        <li><Link to="/maintenance" className="block py-2">Maintenance</Link></li>
        <li><Link to="/reports" className="block py-2">Reports</Link></li>
        <li><Link to="/users" className="block py-2">Users</Link></li>
        <li><Link to="/profile" className="block py-2">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
