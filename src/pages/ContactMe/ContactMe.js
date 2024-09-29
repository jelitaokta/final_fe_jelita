import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center" style={{ background: "linear-gradient(135deg, #f0e6f6, #e0d0f2)" }}>
      <div className="container mx-auto bg-white bg-opacity-80 p-8 rounded-3xl shadow-2xl max-w-2xl transition transform hover:scale-105">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-900">Contact Me</h1>

        <div className="mb-8 text-center text-lg">
          <p className="mb-4">Jika Anda ingin bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya melalui form di bawah ini atau via email.</p>
          <p>Email: <a href="mailto:jelitaokta410@gmail.com" className="text-purple-700 underline hover:text-pink-500 transition duration-300">jelitaokta410@gmail.com</a></p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-purple-900 font-semibold">Nama</label>
            <input type="text" className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:border-pink-500" placeholder="Nama Anda" />
          </div>
          <div>
            <label className="block text-purple-900 font-semibold">Email</label>
            <input type="email" className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:border-pink-500" placeholder="Email Anda" />
          </div>
          <div>
            <label className="block text-purple-900 font-semibold">Pesan</label>
            <textarea className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:border-pink-500" rows="5" placeholder="Pesan Anda"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-105">Kirim Pesan</button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="mb-4 text-lg text-purple-900 font-semibold">Atau hubungi saya melalui media sosial:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/bebeqbakar" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transform transition duration-300 hover:scale-110">
              <FaInstagram size={36} style={{ color: '#6a0dad' }} />
            </a>
            <a href="https://www.linkedin.com/in/jelita oktaviana" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transform transition duration-300 hover:scale-110">
              <FaLinkedin size={36} style={{ color: '#6a0dad' }} />
            </a>
            <a href="https://www.twitter.com/sjaksjkaksk" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transform transition duration-300 hover:scale-110">
              <FaTwitter size={36} style={{ color: '#6a0dad' }} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactMe;
