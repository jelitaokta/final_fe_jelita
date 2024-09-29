import React from 'react';

const SkillPengalaman = () => {
  return (
    <div className="min-h-screen bg-[#f0e6f6] p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className="bg-pink-500 text-white p-6 rounded-t-lg">
          <h1 className="text-4xl font-extrabold text-center">Skill dan Pengalaman Saya</h1>
        </div>
        <div className="p-8">
          {/* Tabel Skill dan Pengalaman */}
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="bg-pink-300 text-[#333] text-left p-4">Skill</th>
                  <th className="bg-pink-300 text-[#333] text-left p-4">Pengalaman</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium p-4">1. HTML</td>
                  <td className="p-4">Baru mempelajari HTML</td>
                </tr>
                <tr className="bg-pink-100">
                  <td className="font-medium p-4">2. CSS</td>
                  <td className="p-4">Sedang berusaha memahami HTML dan CSS</td>
                </tr>
                <tr>
                  <td className="font-medium p-4">3. JavaScript</td>
                  <td className="p-4">Sedang mendalami materi tentang JavaScript</td>
                </tr>
                <tr className="bg-pink-100">
                  <td className="font-medium p-4">4. React</td>
                  <td className="p-4">Sedang mengembangkan keterampilan membuat web menggunakan React</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Skill yang Dikuasai */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Skill yang Saya Kuasai Saat Ini Adalah:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-purple-900">1. HTML</h3>
                  <progress className="progress progress-accent w-full" value="70" max="100"></progress>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-900">2. CSS</h3>
                  <progress className="progress progress-accent w-full" value="50" max="100"></progress>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-900">3. JavaScript</h3>
                  <progress className="progress progress-accent w-full" value="30" max="100"></progress>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-900">4. React</h3>
                  <progress className="progress progress-accent w-full" value="40" max="100"></progress>
                </div>
              </div>

              {/* Pengalaman */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-purple-900">Pengalaman Saya:</h3>
                <ul className="list-disc list-inside text-gray-800">
                  <li>Magang di sekolah</li>
                  <li>Freelance di Nusantech</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPengalaman;
