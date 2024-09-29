import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
  const navigate = useNavigate();

  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    name: 'Jelita Oktaviana',
    email: 'jelitaokta410@gmail.com',
    address: 'Kebumen Jagalan',
    phone: '085198071122',
  });

  // State untuk menyimpan gambar profil
  const [profileImage, setProfileImage] = useState(null);

  // State untuk menyimpan data password
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Menangani perubahan input formulir
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Menangani perubahan gambar profil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Menangani perubahan input password
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  // Menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi password
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Password baru dan konfirmasi password tidak cocok.');
      return;
    }

    // Kirim data formulir dan gambar ke server atau simpan di penyimpanan lokal
    console.log('Formulir dikirim:', formData);
    console.log('Gambar profil:', profileImage);
    console.log('Data password:', passwordData);

    // Simpan status notifikasi di sessionStorage
    sessionStorage.setItem('profileUpdateNotification', 'Perubahan telah tersimpan');

    // Arahkan ke halaman 'Akun' setelah pengiriman
    navigate('/akun');
  };

  return (
    <div className="min-h-screen bg-[#f0e6f6] p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#4b0082] text-white p-6">
          <h1 className="text-4xl font-extrabold text-center">Update Profil</h1>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Bagian Gambar Profil */}
            <div className="mb-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#4b0082] mb-4">
                <img 
                  src={profileImage || 'path-to-default-profile-image.jpg'} 
                  alt="Profil" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="mb-4"
              />
            </div>

            {/* Input Nama */}
            <div className="mb-4">
              <label className="block text-[#4b0082] font-medium mb-2">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b0082]"
                required
              />
            </div>

            {/* Input Email */}
            <div className="mb-4">
              <label className="block text-[#4b0082] font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b0082]"
                required
              />
            </div>

            {/* Input No HP */}
            <div className="mb-4">
              <label className="block text-[#4b0082] font-medium mb-2">No HP</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Masukkan nomor HP"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b0082]"
                required
              />
            </div>

            {/* Input Alamat */}
            <div className="mb-6">
              <label className="block text-[#4b0082] font-medium mb-2">Alamat</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Masukkan alamat"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b0082]"
                required
              />
            </div>

            {/* Bagian Ubah Password */}
            <div className="mb-6 border-t border-gray-300 pt-6">
              <h2 className="text-2xl font-semibold text-[#333] mb-4">Ubah Password</h2>
              <div className="mb-4">
                <label className="block text-[#4b0082] font-medium mb-2">Password Lama</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  placeholder="Masukkan password lama"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b0082]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#4b0082] font-medium mb-2">Password Baru</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Masukkan password baru"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b0082]"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#4b0082] font-medium mb-2">Konfirmasi Password Baru</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Konfirmasi password baru"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b0082]"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#4b0082] text-white py-2 px-4 rounded hover:bg-[#7b68ee] transition duration-300"
              >
                Update Profil
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profil;
