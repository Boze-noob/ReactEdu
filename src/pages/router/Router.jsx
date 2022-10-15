import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home/Home";
import PoliciesPage from "../policies/Policies";
import NavBar from "../../components/ui/navBar/NavBar.jsx";
import Footer from "../../components/ui/footer/Footer.jsx";
import { HOME_ROUTE, POLICIES_ROUTE } from "./Routes.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage></HomePage>}></Route>
        <Route
          path={POLICIES_ROUTE}
          element={<PoliciesPage></PoliciesPage>}
        ></Route>
      </Routes>
      <Footer marginTop={40} />
    </BrowserRouter>
  );
};

export default Router;
