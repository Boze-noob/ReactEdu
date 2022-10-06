import { CardMedia, Button, Card, Typography, Box, Link } from "@mui/material";
import LineButton from "../buttons/LineButton";

export default function ArticleWithImgBackground({ marginTop }) {
  return (
    <Card
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
        image="https://sincerelyjules.com/wp-content/uploads/2022/09/Sincerely-jules-ronny-kobo-dress-scaled.jpg"
        style={{
          objectFit: "fill",

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
        <Link underline="none" href="https://mui.com/material-ui/react-link/">
          <Typography
            style={{
              marginBottom: 15,
              fontFamily: "Work Sans",
              fontWeight: "bold",
            }}
            sx={{
              color: "white",
              fontSize: { xs: 9, sm: 11, md: 13 },
              "&:hover": {
                color: "black",
              },
            }}
          >
            FASHION
          </Typography>
        </Link>

        <Link underline="none" href="https://mui.com/material-ui/react-link/">
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 25, md: 38 },
              "&:hover": {
                color: "black",
              },
              color: "white",
            }}
          >
            A CUTE DATE NIGHT
          </Typography>
        </Link>

        <Link underline="none" href="https://mui.com/material-ui/react-link/">
          <Typography
            style={{
              fontFamily: "Work Sans",
              fontWeight: "bold",
            }}
            sx={{
              fontSize: { xs: 14, sm: 27, md: 40 },
              "&:hover": {
                color: "black",
              },
              color: "white",
            }}
          >
            LOOK IDEA!
          </Typography>
        </Link>

        <Box height={20} />
        <LineButton btnTxt="Read" width={80} />
      </Box>
    </Card>
  );
}
