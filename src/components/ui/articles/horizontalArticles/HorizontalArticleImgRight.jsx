import { Typography, Box, Grid } from "@mui/material";
import CustomButton from "../../buttons/CustomButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { ArticleModel } from "../../../../domain/models/ArticleModel";
import { ArticleForSaleModel } from "../../../../domain/models/ArticleForSale";
import * as utils from "../../../../utils/utils.js";
import { useLocation, useNavigate } from "react-router-dom";
import { ARTICLE_DETAIL_ROUTE } from "../../../../pages/router/Routes";
import {
  getPathFromCategory,
  Categorys,
} from "../../../../types/enumerations/categorys";

export default function HorizontalArticleImgRight({ marginTop, article }) {
  const navigate = useNavigate();
  const location = useLocation();

  const articleModel = new ArticleModel(
    article.id,
    article.galleryImages,
    article.images,
    article.category,
    article.title,
    article.locationDate,
    article.shortDescription,
    article.description,
    article.comments,
    article.articlesForSale
  );

  const onReadMore = () => {
    navigate(
      {
        pathname: ARTICLE_DETAIL_ROUTE,
        search: `?id=${articleModel.id}`,
      },
      { state: articleModel }
    );
  };

  function Image({ src, height }) {
    return (
      <Box
        component="img"
        sx={{
          height: height,
          width: { xs: "100%", sm: "90%" },
          "&:hover": {
            opacity: 0.7,
            cursor: "pointer",
          },
          transition: "0.7s",
        }}
        onClick={() => {
          onReadMore();
        }}
        src={src}
        style={{ objectFit: "fill" }}
      />
    );
  }

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
            sx={{
              marginBottom: 15,
              fontFamily: "Work Sans",
              fontWeight: 500,
              cursor: "pointer",
            }}
            onClick={() => {
              const path = getPathFromCategory(articleModel.category);

              if (location.pathname != path) navigate(path);
            }}
          >
            {Categorys[articleModel.category].toUpperCase()}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer",
                "& .firstTitle": {
                  color: "#49494a",
                },
                "& .secondTitle": {
                  color: "#49494a",
                },
              },
            }}
          >
            <Typography
              className="firstTitle"
              sx={{ typography: { xs: "h7", sm: "h4" } }}
              onClick={() => {
                onReadMore();
              }}
            >
              {utils.getFirstHalfOfString(articleModel.title).toUpperCase()}
            </Typography>
            <Typography
              className="secondTitle"
              sx={{ typography: { xs: "h6", sm: "h3" }, mb: 20 }}
              style={{ fontWeight: 600, fontFamily: "Work Sans" }}
              textAlign="center"
              onClick={() => {
                onReadMore();
              }}
            >
              {utils.getSecondHalfOfString(articleModel.title).toUpperCase()}
            </Typography>
          </Box>
          <Typography
            style={{ fontWeight: 600, marginLeft: 50, marginRight: 50 }}
            align="center"
          >
            {articleModel.shortDescription}
          </Typography>
          <HorizontalList articlesForSale={articleModel.articlesForSale} />
          <CustomButton
            onClick={() => onReadMore()}
            margin={20}
            txt={"READ MORE"}
          />
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
            sx={{
              width: 160,
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
              transition: "0.7s",
            }}
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
