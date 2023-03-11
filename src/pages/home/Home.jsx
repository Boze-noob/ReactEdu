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
  //TODO add them instead of articles to horizontal list
  const highlistOfWeek = null;
  const myStyle = null;

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
        <HorizontalImgList
          title={"Highlists of the Week"}
          marginTop={60}
          articles={articles.slice(3, 10)}
        />
        <HorizontalArticleImgLeft marginTop={60} article={articles[10]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[11]} />
        <ArticleWithImgBackground marginTop={40} article={articles[12]} />
        <HorizontalArticleImgLeft marginTop={60} article={articles[13]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[14]} />
        <HorizontalTwoImgArticle
          marginTop={60}
          articles={articles.slice(14, 16)}
        />
        <HorizontalArticleImgLeft marginTop={60} article={articles[16]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[17]} />
        <HorizontalImgList
          title={"My Style"}
          marginTop={60}
          articles={articles.slice(17, 23)}
        />
        <HorizontalArticleImgLeft marginTop={60} article={articles[23]} />
        <HorizontalArticleImgRight marginTop={-40} article={articles[24]} />
        <VerticalGalleryArticleList
          marginTop={40}
          loadMoreFlag={true}
          articles={articles.filter((val, i) => {
            if (i > 24) return val;
          })}
        />
      </>
    );
  }
};

export default Home;
