import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Asset Management Dashboard</h1>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
