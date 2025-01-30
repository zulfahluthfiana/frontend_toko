import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Beranda from "./pages/beranda";
import Kontak from "./pages/kontak";
import Produk from "./Pages/produk";
import Layanan from "./Pages/layanan";
import Tentang from "./Pages/tentang";
import HasilProduk from "./Pages/hasilproduk";
import LoginPage from "./Pages/loginpage";
import RegisterPage from "./pages/registerpage";
import AddProduk from "./Pages/addproduk";
import EditProduk from "./Pages/editproduk";
import MenuAdmin from "./Pages/MenuAdmin";
import DetailProduk from "./Pages/detailproduk";
import { AuthProvider } from "./Auth/authcontext";
import PublicRoutes from "./components/PublicRoutes";

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
