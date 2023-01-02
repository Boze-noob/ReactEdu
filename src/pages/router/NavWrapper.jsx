import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../../utils/scrollToTop.js";
import NavBar from "../../components/ui/navBar/NavBar";
import Footer from "../../components/ui/footer/Footer.jsx";
import { ScrollBtn } from "../../components/ui/buttons/ScrollBtn.jsx";
import { useState } from "react";

export const NavWrapper = () => {
  const location = useLocation();
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset < 250 && showScrollBtn == true)
      setShowScrollBtn(false);
    else if (window.pageYOffset > 250 && showScrollBtn == false)
      setShowScrollBtn(true);
  });

  return (
    <>
      <ScrollToTop />
      <NavBar
        primaryColor={"black"}
        secondaryColor={location.pathname === "/" ? "white" : "black"}
      />
      {showScrollBtn && (
        <ScrollBtn
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        />
      )}

      <Outlet></Outlet>
      <Footer marginTop={40} />
    </>
  );
};
