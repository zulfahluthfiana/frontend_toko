import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { dataProduct } from "../Redux/action/productAction";
import NavHeader from "../Components/NavHeader";

const HasilProduk = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { product } = useSelector((state) => state.productReducer);
  const [searchQuery, setSearchQuery] = useState(""); // State pencarian

  useEffect(() => {
    if (location.pathname.includes("/hasil")) {
      dispatch(dataProduct());
    }
  }, [location, dispatch]);

  const handleEdit = (product) => {
    navigate(`/editProduk/${product.id}`, { state: product });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3001/api/product/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Gagal menghapus produk dengan ID ${id}.`);
      }

      alert("Produk berhasil dihapus!");
      console.log("Menghapus produk dengan ID:", id);

      dispatch(dataProduct());
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Terjadi kesalahan saat menghapus produk. Silakan coba lagi.");
    }
  };

  // Filter produk berdasarkan query pencarian
  const filteredProducts = product.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavHeader
        nav="MenuAdmin"
        page="Admin"
        pagenav1=">"
        page2="Lihat Produk"
      />
      <div className="container mx-auto p-4">
        {/* Input pencarian */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Cari..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-80 p-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {filteredProducts && filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-md">
                <img
                  src={product.gambar}
                  alt={product.nama}
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="font-bold text-lg">{product.nama}</h3>
                <p>Harga: Rp {product.harga}</p>
                <p>Varian Rasa: {product.varianRasa}</p>
                <p>Bentuk: {product.bentuk}</p>
                <p className="text-sm mb-2">{product.deskripsi}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-pink-500 text-white py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-pink-500 text-white py-1 px-2 rounded"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Produk tidak ditemukan.</p>
        )}
      </div>
    </>
  );
};

export default HasilProduk;
