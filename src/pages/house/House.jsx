import React from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";
import HorizontalArticleImgLeft from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgLeft";
import VerticalGalleryArticleList from "../../components/ui/lists/VerticalGalleryArticleList.jsx";
import { getHomeArticles } from "../../data/repositories/ArticleRepository.js";
import { useArticleStore } from "../../stores/ArticleStore.js";
import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

export default function HousePage() {
  const articles = useArticleStore((state) => state.homeArticles);

  useEffect(() => {
    getHomeArticles();
  }, []);

  return (
    <>
      {articles.length !== 0 ? (
        <>
          <PageTitle title={"Home"} />
          <HorizontalArticleImgLeft marginTop={60} article={articles[0]} />
          <HorizontalArticleImgRight marginTop={-40} article={articles[1]} />
          <VerticalGalleryArticleList
            marginTop={40}
            loadMoreFlag={false}
            articles={articles.slice(2, 5)}
          />
          <HorizontalArticleImgLeft marginTop={60} article={articles[5]} />
          <HorizontalArticleImgRight marginTop={-40} article={articles[6]} />
          <VerticalGalleryArticleList
            marginTop={40}
            loadMoreFlag={true}
            articles={articles.filter((val, i) => {
              if (i > 6) return val;
            })}
          />
        </>
      ) : (
        <Box sx={{ height: "100vh" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
