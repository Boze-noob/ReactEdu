import { CardMedia, Button, Card, Typography, Box } from "@mui/material";
import LineButton from "../../../components/ui/buttons/LineButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useArticleStore } from "../../../stores/ArticleStore";
import * as utils from "../../../utils/utils.js";
import { useNavigate } from "react-router-dom";
import { ARTICLE_DETAIL_ROUTE } from "../../router/Routes";
import { PageCircularProgress } from "../../../components/ui/progress/PageCircularProgress";

const Intro = ({ articleModel }) => {
  const isLoading = useArticleStore((state) => state.isLoading);
  const navigate = useNavigate();

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
    return <PageCircularProgress />;
  } else {
    return (
      <Card sx={{ height: 1, width: 1 }}>
        <Box
          style={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#1E1E1E",
          }}
        >
          <CardMedia
            component="img"
            image={articleModel.galleryImages[0]}
            sx={{ opacity: 0.7, height: "100vh", objectFit: "cover" }}
            loading="lazy"
          />
          <Box style={{ position: "absolute", top: "35%", left: "5%" }}>
            <Typography
              className="firstTitle"
              style={{
                color: "white",
                fontFamily: "Marck Script",
              }}
              sx={{ fontSize: { xs: 24, sm: 35, md: 55 } }}
            >
              {utils.getFirstHalfOfString(articleModel.title).toUpperCase()}
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "Helvetica Neue",
              }}
              sx={{ fontSize: { xs: 18, sm: 25, md: 38 }, ml: 100 }}
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
              bottom: { xs: "30%", sm: "30%" },
              right: "3%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SocialMediaItem
              icon={
                <InstagramIcon
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: "x-large" },
                    fill: "white",
                    "&:hover": {
                      cursor: "pointer",
                      fill: "#333333",
                    },
                    transition: "0.7s",
                  }}
                />
              }
              href="https://www.instagram.com"
            />
            <SocialMediaItem
              icon={
                <TwitterIcon
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: "x-large" },
                    fill: "white",
                    "&:hover": {
                      cursor: "pointer",
                      fill: "#333333",
                    },
                    transition: "0.7s",
                  }}
                />
              }
              href="https://twitter.com"
            />
            <SocialMediaItem
              icon={
                <PinterestIcon
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: "x-large" },
                    fill: "white",
                    "&:hover": {
                      cursor: "pointer",
                      fill: "#333333",
                    },
                    transition: "0.7s",
                  }}
                />
              }
              href="https://www.pinterest.com"
            />
          </Box>
        </Box>
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
