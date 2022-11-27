import { Typography, Box } from "@mui/material";
import React from "react";
import { CustomImage } from "../image/Image";
import VerticalGalleryArticleList from "../lists/VerticalGalleryArticleList";
import { ImageList, ImageListItemBar, ImageListItem } from "@mui/material";
import CommentForm from "../forms/CommentForm";
import { useLocation } from "react-router-dom";
import { ArticleModel } from "../../../domain/models/ArticleModel";
import { ArticleForSaleModel } from "../../../domain/models/ArticleForSale";

export default function ArticleDetails() {
  const { state } = useLocation();

  const article = new ArticleModel(
    state.id,
    state.galleryImages,
    state.images,
    state.category,
    state.title,
    state.locationDate,
    state.shortDescription,
    state.description,
    state.comments,
    state.articlesForSale
  );

  console.log("Article inside details is " + JSON.stringify(article));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontWeight: "bold",
          fontSize: { xs: 10, sm: 11, md: 12 },
        }}
      >
        {article.category}
      </Typography>
      <Typography
        sx={{
          typography: { xs: "h5", sm: "h4", md: "h3" },
          width: { xs: "50%", sm: "35%" },
          textAlign: "center",
          mt: "2%",
        }}
      >
        {article.title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontWeight: "bold",
          fontSize: { xs: 10, sm: 11, md: 12 },
          mt: "2%",
        }}
      >
        {article.locationDate}
      </Typography>
      <GalleryImages images={article.images} />
      <Typography
        sx={{
          width: { xs: "85%", sm: "65%" },
          textAlign: "center",
          typography: "h7",
          mt: "4%",
        }}
      >
        {article.description}
      </Typography>
      <HorizontalList articlesForSale={article.articlesForSale} />
      <Box
        display={"flex"}
        flexDirection={"row"}
        sx={{
          justifyContent: "space-evenly",
          width: { xs: "90%", sm: "69%" },
          height: { xs: 230, sm: 400, md: 550, lg: 650 },
          mt: { xs: "8%", sm: "0%" },
        }}
      >
        <CustomImage src={article.images[4]} width="45%" />
        <CustomImage src={article.images[5]} width="45%" />
      </Box>
      <CustomImage src={article.images[6]} width={{ xs: "84%", sm: "65%" }} />
      <CommentForm marginTop={{ xs: "15%", sm: "5%" }} />
      <VerticalGalleryArticleList marginTop={40} loadMoreFlag={true} />
    </Box>
  );
}

function GalleryImages({ images }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      mt={"3%"}
      sx={{ width: { xs: "85%", sm: "70%" } }}
    >
      <CustomImage
        src={images[0]}
        width="100%"
        marginTop={"0%"}
        padding={"1%"}
      />
      <Box display="flex" flexDirection={"column"}>
        <CustomImage
          src={images[1]}
          width="100%"
          marginTop={"3%"}
          padding={"1%"}
        />
        <CustomImage
          src={images[2]}
          width="100%"
          marginTop={"0%"}
          padding={"1%"}
        />
        <CustomImage
          src={images[3]}
          width="100%"
          marginTop={"0%"}
          padding={"1%"}
        />
      </Box>
    </Box>
  );
}

function HorizontalList(articlesForSale) {
  const articles = articlesForSale.articlesForSale.map(
    (item) => new ArticleForSaleModel(item.id, item.img, item.title, item.url)
  );
  return (
    <ImageList
      sx={{
        overflowX: "auto",
        width: { xs: "85%", sm: "55%" },
        marginTop: { xs: "10%", sm: "7%" },
      }}
      rowHeight={250}
    >
      <ImageListItem sx={{ display: "inline-flex", flexDirection: "row" }}>
        {articles.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ paddingRight: "3em", width: 200 }}
          >
            <a href={item.url}>
              <img
                src={item.img}
                srcSet={item.img}
                loading="lazy"
                style={{ height: 210, objectFit: "contain" }}
              />
            </a>
            <ImageListItemBar
              position="below"
              subtitle={item.title}
              style={{ fontFamily: "Work Sans" }}
            />
          </ImageListItem>
        ))}
      </ImageListItem>
    </ImageList>
  );
}
