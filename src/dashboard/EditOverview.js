import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const initialOverviewData = {
  title: 'OVERVIEW',
  description:
    'Hai, nama saya Jelita Oktaviana. Saya adalah siswi kelas 12 di SMK Muhammadiyah 04 Sukorejo, mengambil jurusan Rekayasa Perangkat Lunak (RPL)/Pengembangan Perangkat Lunak dan Gim (PPLG). Saya memiliki minat yang mendalam dalam dunia pemrograman dan teknologi. Hobi saya adalah membaca, dan saya senang mempelajari hal-hal baru, terutama yang berkaitan dengan coding dan pengembangan aplikasi. Memilih jurusan RPL adalah keputusan yang saya ambil karena saya ingin memahami lebih dalam tentang dunia pemrograman dan bagaimana teknologi dapat digunakan untuk memecahkan masalah sehari-hari. Saat ini, saya sedang mengembangkan keterampilan saya dalam pengembangan web, terutama di bidang front-end development. Saya telah mempelajari HTML, CSS, JavaScript, dan framework seperti React. Saya percaya bahwa teknologi adalah alat yang sangat kuat untuk menciptakan perubahan positif di dunia, dan saya ingin menjadi bagian dari perubahan tersebut. Terima kasih telah mengunjungi portofolio saya. Saya berharap dapat berkolaborasi dengan Anda di masa depan!',
  imageUrl: '', // Tidak ada gambar secara default
};

const EditOverview = () => {
  const [overviewData, setOverviewData] = useState(initialOverviewData);
  const [editMode, setEditMode] = useState(false);
  const [editableOverviewData, setEditableOverviewData] = useState(overviewData);
  const [previewImage, setPreviewImage] = useState(overviewData.imageUrl);
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
      setOverviewData(editableOverviewData);
    }
  };

  const handleChange = (e, key) => {
    setEditableOverviewData({
      ...editableOverviewData,
      [key]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setEditableOverviewData({
          ...editableOverviewData,
          imageUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setOverviewData(editableOverviewData);
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
      <h1 className="text-3xl font-bold mb-4">Edit Halaman Overview</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Konten Halaman Overview</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Judul */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Judul:</label>
            {editMode ? (
              <input
                type="text"
                value={editableOverviewData.title}
                onChange={(e) => handleChange(e, 'title')}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <h2 className="text-xl">{overviewData.title}</h2>
            )}
          </div>

          {/* Deskripsi */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Deskripsi:</label>
            {editMode ? (
              <textarea
                value={editableOverviewData.description}
                onChange={(e) => handleChange(e, 'description')}
                className="border rounded px-2 py-1 w-full"
                rows="4"
              />
            ) : (
              <p>{overviewData.description}</p>
            )}
          </div>

          {/* Gambar */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Gambar:</label>
            {editMode ? (
              <>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="border rounded px-2 py-1 w-full"
                />
                {/* Pratinjau Gambar (Jika ada gambar yang diunggah) */}
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="mt-4 max-w-xs max-h-64 rounded-lg"
                  />
                )}
              </>
            ) : (
              /* Tampilkan gambar hanya jika ada URL gambar */
              overviewData.imageUrl && (
                <img
                  src={overviewData.imageUrl}
                  alt="Overview"
                  className="max-w-xs max-h-64 rounded-lg"
                />
              )
            )}
          </div>
        </div>
      </div>

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

export default EditOverview;
