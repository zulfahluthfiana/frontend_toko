import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Beranda from "./Pages/Beranda";
import Kontak from "./Pages/Kontak";
import Produk from "./Pages/Produk";
import Layanan from "./Pages/Layanan";
import Tentang from "./Pages/Tentang";
import HasilProduk from "./Pages/HasilProduk";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AddProduk from "./Pages/AddProduk";
import EditProduk from "./Pages/EditProduk";
import MenuAdmin from "./Pages/MenuAdmin";
import DetailProduk from "./Pages/DetailProduk";
import { AuthProvider } from "./Auth/AuthContext";
import PublicRoutes from "./Components/PublicRoutes";

const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = [
    "/login",
    "/register",
    "/loginadmin",
    "/admin",
    "/addproduk",
    "/hasil",
    "/editproduk/:id",
    "/admin",
  ];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/produk/:id" element={<DetailProduk />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/addproduk" element={<AddProduk />} />
        <Route path="/editproduk/:id" element={<EditProduk />} />
        <Route path="/hasil" element={<HasilProduk />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<MenuAdmin />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
};

export default App;
