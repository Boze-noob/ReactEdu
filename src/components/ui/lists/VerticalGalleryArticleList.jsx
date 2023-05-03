import { Typography, Box, Grid } from "@mui/material";
import VerticalLineButton from "../buttons/VerticalLineButton";
import { useEffect, useState } from "react";
import { Categorys } from "../../../types/enumerations/categorys";
import { useNavigate } from "react-router-dom";
import { ARTICLE_DETAIL_ROUTE } from "../../../pages/router/Routes";

export default function VerticalGalleryArticleList({
  marginTop,
  loadMoreFlag,
  articles,
}) {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState([]);
  const [counter, setCounter] = useState(3);
  const [hasLoadMore, setHasLoadMore] = useState(loadMoreFlag);

  useEffect(() => {
    setItemData([]);
    setHasLoadMore(loadMoreFlag);
    setCounter(3);
  }, [articles]);

  for (let i = 0; i < articles.length && itemData.length < 3; i++) {
    if (articles[i]) {
      itemData.push(articles[i]);
    }
  }

  const loadMore = () => {
    setCounter(counter + 3);
    if (
      articles[counter] !== undefined &&
      articles[counter + 1] !== undefined &&
      articles[counter + 2] !== undefined
    ) {
      setItemData((items) =>
        items.concat([
          articles[counter],
          articles[counter + 1],
          articles[counter + 2],
        ])
      );
    } else {
      setHasLoadMore(false);
    }
  };

  const onReadMore = (articleModel) => {
    navigate(
      {
        pathname: ARTICLE_DETAIL_ROUTE,
        search: `?id=${articleModel.id}`,
      },
      { state: articleModel }
    );
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={35} marginTop={marginTop ?? 10}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => {
                onReadMore(item);
              }}
            >
              <Box
                component="img"
                sx={{
                  height: { xs: 300, sm: 600 },
                  width: "100%",
                  objectFit: "cover",
                  "&:hover": {
                    opacity: 0.7,
                    cursor: "pointer",
                  },
                  transition: "0.7s",
                }}
                src={item.galleryImages[0]}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Work Sans",
                  fontWeight: "bold",
                  fontSize: { xs: 9, sm: 11, md: 13 },
                  marginTop: 40,
                  width: "50%",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#49494a",
                  },
                }}
              >
                {Categorys[item.category].toUpperCase()}
              </Typography>
              <Typography
                sx={{
                  typography: { xs: "h5", sm: "h4" },
                  width: "70%",
                  marginTop: 15,
                  textAlign: "center",
                  wordWrap: "break-word",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#49494a",
                  },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                textAlign="center"
                marginTop={20}
                sx={{ width: "70%" }}
              >
                {item.shortDescription}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      {hasLoadMore && (
        <VerticalLineButton
          marginTop={"10%"}
          marginBottom={"5%"}
          onClick={loadMore}
        />
      )}
    </Box>
  );
}
