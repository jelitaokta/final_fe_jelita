import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const initialData = {
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  pengalaman: [
    { posisi: 'Frontend Developer', perusahaan: 'Nusantech' },
    { posisi: 'Magang Software Engineer', perusahaan: 'SMK Muhammadiyah 04' },
  ],
};

const EditSkillPengalaman = () => {
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [editableData, setEditableData] = useState(data);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEditClick = () => {
    const newEditMode = !editMode;
    setEditMode(newEditMode);

    // Mengubah URL saat masuk atau keluar dari mode edit
    if (newEditMode) {
      navigate(`${location.pathname}?edit=true`, { replace: true });
    } else {
      navigate(location.pathname, { replace: true });
      setData(editableData);
    }
  };

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...editableData.skills];
    updatedSkills[index] = e.target.value;
    setEditableData({ ...editableData, skills: updatedSkills });
  };

  const handleAddSkill = () => {
    setEditableData({
      ...editableData,
      skills: [...editableData.skills, newSkill],
    });
    setNewSkill('');
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = editableData.skills.filter((_, i) => i !== index);
    setEditableData({ ...editableData, skills: updatedSkills });
  };

  const handlePengalamanChange = (e, index, key) => {
    const updatedPengalaman = [...editableData.pengalaman];
    updatedPengalaman[index] = { ...updatedPengalaman[index], [key]: e.target.value };
    setEditableData({ ...editableData, pengalaman: updatedPengalaman });
  };

  const handleAddPengalaman = () => {
    setEditableData({
      ...editableData,
      pengalaman: [...editableData.pengalaman, { posisi: '', perusahaan: '' }],
    });
  };

  const handleDeletePengalaman = (index) => {
    const updatedPengalaman = editableData.pengalaman.filter((_, i) => i !== index);
    setEditableData({ ...editableData, pengalaman: updatedPengalaman });
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
      <h1 className="text-3xl font-bold mb-6">Edit Skill dan Pengalaman</h1>

      {/* Skill Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skill</h2>
        <div className="space-y-4">
          {editableData.skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(e, index)}
                    className="border rounded px-2 py-1 w-full"
                  />
                  <button
                    onClick={() => handleDeleteSkill(index)}
                    className="btn btn-error"
                  >
                    Hapus
                  </button>
                </>
              ) : (
                <p className="text-lg">{skill}</p>
              )}
            </div>
          ))}

          {editMode && (
            <div className="flex space-x-4">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                placeholder="Tambahkan skill baru"
              />
              <button onClick={handleAddSkill} className="btn btn-primary">
                Tambah Skill
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Pengalaman Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pengalaman</h2>
        <div className="space-y-4">
          {editableData.pengalaman.map((pengalaman, index) => (
            <div key={index} className="space-y-2">
              {editMode ? (
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    value={pengalaman.posisi}
                    onChange={(e) => handlePengalamanChange(e, index, 'posisi')}
                    className="border rounded px-2 py-1"
                    placeholder="Posisi"
                  />
                  <input
                    type="text"
                    value={pengalaman.perusahaan}
                    onChange={(e) => handlePengalamanChange(e, index, 'perusahaan')}
                    className="border rounded px-2 py-1"
                    placeholder="Perusahaan"
                  />
                  <button
                    onClick={() => handleDeletePengalaman(index)}
                    className="btn btn-error mt-2"
                  >
                    Hapus
                  </button>
                </div>
              ) : (
                <p className="text-lg">
                  {pengalaman.posisi} di {pengalaman.perusahaan}
                </p>
              )}
            </div>
          ))}

          {editMode && (
            <button onClick={handleAddPengalaman} className="btn btn-primary mt-4">
              Tambah Pengalaman
            </button>
          )}
        </div>
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

export default EditSkillPengalaman;
