import Intro from "./components/Intro";
import { Box } from "@mui/material";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";
import HorizontalList from "../../components/ui/lists/HorizontalList";

const Home = () => {
  return (
    <>
      <Intro />
      <Box sx={{ height: 50 }} />
      <HorizontalArticleImgRight />
      <HorizontalList
        width={"100%"}
        bgColor={"#f4c2c2"}
        title={"Top of the week"}
        fontFamily={"Marck Script"}
      />
    </>
  );
};

export default Home;
