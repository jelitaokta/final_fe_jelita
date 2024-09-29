import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const initialData = {
  biodata: {
    Nama: 'Jelita Oktaviana',
    Alamat: 'Kebumen Jagalan',
    Email: 'jelitaokta410@gmail.com',
    NoHP: '085198071122',
  },
  pendidikan: {
    SD: 'SD Muhammadiyah Sukorejo',
    SMP: 'SMP Muhammadiyah 04 Sukorejo',
    SMK: 'SMK Muhammadiyah 04 Sukorejo',
  },
};

const AboutMe = () => {
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [editableData, setEditableData] = useState(data);
  const [newEducation, setNewEducation] = useState({ key: '', value: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const handleEditClick = () => {
    const newEditMode = !editMode;
    setEditMode(newEditMode);

    // Ubah URL ketika masuk atau keluar dari mode edit
    if (newEditMode) {
      navigate(`${location.pathname}?edit=true`, { replace: true });
    } else {
      navigate(location.pathname, { replace: true });
      setData(editableData);
    }
  };

  const handleChange = (e, section, key) => {
    setEditableData({
      ...editableData,
      [section]: {
        ...editableData[section],
        [key]: e.target.value,
      },
    });
  };

  const handleNewEducationChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEducation = () => {
    if (newEducation.key.trim() && newEducation.value.trim()) {
      const updatedEducation = {
        ...editableData.pendidikan,
        [newEducation.key]: newEducation.value,
      };
      // Menambahkan pendidikan baru di bawah SMK
      const orderEducation = {
        ...updatedEducation,
        SMK: updatedEducation.SMk, // Memastikan SMK tetap di posisi yang diinginkan
      };
      setEditableData({
        ...editableData,
        pendidikan: orderEducation,
      });
      setNewEducation({ key: '', value: '' });
    } else {
      alert('Mohon isi semua kolom untuk menambah pendidikan.');
    }
  };

  const handleSave = () => {
    setData(editableData);
    setEditMode(false);
    navigate(location.pathname, { replace: true }); // Kembali ke URL tanpa query parameter
  };

  const handleBackClick = () => {
    if (editMode && !window.confirm('Perubahan belum disimpan. Yakin ingin kembali?')) {
      return;
    }
    navigate('/');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      {/* Biodata Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Biodata</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-left">Field</th>
                <th className="text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data.biodata).map((key) => (
                <tr key={key}>
                  <td className="font-semibold">{key}</td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editableData.biodata[key]}
                        onChange={(e) => handleChange(e, 'biodata', key)}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      data.biodata[key]
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pendidikan Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pendidikan</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-left">Field</th>
                <th className="text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(editableData.pendidikan).map((key) => (
                <tr key={key}>
                  <td className="font-semibold">{key}</td>
                  <td>
                    {editMode ? (
                      <input
                        type="text"
                        value={editableData.pendidikan[key]}
                        onChange={(e) => handleChange(e, 'pendidikan', key)}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      editableData.pendidikan[key] // Menggunakan editableData
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Form Tambah Pendidikan */}
        {editMode && (
          <div className="mt-4">
            <input
              type="text"
              name="key"
              placeholder="Nama Pendidikan (contoh: Universitas)"
              value={newEducation.key}
              onChange={handleNewEducationChange}
              className="border rounded px-2 py-1 w-full mb-2"
            />
            <input
              type="text"
              name="value"
              placeholder="Detail Pendidikan (contoh: Universitas Indonesia)"
              value={newEducation.value}
              onChange={handleNewEducationChange}
              className="border rounded px-2 py-1 w-full mb-2"
            />
            <button onClick={handleAddEducation} className="btn btn-secondary">
              Tambah Pendidikan
            </button>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button onClick={editMode ? handleSave : handleEditClick} className="btn btn-primary">
          {editMode ? 'Simpan' : 'Edit'}
        </button>
        <button onClick={handleBackClick} className="btn btn-secondary">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
