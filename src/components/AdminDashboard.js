import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f0e6f6" }}>
      {/* Sidebar */}
      <div className="bg-purple-900 text-white w-1/4 p-6">
        <h1 className="text-2xl font-bold mb-6">Curiculum Vitae</h1>
        <ul>
          <li className="mb-4">
            <a href="#" className="hover:text-pink-300">
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-pink-300">
              Portofolio
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-pink-300">
              Blog
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-pink-300">
              Galeri
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-pink-300">
              Pengaturan
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-pink-300">
              Profil
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 bg-white">
        <div className="bg-pink-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold">Portofolio Admin</h2>
          <p>Jelita Oktaviana</p>
          <button className="btn btn-primary mt-4 bg-purple-900 hover:bg-purple-700">
            Logout
          </button>
        </div>

        {/* Statistik Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Statistik</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-900 text-white p-4 rounded-lg">
              Tautan Dukungan
            </div>
            <div className="bg-purple-900 text-white p-4 rounded-lg">
              Kebijakan Privasi
            </div>
            <div className="bg-purple-900 text-white p-4 rounded-lg">
              Kontak
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
