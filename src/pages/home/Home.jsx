import Intro from "./components/Intro";
import { Box } from "@mui/material";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";

const Home = () => {
  return (
    <>
      <Intro />
      <Box sx={{ height: 50 }} />
      <HorizontalArticleImgRight />
    </>
  );
};

export default Home;
