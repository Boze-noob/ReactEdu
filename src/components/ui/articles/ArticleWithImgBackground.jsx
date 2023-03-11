import { CardMedia, Card, Typography, Box } from "@mui/material";
import LineButton from "../buttons/LineButton";
import {
  getFirstHalfOfString,
  getSecondHalfOfString,
} from "../../../utils/utils";
import { Link } from "react-router-dom";
import { getPathFromCategory } from "../../../types/enumerations/categorys";
import { useNavigate } from "react-router-dom";
import { ARTICLE_DETAIL_ROUTE } from "../../../pages/router/Routes";
import { Categorys } from "../../../types/enumerations/categorys";

export default function ArticleWithImgBackground({ marginTop, article }) {
  const navigate = useNavigate();

  const onReadMore = () => {
    navigate(
      {
        pathname: ARTICLE_DETAIL_ROUTE,
        search: `?id=${article.id}`,
      },
      { state: article }
    );
  };

  return (
    <Card
      onClick={() => {
        onReadMore();
      }}
      style={{
        position: "relative",
        backgroundColor: "#1f1f1f",
        width: "100%",
        marginTop: marginTop ?? 10,
      }}
      sx={{
        height: { xs: 350, sm: 650 },
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
          height: { xs: 350, sm: 650 },
          opacity: 0.7,
        }}
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
          height: { xs: 350, sm: 650 },
        }}
      >
        <Link
          to={getPathFromCategory(article.category)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 9, sm: 11, md: 13 },
              "&:hover": {
                color: "black",
              },
              marginBottom: 15,
              fontFamily: "Work Sans",
              fontWeight: "bold",
              transition: "0.7s",
            }}
          >
            {Categorys[article.category]}
          </Typography>
        </Link>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              cursor: "pointer",
              "& .titleFirstPart": {
                color: "black",
              },
              "& .titleSecondPart": {
                color: "black",
              },
            },
          }}
        >
          <Typography
            className="titleFirstPart"
            sx={{
              fontSize: { xs: 12, sm: 25, md: 38 },
              transition: "0.7s",
              color: "white",
            }}
          >
            {getFirstHalfOfString(article.title)}
          </Typography>

          <Typography
            className="titleSecondPart"
            sx={{
              fontSize: { xs: 14, sm: 27, md: 40 },
              transition: "0.7s",
              color: "white",
              fontFamily: "Work Sans",
              fontWeight: "bold",
            }}
          >
            {getSecondHalfOfString(article.title)}
          </Typography>
        </Box>

        <Box height={20} />
        <LineButton btnTxt="Read" width={80} />
      </Box>
    </Card>
  );
}
