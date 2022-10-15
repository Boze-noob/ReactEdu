import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home/Home";
import NavBar from "../../components/ui/navBar/NavBar.jsx";
import Footer from "../../components/ui/footer/Footer.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
      <Footer marginTop={40} />
    </BrowserRouter>
  );
};

export default Router;
