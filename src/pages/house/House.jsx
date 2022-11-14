import React from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import NavBar from "../../components/ui/navBar/NavBar.jsx";
import HorizontalArticleImgRight from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgRight";
import HorizontalArticleImgLeft from "../../components/ui/articles/horizontalArticles/HorizontalArticleImgLeft";
import VerticalGalleryArticleList from "../../components/ui/lists/VerticalGalleryArticleList.jsx";

export default function HousePage() {
  return (
    <>
      <PageTitle title={"Home"} />
      <HorizontalArticleImgLeft marginTop={60} />
      <HorizontalArticleImgRight marginTop={-40} />
      <VerticalGalleryArticleList marginTop={40} loadMoreFlag={false} />
      <HorizontalArticleImgLeft marginTop={60} />
      <HorizontalArticleImgRight marginTop={-40} />
      <VerticalGalleryArticleList marginTop={40} loadMoreFlag={true} />
    </>
  );
}
