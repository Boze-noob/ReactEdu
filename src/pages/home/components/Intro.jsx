import { CardMedia, Button, Card, Typography, Box } from "@mui/material";
import LineButton from "../../../components/ui/buttons/LineButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Intro = () => {
  return (
    <Card sx={{ height: 1, width: 1 }}>
      <div style={{ position: "relative", backgroundColor: "#1E1E1E" }}>
        <CardMedia
          component="img"
          image="https://sincerelyjules.com/wp-content/uploads/2022/09/Sincerely-jules-blazer-victorias-secret-lace-bra.jpg"
          sx={{ opacity: 0.7 }}
        />
        <div style={{ position: "absolute", top: "35%", left: "5%" }}>
          <Typography
            style={{
              color: "white",
              fontFamily: "Marck Script",
            }}
            sx={{ fontSize: { xs: 18, sm: 35, md: 55 } }}
          >
            Quick and easy
          </Typography>
          <Typography
            style={{
              color: "white",
              fontFamily: "Helvetica Neue",
            }}
            sx={{ fontSize: { xs: 12, sm: 25, md: 38 }, ml: 100 }}
          >
            Outfit idea!
          </Typography>
          <Box sx={{ mt: 10 }}>
            <LineButton btnTxt="Read" width="25%" />
          </Box>
        </div>
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
                style={{ fill: "white" }}
                sx={{ fontSize: { xs: 10, sm: 16, md: "large" } }}
              />
            }
            href="https://www.youtube.com/watch?v=yRh-dzrI4Z4"
          />
          <SocialMediaItem
            icon={
              <TwitterIcon
                style={{ fill: "white" }}
                sx={{ fontSize: { xs: 10, sm: 16, md: "large" } }}
              />
            }
            href="https://www.youtube.com/watch?v=yRh-dzrI4Z4"
          />
          <SocialMediaItem
            icon={
              <PinterestIcon
                style={{ fill: "white" }}
                sx={{ fontSize: { xs: 10, sm: 16, md: "large" } }}
              />
            }
            href="https://www.youtube.com/watch?v=yRh-dzrI4Z4"
          />
        </Box>
      </div>
    </Card>
  );
};

function SocialMediaItem({ icon, href }) {
  return (
    <Box
      sx={{
        m: { xs: 0.1, sm: 1 },
      }}
    >
      <Button target="_blank" href={href}>
        {icon}
      </Button>
    </Box>
  );
}

export default Intro;
