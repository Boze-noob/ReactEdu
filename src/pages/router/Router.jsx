import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home/Home";
import ContactPage from "../contact/Contact";
import HousePage from "../house/House";
import PoliciesPage from "../policies/Policies";
import AboutPage from "../about/About";
import ShoppePage from "../shoppe/Shoppe";
import FashionPage from "../fashion/Fashion";
import BeautyPage from "../beauty/Beauty";
import CollagesPage from "../collages/Collages";
import Footer from "../../components/ui/footer/Footer.jsx";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  POLICIES_ROUTE,
  SHOPPE_ROUTE,
  FASHION_ROUTE,
  BEAUTY_ROUTE,
  LIFESTYLE_ROUTE,
  COLLAGES_ROUTE,
  HOUSE_ROUTE,
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
        <Route
          path={FASHION_ROUTE}
          element={<FashionPage></FashionPage>}
        ></Route>
        <Route path={BEAUTY_ROUTE} element={<BeautyPage></BeautyPage>}></Route>
        <Route
          path={LIFESTYLE_ROUTE}
          element={<LIFESTYLE_ROUTE></LIFESTYLE_ROUTE>}
        ></Route>
        <Route
          path={COLLAGES_ROUTE}
          element={<CollagesPage></CollagesPage>}
        ></Route>
        <Route path={HOUSE_ROUTE} element={<HousePage></HousePage>}></Route>
        <Route path={SHOPPE_ROUTE} element={<ShoppePage></ShoppePage>}></Route>
      </Routes>
      <Footer marginTop={40} />
    </BrowserRouter>
  );
};

export default Router;
