import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-10">
      <div className="max-w-md mx-auto">
        <div className="card shadow-lg p-5">
          <h1 className="text-2xl font-bold mb-6 text-purple-700">Curiculum Vitae</h1>
          
          <div className="flex flex-col gap-4">
            <button className="btn btn-outline btn-primary w-full">
              Edit Home
            </button>
            <button className="btn btn-outline btn-secondary w-full">
              Edit Overview
            </button>
            <button className="btn btn-outline btn-accent w-full">
              Edit About Me
            </button>
            <button className="btn btn-outline btn-info w-full">
              Edit Skill & Pengalaman
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
