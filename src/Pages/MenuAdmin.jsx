import NavHeader from "../Components/NavHeader";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

const MenuAdmin = () => {
  const [showLoginText, setShowLoginText] = useState(false);

  const handleIconClick = () => {
    setShowLoginText((prev) => !prev);
  };

  return (
    <>
      {/* Bagian Header dengan ikon di kanan */}
      <div className="flex justify-between items-center px-6 py-4">
        <NavHeader nav="MenuAdmin" page="Admin" pagenav1=">" page2="HalamanAdmin" />
        
        {/* Logout Menu */}
        <div className="relative">
          <FiAlignJustify
            className="cursor-pointer text-pink-500 text-3xl hover:text-pink-700 transition duration-300"
            onClick={handleIconClick}
          />
          {showLoginText && (
            <div className="absolute top-10 right-0 bg-pink shadow-lg rounded-lg">
              <Link
                to="/"
                className="block px-4 py-2 text-black text-sm font-semibold hover:bg-pink-500 hover:text-white rounded transition"
              >
                Logout Admin
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bagian Utama */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-pink-500">
          Halaman Admin
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Selamat datang di halaman Admin. Kelola data dan konfigurasi di sini.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Tombol Tambah Produk */}
          <Link
            to="/addproduk"
            className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-medium text-center shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          >
            Tambah Produk
          </Link>

          {/* Tombol Lihat Produk */}
          <Link
            to="/hasil"
            className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-medium text-center shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          >
            Lihat Produk
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuAdmin;
