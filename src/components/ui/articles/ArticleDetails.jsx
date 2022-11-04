import { Typography, Box } from "@mui/material";
import React from "react";
import { CustomImage } from "../image/Image";
import { Comments } from "../comments/Comments";
import VerticalGalleryArticleList from "../lists/VerticalGalleryArticleList";
import { ImageList, ImageListItemBar, ImageListItem } from "@mui/material";
import { MultiLineForm } from "../forms/MultiLineInput";
import CommentForm from "../forms/CommentForm";

export default function ArticleDetails() {
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
        FASHION
      </Typography>
      <Typography
        sx={{
          typography: { xs: "h5", sm: "h4", md: "h3" },
          width: "35%",
          textAlign: "center",
        }}
      >
        CUTE SUMMER TO FALL TRANSITIONAL OUTFIT!
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontWeight: "bold",
          fontSize: { xs: 10, sm: 11, md: 12 },
        }}
      >
        PARIS, FRANCE - OCTOBER 11
      </Typography>
      <GalleryImages />
      <Typography sx={{ width: "65%", textAlign: "center", typography: "h7" }}>
        Cardigans are as cute and cozy as it gets, I absolutely love them in
        every shape and style. It’s a staple that brings a touch of lux to your
        most casual outfits. They’re the perfect item to style over a slip dress
        or layered over a simple white tee. You can even wear them without
        anything underneath, as I’ve done here. I’m really loving cardigans with
        a collar detail, they give off a cool preppy look that I really love.
        Just throw on your fave pair of denim, loafers and your go-to bag for a
        look that’s both casual and chic. I’d gladly wear this ensemble everyday
        this fall and winter, just throw on a coat for extra warmth.{" "}
      </Typography>
      <HorizontalList />
      <Box
        display={"flex"}
        flexDirection={"row"}
        sx={{ justifyContent: "space-evenly" }}
      >
        <CustomImage
          src={
            "https://post.healthline.com/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1.jpg"
          }
          width="45%"
        />
        <CustomImage
          src={
            "https://post.healthline.com/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1.jpg"
          }
          width="45%"
        />
      </Box>
      <CustomImage
        src={
          "https://post.healthline.com/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1.jpg"
        }
        width="70%"
      />
      <CommentForm />
      <VerticalGalleryArticleList marginTop={40} loadMoreFlag={true} />
    </Box>
  );
}

function GalleryImages() {
  return (
    <Box display="flex" flexDirection="row" width={"70%"}>
      <CustomImage
        src={
          "https://post.healthline.com/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1.jpg"
        }
        width="100%"
        marginTop={"0%"}
        padding={"1%"}
      />
      <Box display="flex" flexDirection={"column"}>
        <CustomImage
          src={
            "https://post.healthline.com/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1.jpg"
          }
          width="100%"
          marginTop={"3%"}
          padding={"1%"}
        />
        <CustomImage
          src={
            "https://post.healthline.com/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1.jpg"
          }
          width="100%"
          marginTop={"0%"}
          padding={"1%"}
        />
        <CustomImage
          src={
            "https://post.healthline.com/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1.jpg"
          }
          width="100%"
          marginTop={"0%"}
          padding={"1%"}
        />
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
      sx={{ overflowX: "auto", width: { xs: "70%", sm: "55%" }, marginTop: 40 }}
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
