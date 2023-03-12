import React from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import { useEffect } from "react";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";
import HorizontalArticleImgLeft from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgLeft";
import VerticalGalleryArticleList from "../../components/ui/lists/VerticalGalleryArticleList.jsx";
import { useArticleStore } from "../../stores/ArticleStore.js";
import { getFashionArticles } from "../../data/repositories/ArticleRepository.js";
import { CircularProgress, Box } from "@mui/material";

export default function FashionPage() {
  const articles = useArticleStore((state) => state.fashionArticles);

  useEffect(() => {
    getFashionArticles();
  }, []);

  return (
    <>
      {articles.length !== 0 ? (
        <>
          <PageTitle title={"Fashion"} />
          <HorizontalArticleImgLeft marginTop={60} article={articles[1]} />
          <HorizontalArticleImgRight marginTop={-40} article={articles[2]} />
          <VerticalGalleryArticleList
            marginTop={40}
            loadMoreFlag={false}
            articles={articles.slice(3, 6)}
          />
          <HorizontalArticleImgLeft marginTop={60} article={articles[6]} />
          <HorizontalArticleImgRight marginTop={-40} article={articles[7]} />
          <VerticalGalleryArticleList
            marginTop={40}
            loadMoreFlag={true}
            articles={articles.filter((val, i) => {
              if (i > 7) return val;
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
