import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LineButton from "../../buttons/LineButton";
import { ARTICLE_DETAIL_ROUTE } from "../../../../pages/router/Routes";

export default function HorizontalTwoImgArticle({ marginTop, articles }) {
  const navigate = useNavigate();

  const onReadMore = (article) => {
    navigate(
      {
        pathname: ARTICLE_DETAIL_ROUTE,
        search: `?id=${article.id}`,
      },
      { state: article }
    );
  };

  return (
    <Grid container style={{ marginTop: marginTop }}>
      <Grid item xs={12} sm={6}>
        <ImageWithDesc article={articles[0]} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ImageWithDesc article={articles[1]} />
      </Grid>
    </Grid>
  );

  function ImageWithDesc({ article }) {
    if (article === undefined) return <></>;
    return (
      <Card
        style={{
          position: "relative",
          backgroundColor: "black",
          width: "100%",
        }}
        sx={{
          height: { xs: 500, md: 900 },
        }}
      >
        <CardMedia
          component="img"
          image={article.images[0]}
          style={{
            objectFit: "cover",
            width: "100%",
          }}
          sx={{
            opacity: 0.6,
            height: { xs: 500, md: 900 },
          }}
          loading="lazy"
        />

        <Box
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "column",
            position: "absolute",
            top: "0%",
            left: "0%",
          }}
          sx={{
            height: { xs: 500, md: 900 },
          }}
        >
          <Box width={"60%"} onClick={() => onReadMore(article)}>
            <Typography
              style={{
                marginBottom: 15,
                fontFamily: "Lora",
                fontWeight: "bold",
              }}
              sx={{
                color: "white",
                typography: { xs: "h5", sm: "h4" },
                "&:hover": {
                  color: "black",
                  cursor: "pointer",
                },
                transition: "0.7s",
              }}
              textAlign={"center"}
            >
              {article.title}
            </Typography>
          </Box>

          <Box height={20} />
          <Box
            width={"80%"}
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row-reverse",
            }}
          >
            <LineButton
              btnTxt="Read"
              width={{ xs: 30, sm: 80 }}
              onClick={() => onReadMore(article)}
            />
          </Box>
        </Box>
      </Card>
    );
  }
}
