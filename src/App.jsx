import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts"; // Import Layout yang sudah diperbaiki
import Beranda from "./Pages/Beranda";
import Kontak from "./Pages/Kontak";
import Produk from "./Pages/Produk";
import Layanan from "./Pages/Layanan";
import Tentang from "./Pages/Tentang";
import HasilProduk from "./Pages/HasilProduk";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/Registerpage";
import AddProduk from "./Pages/AddProduk";
import EditProduk from "./Pages/EditProduk";
import MenuAdmin from "./Pages/MenuAdmin";
import DetailProduk from "./Pages/DetailProduk";
// import { AuthProvider } from "./Auth/AuthContext";
import PublicRoutes from "./Components/PublicRoutes";

const App = () => {
  return (

      <Router>
        <Routes>
          {/* Layout akan menangani Navbar */}
          <Route element={<Layout />}>
            {/* Public Routes */}
            <Route element={<PublicRoutes />}>
              <Route path="/" element={<Beranda />} />
              <Route path="/kontak" element={<Kontak />} />
              <Route path="/produk" element={<Produk />} />
              <Route path="/produk/:id" element={<DetailProduk />} />
              <Route path="/layanan" element={<Layanan />} />
              <Route path="/tentang" element={<Tentang />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            {/* Admin & Protected Routes */}
            <Route path="/addproduk" element={<AddProduk />} />
            <Route path="/editproduk/:id" element={<EditProduk />} />
            <Route path="/hasil" element={<HasilProduk />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<MenuAdmin />} />

            {/* 404 Page */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;
