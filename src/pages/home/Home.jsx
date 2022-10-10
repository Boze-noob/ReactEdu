import Intro from "./components/Intro";
import { Box } from "@mui/material";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";
import HorizontalImgList from "../../components/ui/lists/HorizontalImgList";
import ArticleWithImgBackground from "../../components/ui/articles/ArticleWithImgBackground";
import VerticalGalleryArticleList from "../../components/ui/lists/VerticalGalleryArticleList";
import Footer from "../../components/ui/footer/Footer";
import HorizontalArticleImgLeft from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgLeft";
import HorizontalTwoImgArticle from "../../components/ui/articles/horizontalArticles/HorizontalTwoImgArticle";

const Home = () => {
  return (
    <>
      <Intro />
      <HorizontalArticleImgLeft marginTop={60} />
      <HorizontalArticleImgRight marginTop={-40} />
      <HorizontalImgList title={"Highlists of the Week"} marginTop={60} />
      <HorizontalArticleImgLeft marginTop={60} />
      <HorizontalArticleImgRight marginTop={-40} />
      <ArticleWithImgBackground marginTop={40} />
      <HorizontalArticleImgLeft marginTop={60} />
      <HorizontalArticleImgRight marginTop={-40} />
      <HorizontalTwoImgArticle marginTop={60} />
      <HorizontalArticleImgLeft marginTop={60} />
      <HorizontalArticleImgRight marginTop={-40} />
      <HorizontalImgList title={"My Style"} marginTop={60} />
      <HorizontalArticleImgLeft marginTop={60} />
      <HorizontalArticleImgRight marginTop={-40} />
      <VerticalGalleryArticleList marginTop={40} />
      <Footer marginTop={40} />
    </>
  );
};

export default Home;
