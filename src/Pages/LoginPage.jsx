import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom"; // Tambahkan useNavigate & Link
import { loginPelanggan } from "../Redux/action/user.action";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Tambahkan state loading

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset pesan error sebelum login
    setIsLoading(true); // Tampilkan loading saat login diproses

    try {
      const pelangganLogin = {
        email: userData.email,
        password: userData.password,
      };

      // Dispatch login action dan unwrap agar error bisa ditangkap di catch
      const response = await dispatch(loginPelanggan(pelangganLogin)).unwrap();

      console.log("Login berhasil:", response);
      navigate("/admin"); // Navigasi ke halaman admin setelah login sukses
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage(
        error.response?.data?.message || "Terjadi kesalahan. Silakan coba lagi."
      );
    } finally {
      setIsLoading(false); // Matikan loading setelah login selesai (sukses/gagal)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center text-pink-500">
          Login Admin
        </h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }
              placeholder="Masukkan email"
              className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }
              placeholder="Masukkan password"
              className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-600">Belum punya akun? </span>
            <Link to="/register" className="text-pink-600 hover:underline">
              Register
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-400 text-white p-3 rounded-md mt-4 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
            disabled={isLoading} // Disable tombol saat login diproses
          >
            {isLoading ? "Sedang masuk..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
