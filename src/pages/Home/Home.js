import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div
        className="min-h-screen flex items-center justify-center text-black"
        style={{ backgroundColor: "#f0e6f6" }}
      >
        <div className="container mx-auto p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg font-semibold animate-fade-in text-purple-700">
              Haii Guys!!!
            </p>
            <h1 className="text-5xl font-bold my-4 animate-slide-in text-purple-900">
              SAYA JELITA OKTAVIANA
            </h1>
            <p className="text-xl mb-4 animate-slide-in text-gray-800">
              Haiii, Saya adalah siswi kelas 12 SMK MUHAMMADIYAH 04 SUKOREJO
              saya dari jurusan RPL/PPLG
            </p>
            <p className="text-lg text-gray-600 mb-6 animate-slide-in">
              Hobi saya adalah membaca, dan alasan saya memilih jurusan RPL
              adalah saya ingin belajar tentang dunia pemrograman
            </p>
            <Link to="/overview">
              <button
                aria-label="Hubungi Saya"
                className="bg-pink-500 text-white px-6 py-2 mt-8 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105 hover:rotate-1"
              >
                Selengkapnya
              </button>
            </Link>
          </div>
          <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
            <img
              src="/foto/tata.jpg"
              alt="Jelita Oktaviana"
              className="rounded-[50px] w-70 h-70 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
