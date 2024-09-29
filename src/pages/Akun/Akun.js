import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import md5 from "md5"; // Tambahkan ini untuk membuat hash MD5 dari email

const UserDetail = ({ label, value }) => (
  <div className="flex items-center mb-4">
    <span className="font-medium text-[#4b0082] w-32">{label}:</span>
    <span className="text-black">{value}</span>
  </div>
);

const Akun = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(false);
    setShowNotification(true);
    setTimeout(() => {
      navigate("/Home.js");
    }, 1000);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  // Ambil email untuk Gravatar dan buat URL hash MD5 dari email pengguna
  const email = "jelitaokta410@gmail.com";
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(email)}?s=200`;

  return (
    <div className="min-h-screen bg-[#f0e6f6] p-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#4b0082] to-[#7b68ee] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center">Akun Saya</h1>
      </div>

      {/* User Details Section */}
      <div className="bg-white p-8 mt-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#4b0082] mb-6">
          Informasi Profil
        </h2>
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#4b0082]">
            <img
              src={gravatarUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <UserDetail label="Nama" value="Jelita Oktaviana" />
            <UserDetail label="Alamat" value="Kebumen Jagalan" />
            <UserDetail label="Email" value={email} />
            <UserDetail label="No HP/WA" value="085198071122" />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link to="/profil">
            <button className="flex items-center bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300">
              <FaEdit className="mr-2" />
              Update Profil
            </button>
          </Link>
        </div>
      </div>

      {/* Logout Section */}
      <div className="bg-white p-8 mt-8 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <button
            onClick={handleLogoutClick}
            className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4 text-[#4b0082]">
              Konfirmasi Logout
            </h2>
            <p className="mb-4 text-black">
              Apakah Anda yakin ingin keluar dari akun Anda?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleLogout}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Iya
              </button>
              <button
                onClick={handleCancelLogout}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg animate-bounce">
          Anda telah keluar dari akun.
        </div>
      )}
    </div>
  );
};

export default Akun;
