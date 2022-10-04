import { CardMedia, Button, Card, Typography, Box } from "@mui/material";
import LineButton from "../buttons/LineButton";

export default function ArticleWithImgBackground({ width, height }) {
  return (
    <Card
      style={{
        height: height,
        width: width,
        position: "relative",
        backgroundColor: "#1f1f1f",
      }}
    >
      <CardMedia
        component="img"
        image="https://www.w3schools.com/css/img_lights.jpg"
        sx={{ opacity: 0.7 }}
        style={{ objectFit: "fill", height: height, width: width }}
      />

      <Box
        style={{
          width: width,
          height: height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
          position: "absolute",
          top: "0%",
          left: "0%",
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
        <LineButton btnTxt="Read" width={80} />
      </Box>
    </Card>
  );
}
