import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/register", "/loginadmin", "/admin", "/addproduk", "/hasil", "/editproduk"];

  return (
    <>
      {!hideNavbarPaths.some((path) => location.pathname.startsWith(path)) && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
