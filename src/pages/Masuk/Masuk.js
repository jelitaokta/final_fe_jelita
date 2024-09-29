import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Masuk = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulasi autentikasi sederhana
    if (email === 'jelita@gmail.com' && password === 'password123') {
      onLogin(); // Memanggil fungsi onLogin untuk set status login
      navigate('/dashboard'); // Redirect ke halaman dashboard
    } else {
      alert('Email atau password salah!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full bg-purple-500">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Belum punya akun?{' '}
          <Link to="/register" className="text-purple-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Masuk;
