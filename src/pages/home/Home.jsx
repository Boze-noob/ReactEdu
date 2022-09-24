import Intro from "./components/Intro";
import { Box } from "@mui/material";
import HorizontalArticleImgLeft from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgLeft";

const Home = () => {
  return (
    <>
      <Intro />
      <Box sx={{ height: 50 }} />
      <HorizontalArticleImgLeft />
    </>
  );
};

export default Home;
