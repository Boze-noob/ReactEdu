import { CardMedia, CardContent, Card } from "@mui/material";

const Intro = () => {
  return (
    <Card sx={{ height: 1, width: 1 }}>
      <div style={{ position: "relative" }}>
        <CardMedia
          component="img"
          image="https://www.w3schools.com/css/img_lights.jpg"
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            top: "35%",
            left: "15%",
          }}
        >
          Must have
        </div>
        <div
          style={{
            position: "absolute",
            color: "white",
            top: "40%",
            left: "20%",
          }}
        >
          Fall essentials
        </div>
      </div>
    </Card>
  );
};

export default Intro;
