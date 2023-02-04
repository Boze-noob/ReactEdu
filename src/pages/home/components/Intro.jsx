import { CardMedia, Button, Card, Typography, Box } from "@mui/material";
import LineButton from "../../../components/ui/buttons/LineButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useArticleStore } from "../../../stores/ArticleStore";
import { useEffect } from "react";
import { getArticles } from "../../../data/repositories/ArticleRepository";
import * as utils from "../../../utils/utils.js";
import { useNavigate } from "react-router-dom";
import { ARTICLE_DETAIL_ROUTE } from "../../router/Routes";

const Intro = () => {
  const isLoading = useArticleStore((state) => state.isLoading);
  const articleModel = useArticleStore((state) => state.articles[0]);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, []);

  const onReadMore = () => {
    navigate(
      {
        pathname: ARTICLE_DETAIL_ROUTE,
        search: `?id=${articleModel.id}`,
      },
      { state: articleModel }
    );
  };

  if (isLoading) {
    return (
      <>
        <Typography variant="h1">Loading....</Typography>
      </>
    );
  } else {
    return (
      <Card sx={{ height: 1, width: 1 }}>
        <div style={{ position: "relative", backgroundColor: "#1E1E1E" }}>
          <CardMedia
            component="img"
            image={articleModel.galleryImages[0]}
            sx={{ opacity: 0.7, height: { xs: 400, sm: 800 } }}
          />
          <Box style={{ position: "absolute", top: "35%", left: "5%" }}>
            <Typography
              className="firstTitle"
              style={{
                color: "white",
                fontFamily: "Marck Script",
              }}
              sx={{ fontSize: { xs: 18, sm: 35, md: 55 } }}
            >
              {utils.getFirstHalfOfString(articleModel.title).toUpperCase()}
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "Helvetica Neue",
              }}
              sx={{ fontSize: { xs: 12, sm: 25, md: 38 }, ml: 100 }}
            >
              {utils.getSecondHalfOfString(articleModel.title).toUpperCase()}
            </Typography>
            <Box sx={{ mt: 10 }}>
              <LineButton
                btnTxt="Read"
                width="25%"
                onClick={() => onReadMore()}
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "30%", sm: "40%" },
              right: "3%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SocialMediaItem
              icon={
                <InstagramIcon
                  sx={{
                    fontSize: { xs: 10, sm: 16, md: "x-large" },
                    fill: "white",
                    "&:hover": {
                      cursor: "pointer",
                      fill: "#333333",
                    },
                    transition: "0.7s",
                  }}
                />
              }
              href="https://www.instagram.com/sincerelyjules/"
            />
            <SocialMediaItem
              icon={
                <TwitterIcon
                  sx={{
                    fontSize: { xs: 10, sm: 16, md: "x-large" },
                    fill: "white",
                    "&:hover": {
                      cursor: "pointer",
                      fill: "#333333",
                    },
                    transition: "0.7s",
                  }}
                />
              }
              href="https://twitter.com/sincerelyJules"
            />
            <SocialMediaItem
              icon={
                <PinterestIcon
                  sx={{
                    fontSize: { xs: 10, sm: 16, md: "x-large" },
                    fill: "white",
                    "&:hover": {
                      cursor: "pointer",
                      fill: "#333333",
                    },
                    transition: "0.7s",
                  }}
                />
              }
              href="https://www.pinterest.com/sincerelyjules1/"
            />
          </Box>
        </div>
      </Card>
    );
  }
};

function SocialMediaItem({ icon, href }) {
  return (
    <Box
      sx={{
        m: { xs: 0.1, sm: 1 },
      }}
    >
      <Button
        target="_blank"
        href={href}
        sx={{
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        {icon}
      </Button>
    </Box>
  );
}

export default Intro;
