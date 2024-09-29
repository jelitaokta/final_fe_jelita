import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const initialHomeData = {
  title: "Hai Guys!!! SAYA JELITA OKTAVIANA",
  description:
    "Haiii, Saya adalah siswi kelas 12 SMK MUHAMMADIYAH 04 SUKOREJO saya dari jurusan RPL/PPLG Hobi saya adalah membaca, dan alasan saya memilih jurusan RPL adalah saya ingin belajar tentang dunia pemrograman",
  imageUrl: "/foto/tata.jpg", // Placeholder untuk gambar awal
};

const EditHome = () => {
  const [homeData, setHomeData] = useState(initialHomeData);
  const [editMode, setEditMode] = useState(false);
  const [editableHomeData, setEditableHomeData] = useState(homeData);
  const [previewImage, setPreviewImage] = useState(homeData.imageUrl);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEditClick = () => {
    const newEditMode = !editMode;
    setEditMode(newEditMode);
    if (newEditMode) {
      navigate(`${location.pathname}?edit`, { replace: true });
    } else {
      navigate(location.pathname, { replace: true });
      setHomeData(editableHomeData);
    }
  };

  const handleChange = (e, key) => {
    setEditableHomeData({
      ...editableHomeData,
      [key]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Set preview image to base64
        setEditableHomeData({
          ...editableHomeData,
          imageUrl: reader.result, // Simpan gambar ke dalam editableHomeData
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setHomeData(editableHomeData);
    setEditMode(false);
    navigate(location.pathname, { replace: true });
  };

  const handleBackClick = () => {
    if (
      editMode &&
      !window.confirm("Perubahan belum disimpan. Yakin ingin kembali?")
    ) {
      return;
    }
    navigate("/");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Edit Halaman Home</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Konten Halaman Home</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Judul */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Judul:</label>
            {editMode ? (
              <input
                type="text"
                value={editableHomeData.title}
                onChange={(e) => handleChange(e, "title")}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <h2 className="text-xl">{homeData.title}</h2>
            )}
          </div>

          {/* Deskripsi */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Deskripsi:</label>
            {editMode ? (
              <textarea
                value={editableHomeData.description}
                onChange={(e) => handleChange(e, "description")}
                className="border rounded px-2 py-1 w-full"
                rows="4"
              />
            ) : (
              <p>{homeData.description}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Gambar:</label>
            {editMode ? (
              <input
                type="file"
                onChange={handleImageChange}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <img
                src={homeData.imageUrl}
                alt="Home"
                className="max-w-xs max-h-64 rounded-lg"
              />
            )}
            {editMode && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-4 max-w-xs max-h-64 rounded-lg"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button onClick={editMode ? handleSave : handleEditClick} className="btn btn-primary">
          {editMode ? "Simpan" : "Edit"}
        </button>
        <button onClick={handleBackClick} className="btn btn-secondary">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default EditHome;
