import { Box, Grid, Typography, Card, CardMedia, Link } from "@mui/material";
import { fontSize } from "@mui/system";
import LineButton from "../../buttons/LineButton";

export default function HorizontalTwoImgArticle({ marginTop }) {
  return (
    <Grid container style={{ marginTop: marginTop }}>
      <Grid item xs>
        <ImageWithDesc
          src={
            "https://sincerelyjules.com/wp-content/uploads/2022/08/Sincerely-jules-bandier-stripe-set.jpg"
          }
          desc={"HOW TO STYLE AN ACTIVE SET"}
          type={"FASHION"}
        />
      </Grid>
      <Grid item xs={6}>
        <ImageWithDesc
          src={
            "https://sincerelyjules.com/wp-content/uploads/2022/07/Sincerely-jules-ysl-sandals-skirt-look.jpg"
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
        backgroundColor: "black",
        width: "100%",
      }}
      sx={{
        height: { xs: 400, md: 900 },
      }}
    >
      <CardMedia
        component="img"
        image={src}
        style={{
          objectFit: "fill",

          width: "100%",
        }}
        sx={{
          opacity: 0.6,
          height: { xs: 400, md: 900 },
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
          height: { xs: 400, md: 900 },
        }}
      >
        <CustomLink
          url={"https://www.youtube.com/watch?v=iPsRG0-RQSg&t=49s"}
          fontFamily={"Work Sans"}
          fontSize={{ xs: 9, sm: 11, md: 13 }}
          text={type}
        />
        <Box width={"60%"}>
          <CustomLink
            url={"https://www.youtube.com/watch?v=iPsRG0-RQSg&t=49s"}
            fontSize={{ xs: 12, sm: 25, md: 38 }}
            text={desc}
            fontFamily={"Lora"}
          />
        </Box>

        <Box height={20} />
        <Box
          width={"80%"}
          sx={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <LineButton
            btnTxt="Read"
            width={{ xs: 30, sm: 80 }}
            url={"https://developer.mozilla.org/en-US/docs/Web/CSS/word-break"}
          />
        </Box>
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
          transition: "0.7s",
        }}
        textAlign={"center"}
      >
        {text}
      </Typography>
    </Link>
  );
}
