import React from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import { useEffect } from "react";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";
import HorizontalArticleImgLeft from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgLeft";
import VerticalGalleryArticleList from "../../components/ui/lists/VerticalGalleryArticleList.jsx";
import { useArticleStore } from "../../stores/ArticleStore.js";
import { getArticles } from "../../data/repositories/ArticleRepository.js";

export default function FashionPage() {
  const articles = useArticleStore((state) => state.articles);

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <PageTitle title={"Fashion"} />
      <HorizontalArticleImgLeft marginTop={60} article={articles[0]} />
      <HorizontalArticleImgRight marginTop={-40} article={articles[0]} />
      <VerticalGalleryArticleList marginTop={40} loadMoreFlag={false} />
      <HorizontalArticleImgLeft marginTop={60} article={articles[0]} />
      <HorizontalArticleImgRight marginTop={-40} article={articles[0]} />
      <VerticalGalleryArticleList marginTop={40} loadMoreFlag={true} />
    </>
  );
}
