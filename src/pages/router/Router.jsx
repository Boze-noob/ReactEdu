import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home/Home";
import ContactPage from "../contact/Contact";
import PoliciesPage from "../policies/Policies";
import AboutPage from "../about/About";
import Footer from "../../components/ui/footer/Footer.jsx";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  POLICIES_ROUTE,
} from "./Routes.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage></HomePage>}></Route>
        <Route
          path={POLICIES_ROUTE}
          element={<PoliciesPage></PoliciesPage>}
        ></Route>
        <Route
          path={CONTACT_ROUTE}
          element={<ContactPage></ContactPage>}
        ></Route>
        <Route path={ABOUT_ROUTE} element={<AboutPage></AboutPage>}></Route>
      </Routes>
      <Footer marginTop={40} />
    </BrowserRouter>
  );
};

export default Router;
