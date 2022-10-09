import { Box, Grid, Typography, Card, CardMedia, Link } from "@mui/material";
import { fontSize } from "@mui/system";
import LineButton from "../../buttons/LineButton";

export default function HorizontalTwoImgArticle({ marginTop }) {
  return (
    <Grid container style={{ marginTop: marginTop }}>
      <Grid item xs>
        <ImageWithDesc
          src={
            "https://sincerelyjules.com/wp-content/uploads/2022/09/Sincerely-jules-nanushka-top-levis-sandals-wicker-bag-sunnies-white-sandals-look_-1000x1500.jpg"
          }
          desc={"HOW TO STYLE AN ACTIVE SET"}
          type={"FASHION"}
        />
      </Grid>
      <Grid item xs={6}>
        <ImageWithDesc
          src={
            "https://sincerelyjules.com/wp-content/uploads/2022/09/Sincerely-jules-nanushka-top-levis-sandals-wicker-bag-sunnies-white-sandals-look_-1000x1500.jpg"
          }
          desc={"HOW TO STYLE AN ACTIVE SET"}
          type={"FASHION"}
        />
      </Grid>
    </Grid>
  );
}

function ImageWithDesc({ src, desc, type }) {
  return (
    <Card
      style={{
        position: "relative",
        backgroundColor: "#1f1f1f",
        width: "100%",
      }}
      sx={{
        height: { xs: 450, md: 900 },
      }}
    >
      <CardMedia
        component="img"
        image={src}
        style={{
          objectFit: "fill",
          height: { xs: 450, md: 900 },
          width: "100%",
        }}
        sx={{
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
          height: { xs: 450, md: 900 },
        }}
      >
        <CustomLink
          url={"https://www.youtube.com/watch?v=iPsRG0-RQSg&t=49s"}
          fontFamily={"Work Sans"}
          fontSize={{ xs: 9, sm: 11, md: 13 }}
          text={"hey"}
        />
        <CustomLink />
        <Box height={20} />
        <LineButton btnTxt="Read" width={80} />
      </Box>
    </Card>
  );
}

function CustomLink({ url, fontFamily, fontSize, text }) {
  return (
    <Link underline="none" href={url}>
      <Typography
        style={{
          marginBottom: 15,
          fontFamily: fontFamily ?? "Work Sans",
          fontWeight: "bold",
        }}
        sx={{
          color: "white",
          fontSize: fontSize ?? { xs: 9, sm: 11, md: 13 },
          "&:hover": {
            color: "black",
          },
        }}
      >
        {text}
      </Typography>
    </Link>
  );
}
