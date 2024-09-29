import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaClipboardList, FaTools } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-purple-600 w-64 p-4 h-full shadow-lg rounded-r-xl">
      <h2 className="text-white text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="list-none p-0 m-0">
        <li className="mb-2">
          <Link to="/dashboard/edit-home" className="flex items-center p-2 text-white hover:bg-purple-500 rounded-md transition duration-300">
            <FaHome className="mr-2" />
            <span>Edit Home</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/dashboard/edit-overview" className="flex items-center p-2 text-white hover:bg-purple-500 rounded-md transition duration-300">
            <FaClipboardList className="mr-2" />
            <span>Edit Overview</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/dashboard/edit-aboutme" className="flex items-center p-2 text-white hover:bg-purple-500 rounded-md transition duration-300">
            <FaUser className="mr-2" />
            <span>Edit About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/edit-skillpengalaman" className="flex items-center p-2 text-white hover:bg-purple-500 rounded-md transition duration-300">
            <FaTools className="mr-2" />
            <span>Edit Skill & Pengalaman</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
