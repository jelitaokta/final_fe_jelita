import React from 'react';
import { Link } from "react-router-dom";
import './Overview.css';

const Overview = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center text-gray-800" style={{ backgroundColor: "#f0e6f6" }}> {/* Background sama dengan Home */}
      <div className="container mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in text-purple-900"> {/* Heading sama dengan Home */}
          OVERVIEW
        </h1>
        <div className="md:w-2/3 mx-auto text-center md:text-left">
          <p className="text-lg mb-4 animate-slide-in text-gray-800"> {/* Teks sama dengan Home */}
            Hai, nama saya <b> Jelita Oktaviana</b>. Saya adalah siswi kelas 12 di SMK Muhammadiyah 04 Sukorejo, mengambil jurusan Rekayasa Perangkat Lunak (RPL)/Pengembangan Perangkat Lunak dan Gim (PPLG).
          </p>
          <p className="text-lg mb-4 animate-slide-in text-gray-800">
            Saya memiliki minat yang mendalam dalam dunia pemrograman dan teknologi. Hobi saya adalah membaca, dan saya senang mempelajari hal-hal baru, terutama yang berkaitan dengan coding dan pengembangan aplikasi. Memilih jurusan RPL adalah keputusan yang saya ambil karena saya ingin memahami lebih dalam tentang dunia pemrograman dan bagaimana teknologi dapat digunakan untuk memecahkan masalah sehari-hari.
          </p>
          <p className="text-lg mb-4 animate-slide-in text-gray-800">
            Saat ini, saya sedang mengembangkan keterampilan saya dalam pengembangan web, terutama di bidang front-end development. Saya telah mempelajari HTML, CSS, JavaScript, dan framework seperti React. Saya percaya bahwa teknologi adalah alat yang sangat kuat untuk menciptakan perubahan positif di dunia, dan saya ingin menjadi bagian dari perubahan tersebut.
          </p>
          <p className="text-lg font-semibold animate-pulse text-purple-700"> {/* Teks lebih kontras */}
            Terima kasih telah mengunjungi portofolio saya. Saya berharap dapat berkolaborasi dengan Anda di masa depan!
          </p>
          <Link to="/contactme">
            <button aria-label="Hubungi Saya" className="bg-pink-500 text-white px-6 py-2 mt-8 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105 hover:rotate-1"> {/* Tombol sama dengan Home */}
              Hubungi Saya
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Overview;
