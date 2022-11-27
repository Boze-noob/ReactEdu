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
import { NavWrapper } from "./NavWrapper";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  POLICIES_ROUTE,
  SHOPPE_ROUTE,
  FASHION_ROUTE,
  BEAUTY_ROUTE,
  LIFESTYLE_ROUTE,
  COLLAGES_ROUTE,
  HOUSE_ROUTE,
  ARTICLE_DETAIL_ROUTE,
} from "./Routes.jsx";
import LifestylePage from "../lifestyle/Lifestyle";
import ArticleDetails from "../../components/ui/articles/ArticleDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavWrapper></NavWrapper>}>
          <Route index element={<HomePage></HomePage>}></Route>
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
          <Route
            path={BEAUTY_ROUTE}
            element={<BeautyPage></BeautyPage>}
          ></Route>
          <Route
            path={LIFESTYLE_ROUTE}
            element={<LifestylePage></LifestylePage>}
          ></Route>
          <Route
            path={COLLAGES_ROUTE}
            element={<CollagesPage></CollagesPage>}
          ></Route>
          <Route path={HOUSE_ROUTE} element={<HousePage></HousePage>}></Route>
          <Route
            path={SHOPPE_ROUTE}
            element={<ShoppePage></ShoppePage>}
          ></Route>
          <Route
            path={ARTICLE_DETAIL_ROUTE}
            element={<ArticleDetails></ArticleDetails>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
