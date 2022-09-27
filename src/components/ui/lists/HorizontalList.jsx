import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Divider } from "@mui/material";

export default function HorizontalList({ bgColor, title, fontFamily }) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imgUrl: [
        "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
      ],
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imgUrl: [
        "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
      ],
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imgUrl: [
        "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
      ],
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imgUrl: [
        "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
      ],
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imgUrl: [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
      ],
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imgUrl: [
        "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      ],
    },
  ];

  return (
    <Box sx={{ background: bgColor, p: 30 }}>
      <Box
        style={{ marginLeft: "5%", marginBottom: 10 }}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography
          sx={{ typography: { xs: "h4", sm: "h3" } }}
          style={{
            fontFamily: fontFamily,
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
      <Carousel
        navButtonsAlwaysVisible="true"
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            borderRadius: 0,
            color: "black",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function Item(props) {
  return (
    <Paper style={{ background: "transparent" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {props.item.imgUrl.map((item, i) => (
          <Box
            component="img"
            sx={{
              height: { xs: 140, sm: 340, md: 490 },
              width: "30%",
            }}
            src={item}
            style={{ objectFit: "fill", padding: 10 }}
          />
        ))}
      </Box>
      <Typography
        sx={{ typography: { xs: "h6", sm: "h5" }, mt: 20 }}
        style={{ textAlign: "center" }}
      >
        {props.item.description}
      </Typography>
      <Typography
        sx={{ typography: { xs: "h6", sm: "h5" }, mt: 5 }}
        style={{ textAlign: "center", fontWeight: 600 }}
      >
        {props.item.description}
      </Typography>
    </Paper>
  );
}
