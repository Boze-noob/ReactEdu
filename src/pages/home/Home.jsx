import { useEffect } from "react";
import Intro from "./components/Intro";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";
import HorizontalImgList from "../../components/ui/lists/HorizontalImgList";
import ArticleWithImgBackground from "../../components/ui/articles/ArticleWithImgBackground";
import VerticalGalleryArticleList from "../../components/ui/lists/VerticalGalleryArticleList";
import HorizontalArticleImgLeft from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgLeft";
import HorizontalTwoImgArticle from "../../components/ui/articles/horizontalArticles/HorizontalTwoImgArticle";
import { useArticleStore } from "../../stores/ArticleStore";
import { Typography } from "@mui/material";
import { getArticles } from "../../data/repositories/ArticleRepository";

const Home = () => {
  const isLoading = useArticleStore((state) => state.isLoading);
  const articles = useArticleStore((state) => state.articles);

  useEffect(() => {
    getArticles();
  }, []);

  if (isLoading) {
    return (
      <>
        <Typography variant="h1">Loading....</Typography>
      </>
    );
  } else {
    return (
      <>
        <Intro articleModel={articles[0]} />
        <HorizontalArticleImgLeft marginTop={60} article={articles[1]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[2]} />
        <HorizontalImgList title={"Highlists of the Week"} marginTop={60} />
        <HorizontalArticleImgLeft marginTop={60} article={articles[3]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[4]} />
        <ArticleWithImgBackground marginTop={40} />
        <HorizontalArticleImgLeft marginTop={60} article={articles[5]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[6]} />
        <HorizontalTwoImgArticle marginTop={60} />
        <HorizontalArticleImgLeft marginTop={60} article={articles[7]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[8]} />
        <HorizontalImgList title={"My Style"} marginTop={60} />
        <HorizontalArticleImgLeft marginTop={60} article={articles[9]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[10]} />
        <VerticalGalleryArticleList
          marginTop={40}
          loadMoreFlag={true}
          articles={articles.filter((val, i) => {
            if (i > 10) return val;
          })}
        />
      </>
    );
  }
};

export default Home;
