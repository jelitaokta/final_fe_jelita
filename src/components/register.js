import React from 'react';

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-purple-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-purple-500"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-purple-500"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-purple-500"
              type="password"
              placeholder="Create a password"
            />
          </div>
          <button
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-4">
            Sudah punya akun? <a href="/login" className="text-purple-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
