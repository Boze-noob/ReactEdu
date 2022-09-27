import Intro from "./components/Intro";
import { Box } from "@mui/material";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";
import HorizontalImgList from "../../components/ui/lists/HorizontalImgList";
import ArticleWithImgBackground from "../../components/ui/articles/ArticleWithImgBackground";
import VerticalGalleryArticleList from "../../components/ui/lists/VerticalGalleryArticleList";
import InstagramGrid from "../../components/ui/grid/InstagramGrid";

const Home = () => {
  return (
    <>
      <Intro />
      <Box sx={{ height: 50 }} />
      <HorizontalArticleImgRight />
      <HorizontalImgList
        bgColor={"#F4EADF"}
        title={"Top of the week"}
        fontFamily={"Oooh baby"}
      />
      <ArticleWithImgBackground height={0.3} width={1} />
      <VerticalGalleryArticleList />
      <InstagramGrid />
    </>
  );
};

export default Home;
