import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";

export default function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent="center"
      sx={{ mt: { xs: "auto", sm: "5%" } }}
    >
      <Box sx={{ width: { xs: "85%", sm: "70%" } }}>
        <Carousel responsive={responsive} swipeable={true}>
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
      </Box>
    </Box>
  );
}

function Item() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      px={"18%"}
      py={"5%"}
    >
      <Typography
        textAlign={"center"}
        fontStyle={"italic"}
        sx={{ fontSize: { xs: 13, sm: 18 } }}
      >
        {
          "“As if attending fancy events, posing for ad campaigns, and blogging from Fashion Week doesn’t keep her busy enough, Jules also designs quirky screenprint tees emblazoned with inspiring saying like her motto “Dream, Believe, Achieve” creative indeed”"
        }
      </Typography>
      <Image
        src={
          "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/testimonials/rewardstyle.png"
        }
      />
    </Box>
  );
}

function Image({ src }) {
  return (
    <Box
      component="img"
      sx={{
        width: { xs: "70%", sm: "50%" },
      }}
      src={src}
      style={{ objectFit: "fill" }}
      mt="5%"
      loading="lazy"
    />
  );
}
