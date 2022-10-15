import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home/Home";
import NavBar from "../../components/ui/navBar/NavBar.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
