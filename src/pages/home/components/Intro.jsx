import { CardMedia, CardContent, Card, Typography, Box } from "@mui/material";
import LineButton from "../../../components/ui/buttons/LineButton";

const Intro = () => {
  return (
    <Card sx={{ height: 1, width: 1 }}>
      <div style={{ position: "relative" }}>
        <CardMedia
          component="img"
          image="https://www.w3schools.com/css/img_lights.jpg"
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
      </div>
    </Card>
  );
};

export default Intro;
