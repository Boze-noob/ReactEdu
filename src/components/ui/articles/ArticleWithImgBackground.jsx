import { CardMedia, Button, Card, Typography, Box } from "@mui/material";
import LineButton from "../buttons/LineButton";

export default function ArticleWithImgBackground({ width, height }) {
  return (
    <Card sx={{ height: height, width: width }}>
      <div style={{ position: "relative", backgroundColor: "#1E1E1E" }}>
        <CardMedia
          component="img"
          image="https://www.w3schools.com/css/img_lights.jpg"
          sx={{ opacity: 0.7 }}
        />
        <Box
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            width: "100%",
            height: "100%",
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                color: "white",
              }}
            >
              FASHION
            </Typography>

            <Typography
              style={{
                color: "white",
                fontFamily: "Helvetica Neue",
              }}
              sx={{ fontSize: { xs: 12, sm: 25, md: 38 } }}
            >
              THE MOST VERSATILE ITEM
            </Typography>
            <Typography
              style={{
                color: "white",
                fontFamily: "Helvetica Neue",
              }}
              sx={{ fontSize: { xs: 12, sm: 25, md: 38 } }}
            >
              IN YOUR CLOSET
            </Typography>
            <LineButton btnTxt="Read" width="25%" />
          </div>
        </Box>
      </div>
    </Card>
  );
}
