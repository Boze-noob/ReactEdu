import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../../utils/scrollToTop.js";
import NavBar from "../../components/ui/navBar/NavBar";
import Footer from "../../components/ui/footer/Footer.jsx";

export const NavWrapper = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <NavBar
        primaryColor={"black"}
        secondaryColor={location.pathname === "/" ? "white" : "black"}
      />
      <Outlet></Outlet>
      <Footer marginTop={40} />
    </>
  );
};
