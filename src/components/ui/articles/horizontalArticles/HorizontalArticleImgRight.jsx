import { Typography, Box, Grid } from "@mui/material";
import CustomButton from "../../buttons/CustomButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { ArticleModel } from "../../../../domain/models/ArticleModel";
import { ArticleForSaleModel } from "../../../../domain/models/ArticleForSale";
import * as utils from "../../../../utils/utils.js";
import { Link } from "react-router-dom";

export default function HorizontalArticleImgRight({ marginTop, article }) {
  const articleModel = new ArticleModel(
    article.id,
    article.galleryImages,
    article.images,
    article.category,
    article.title,
    article.loactionDate,
    article.shortDescription,
    article.description,
    article.comments,
    article.articlesForSale
  );

  return (
    <Grid container spacing={0} style={{ marginTop: marginTop }}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              marginBottom: 15,
              fontFamily: "Work Sans",
              fontWeight: 500,
            }}
          >
            {articleModel.category.toUpperCase()}
          </Typography>
          <Typography sx={{ typography: { xs: "h7", sm: "h4" } }}>
            {utils.getFirstHalfOfString(articleModel.title).toUpperCase()}
          </Typography>
          <Typography
            sx={{ typography: { xs: "h6", sm: "h3" }, mb: 20 }}
            style={{ fontWeight: 600, fontFamily: "Work Sans" }}
            textAlign="center"
          >
            {utils.getSecondHalfOfString(articleModel.title).toUpperCase()}
          </Typography>
          <Typography
            style={{ fontWeight: 600, marginLeft: 50, marginRight: 50 }}
            align="center"
          >
            {articleModel.shortDescription}
          </Typography>
          <HorizontalList articlesForSale={articleModel.articlesForSale} />
          <Link to={"/somenewroute"} style={{ textDecoration: "none" }}>
            <CustomButton
              //onClick={handleButtonClick}
              margin={20}
              txt={"READ MORE"}
            />
          </Link>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        <Image
          src={articleModel.galleryImages[0]}
          height={{ xs: 450, md: 900 }}
        />
      </Grid>
    </Grid>
  );
}

function Image({ src, height }) {
  return (
    <Box
      component="img"
      sx={{
        height: height,
        width: { xs: "100%", sm: "90%" },
      }}
      src={src}
      style={{ objectFit: "fill" }}
    />
  );
}

function HorizontalList({ articlesForSale }) {
  const articles = articlesForSale.map(
    (item) => new ArticleForSaleModel(item.id, item.img, item.title, item.url)
  );
  return (
    <ImageList
      sx={{ overflowX: "auto", width: { xs: 300, sm: 500 }, marginTop: 40 }}
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
                alt={item.author}
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

function handleButtonClick() {
  console.log("Damn  you clicked me!");
}
