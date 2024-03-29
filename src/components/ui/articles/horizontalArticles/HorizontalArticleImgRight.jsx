import { Typography, Box, Grid } from "@mui/material";
import CustomButton from "../../buttons/CustomButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { ArticleForSaleModel } from "../../../../domain/models/ArticleForSale";
import * as utils from "../../../../utils/utils.js";
import { useLocation, useNavigate } from "react-router-dom";
import { ARTICLE_DETAIL_ROUTE } from "../../../../pages/router/Routes";
import {
  getPathFromCategory,
  Categorys,
} from "../../../../types/enumerations/categorys";
import { getArticleModel } from "../../../../domain/models/ArticleModel";

export default function HorizontalArticleImgRight({ marginTop, article }) {
  const navigate = useNavigate();
  const location = useLocation();

  const articleModel = getArticleModel(article);

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
        loading="lazy"
      />
    );
  }

  return (
    <>
      {articleModel === undefined ? (
        <></>
      ) : (
        <Grid
          container
          spacing={0}
          sx={{ marginTop: { xs: 50, sm: marginTop } }}
        >
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "start", sm: "center" },
                height: "100%",
                justifyContent: "center",
                marginTop: { xs: 20, sm: 0 },
                marginRight: { xs: 20, sm: 0 },
                marginLeft: { xs: 20, sm: 0 },
              }}
            >
              <Typography
                sx={{
                  marginBottom: 15,
                  fontFamily: "Work Sans",
                  fontWeight: { xs: 600, sm: 500 },
                  cursor: "pointer",
                  fontSize: { xs: 13, sm: 16 },
                }}
                onClick={() => {
                  const path = getPathFromCategory(articleModel.category);

                  if (location.pathname !== path) navigate(path);
                }}
              >
                {Categorys[articleModel.category].toUpperCase()}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "start", sm: "center" },
                  alignItems: { xs: "start", sm: "center" },
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
                  sx={{ typography: { xs: "h6", sm: "h4" } }}
                  onClick={() => {
                    onReadMore();
                  }}
                >
                  {utils.getFirstHalfOfString(articleModel.title).toUpperCase()}
                </Typography>
                <Typography
                  className="secondTitle"
                  sx={{
                    typography: { xs: "h5", sm: "h3" },
                    mb: 20,
                    textAlign: { xs: "start", sm: "center" },
                  }}
                  style={{ fontWeight: 600, fontFamily: "Work Sans" }}
                  onClick={() => {
                    onReadMore();
                  }}
                >
                  {utils
                    .getSecondHalfOfString(articleModel.title)
                    .toUpperCase()}
                </Typography>
              </Box>
              <Typography
                sx={{
                  marginLeft: { xs: 0, sm: 50 },
                  marginRight: 50,
                  align: { xs: "start", sm: "center" },
                  fontWeight: { xs: 500, sm: 600 },
                }}
              >
                {articleModel.shortDescription}
              </Typography>
              {articleModel.articlesForSale.length !== 0 && (
                <HorizontalList
                  articlesForSale={articleModel.articlesForSale}
                />
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CustomButton
                  onClick={() => onReadMore()}
                  margin={20}
                  txt={"READ MORE"}
                />
              </Box>
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
            order={{ xs: 1, sm: 2 }}
          >
            <Image
              src={articleModel.galleryImages[0]}
              height={{ xs: 450, md: 900 }}
            />
          </Grid>
        </Grid>
      )}
    </>
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
            <a href={item.url} target="_blank">
              <img
                src={item.img}
                srcSet={item.img}
                alt={""}
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
