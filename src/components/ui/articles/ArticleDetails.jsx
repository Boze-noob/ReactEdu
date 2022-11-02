import { Typography, Box } from "@mui/material";
import React from "react";
import { CustomImage } from "../image/Image";
import { Comments } from "../comments/Comments";
import VerticalGalleryArticleList from "../../components/ui/lists/VerticalGalleryArticleList";

export default function ArticleDetails() {
  return (
    <>
      <Typography sx={{ fontFamily: "Work Sans" }}>FASHION</Typography>
      <Typography>CUTE SUMMER TO FALL TRANSITIONAL OUTFIT!</Typography>
      <Typography sx={{ fontFamily: "Work Sans" }}>
        PARIS, FRANCE - OCTOBER 11
      </Typography>
      <GalleryImages />
      <Typography>Desctiption</Typography>
      <HorizontalList />
      <Box display={"flex"} flexDirection={"row"}>
        <CustomImage />
        <CustomImage />
      </Box>
      <CustomImage />
      <Comments />
      <VerticalGalleryArticleList marginTop={40} loadMoreFlag={true} />
    </>
  );
}

function GalleryImages() {
  return (
    <Box display="flex" flexDirection="row">
      <CustomImage />
      <Box display="flex" flexDirection={"column"}>
        <CustomImage />
        <CustomImage />
        <CustomImage />
      </Box>
    </Box>
  );
}

function HorizontalList() {
  const itemData = [
    {
      img: "https://img.shopstyle-cdn.com/sim/bd/de/bdde293e0389975344fc8677dd7e13f0_best/shayla-mini-dress.jpg",
      title: "SHAYKA MINI DRESS",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/2f/f8/2ff8464a2edc0ef4cd0238479887ef0f_best/polka-dot-crepe-minidress.jpg",
      title: "SAINT LAURENT",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/89/6f/896fc603c8c9ad3934d8732ef1a83296_best/halpern-shape-shifter-polka-dot-cotton-mini-dress.jpg",
      title: "HALPERN",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/b7/c4/b7c4b66629795afb665ca5f71b64256b_best/saloni-jamie-short-dress.jpg",
      title: "SALONI",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/9b/03/9b03a13fa019dfae8701146be550ab6e_best/saskia-dress.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/cf/fb/cffb786efcdf941bc270aea04bdb5c46_best/rococo-sand-vega-short-dress.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/f9/b0/f9b0a0bf0dcfacefc9c1d15a6a2d2278_best/kenia05-dress.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/15/93/15936a148923129869a04091e705efd7_best/hoop-pendant-earrings.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/fb/c3/fbc36cc6fb8b4d2039648e1882bed869_best/taner-mini-huggies.jpg",
      title: "Title",
      author: "Author",
    },
  ];
  return (
    <ImageList
      sx={{ overflowX: "auto", width: { xs: 300, sm: 500 }, marginTop: 40 }}
      rowHeight={250}
    >
      <ImageListItem sx={{ display: "inline-flex", flexDirection: "row" }}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ paddingRight: "3em", width: 200 }}
          >
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.author}
              loading="lazy"
              style={{ height: 210, objectFit: "contain" }}
            />
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
