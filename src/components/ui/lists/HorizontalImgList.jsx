import { Box, Typography, Grid } from "@mui/material";
import { Paper, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HorizontalImgList({
  bgColor,
  title,
  fontFamily,
  marginTop,
}) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  var items = [
    {
      description: "WHAT TO WEAR TO",
      subDescription: "A BEACHY DINNER!",
      imgUrl:
        "https://sincerelyjules.com/wp-content/uploads/2022/06/Sincerley-jules-terry-bandier-look-900x900.jpg",
    },
    {
      description: "SEVEN SPRING",
      subDescription: "OUTFIT IDEAS!",
      imgUrl:
        "https://sincerelyjules.com/wp-content/uploads/2022/06/Sincerely-jules-victorias-secret-swim-hat-look-900x900.jpg",
    },
    {
      description: "SUMMER ESSENTIAL",
      subDescription: "MAXI DRESS!",
      imgUrl:
        "https://sincerelyjules.com/wp-content/uploads/2022/05/Sincerely-jules-hat-elleme-bag-SWF-floral-dress-2-900x900.jpg",
    },
    {
      description: "MY TOP FIVE",
      subDescription: "BEACH ESSENTIALS!",
      imgUrl:
        "https://sincerelyjules.com/wp-content/uploads/2022/03/Sincerely-jules-siedres-groovy-dress-orange-jwpei-official-bag-chanel-slides-1-900x900.jpg",
    },
    {
      description: "SEVEN SPRING",
      subDescription: "OUTFIT IDEAS!",
      imgUrl:
        "https://sincerelyjules.com/wp-content/uploads/2022/03/Sincerely-jules-nanushka-top-linen-trouser-celine-bag-siedres-scarf-look-900x900.jpg",
    },
    {
      description: "MY TOP FIVE",
      subDescription: "BEACH ESSENTIALS!",
      imgUrl:
        "https://sincerelyjules.com/wp-content/uploads/2022/02/Sincerely-jules-sezane-spring-dress-scarf-espadrilles-look-900x900.jpg",
    },
  ];

  return (
    <Box
      sx={{
        background: bgColor ?? "#F4EADF",
        p: 30,
        marginTop: marginTop ?? 10,
      }}
    >
      <Box
        style={{ marginLeft: "5%", marginBottom: 10 }}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography
          sx={{ typography: { xs: "h4", sm: "h3" } }}
          style={{
            fontFamily: fontFamily ?? "Oooh baby",
          }}
        >
          {title}
        </Typography>
        <Divider
          sx={{
            height: 0.8,
            width: "30%",
            bgcolor: "black",
            ml: "5%",
          }}
        />
      </Box>
      <Carousel responsive={responsive}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      ;
    </Box>
  );
}

function Item(props) {
  return (
    <Box sx={{ flexDirection: "column" }}>
      <Box
        component="img"
        sx={{
          height: { xs: 100, sm: 300, md: 450 },
          width: "95%",
        }}
        src={props.item.imgUrl}
        style={{ objectFit: "fill", padding: 10 }}
      />
      <Typography
        style={{ textAlign: "center" }}
        sx={{
          mt: 5,

          fontSize: { xs: 9, sm: 14, md: 20 },
        }}
      >
        {props.item.description}
      </Typography>
      <Typography
        style={{
          textAlign: "center",
        }}
        sx={{
          fontWeight: "bold",
          fontSize: { xs: 13, sm: 15, md: 21 },
          fontFamily: "Work Sans",
        }}
      >
        {props.item.subDescription}
      </Typography>
    </Box>
  );
}
