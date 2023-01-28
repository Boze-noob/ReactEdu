import { Typography, Box, Grid } from "@mui/material";
import VerticalLineButton from "../buttons/VerticalLineButton";
import { useState } from "react";
import { Categorys } from "../../../types/enumerations/categorys";

export default function VerticalGalleryArticleList({
  marginTop,
  loadMoreFlag,
  articles,
}) {
  const [itemData, setItemData] = useState([
    articles[0],
    articles[1],
    articles[2],
  ]);
  const [counter, setCounter] = useState(3);
  const [hasLoadMore, setHasLoadMore] = useState(loadMoreFlag);

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
            >
              <Box
                component="img"
                sx={{
                  height: { xs: 300, sm: 600 },
                  objectFit: "fill",
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
