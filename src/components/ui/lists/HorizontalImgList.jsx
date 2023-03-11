import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  getFirstHalfOfString,
  getSecondHalfOfString,
} from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { ARTICLE_DETAIL_ROUTE } from "../../../pages/router/Routes";

export default function HorizontalImgList({
  bgColor,
  title,
  fontFamily,
  marginTop,
  articles = [],
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
        {articles.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      ;
    </Box>
  );
}

function Item(props) {
  const navigate = useNavigate();
  const onReadMore = () => {
    navigate(
      {
        pathname: ARTICLE_DETAIL_ROUTE,
        search: `?id=${props.item.id}`,
      },
      { state: props.item }
    );
  };
  return (
    <Box
      sx={{
        flexDirection: "column",
        "&:hover": {
          cursor: "pointer",
          "& .decription": {
            color: "#49494a",
          },
          "& .subdescription": {
            color: "#49494a",
          },
        },
      }}
      onClick={() => onReadMore()}
    >
      <Box
        component="img"
        sx={{
          height: { xs: 100, sm: 300, md: 450 },
          width: "95%",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        src={props.item.images[0]}
        style={{ objectFit: "cover", padding: 10 }}
      />
      <Typography
        className="description"
        sx={{
          mt: 5,
          fontSize: { xs: 9, sm: 14, md: 20 },
          textAlign: "center",
        }}
      >
        {getFirstHalfOfString(props.item.title)}
      </Typography>
      <Typography
        className="subdescription"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: 13, sm: 15, md: 21 },
          fontFamily: "Work Sans",
          textAlign: "center",
        }}
      >
        {getSecondHalfOfString(props.item.title)}
      </Typography>
    </Box>
  );
}
