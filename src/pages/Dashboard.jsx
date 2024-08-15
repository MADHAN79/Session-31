// src/components/Layout/DashboardLayout.jsx
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="w-full md:w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold">Library Dashboard</h2>
        <nav className="mt-4">
          <ul>
            <li className="my-2">Books</li>
            <li className="my-2">Authors</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
