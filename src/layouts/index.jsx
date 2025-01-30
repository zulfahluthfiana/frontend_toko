import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/register", "/loginadmin", "/admin", "/addproduk", "/hasil", "/editproduk"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
    
    </>
  );
};

export default Layout;
