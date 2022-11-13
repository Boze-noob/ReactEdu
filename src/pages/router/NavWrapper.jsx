import { Outlet } from "react-router-dom";
import NavBar from "../../components/ui/navBar/NavBar";
import Footer from "../../components/ui/footer/Footer.jsx";

export const NavWrapper = () => {
  return (
    <>
      <NavBar primaryColor={"black"} secondaryColor={"white"} />
      <Outlet></Outlet>
      <Footer marginTop={40} />
    </>
  );
};
