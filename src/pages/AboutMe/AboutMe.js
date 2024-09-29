import React from 'react';

const Aboutme = () => {
  return (
    <div className="min-h-screen bg-[#f0e6f6] p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="bg-purple-900 text-white p-6 rounded-t-xl">
          <h1 className="text-5xl font-extrabold text-center">Biodata</h1>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Biodata */}
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold text-purple-900 mb-6">Biodata Saya</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-bold text-pink-500 w-32">Nama:</span>
                <span className="text-lg text-gray-800">Jelita Oktaviana</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-pink-500 w-32">Alamat:</span>
                <span className="text-lg text-gray-800">Kebumen Jagalan</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-pink-500 w-32">Email:</span>
                <span className="text-lg text-gray-800">jelitaokta410@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-pink-500 w-32">No HP/WA:</span>
                <span className="text-lg text-gray-800">085198071122</span>
              </div>
            </div>
          </div>

          {/* Riwayat Pendidikan */}
          <div className="space-y-4 border-l-4 border-pink-500 pl-6">
            <h2 className="text-4xl font-semibold text-purple-900 mb-6">Riwayat Pendidikan</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-bold text-pink-500 w-32">SD:</span>
                <span className="text-lg text-gray-800">SD Muhammadiyah Sukorejo</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-pink-500 w-32">SMP:</span>
                <span className="text-lg text-gray-800">SMP Muhammadiyah 04 Sukorejo</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-pink-500 w-32">SMK:</span>
                <span className="text-lg text-gray-800">SMK Muhammadiyah 04 Sukorejo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
