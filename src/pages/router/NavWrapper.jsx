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
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "1rem 2rem",
          fontSize: "20px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#0C9",
          color: "#fff",
          textAlign: "center",
          zIndex: 1,
          "&:hover": {
            cursor: "pointer",
            bgcolor: "#333333",
          },
        }}
      >
        Scroll to top
      </button>
      <Outlet></Outlet>
      <Footer marginTop={40} />
    </>
  );
};
