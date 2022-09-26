import { Typography, Box, Grid } from "@mui/material";
import CustomButton from "../../buttons/CustomButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function HorizontalArticleImgRight() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ mb: 15 }}>Collages</Typography>
          <Typography sx={{ typography: { xs: "h6", sm: "h4" } }}>
            Must have
          </Typography>
          <Typography sx={{ typography: { xs: "h6", sm: "h4" }, mb: 20 }}>
            Fall essentials
          </Typography>
          <HorizontalList />
          <CustomButton
            onClick={handleButtonClick}
            margin={20}
            txt="Read more"
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} justifyContent="center" alignItems="center">
        <Image
          src={
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          }
          width={"90%"}
          height={{ xs: "100%", sm: 400, md: 700 }}
        />
      </Grid>
    </Grid>
  );
}

function Image({ src, width, height }) {
  return (
    <Box
      component="img"
      sx={{
        height: height,
        width: { width },
      }}
      src={src}
      style={{ objectFit: "fill" }}
    />
  );
}

function HorizontalList() {
  const itemData = [
    {
      img: "https://i.natgeofe.com/n/16fc1c64-7589-46da-8350-aa3b01da2152/3961779_2x1.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
      title: "Title",
      author: "Author",
    },
  ];

  return (
    <ImageList
      variant="masonry"
      gap={10}
      sx={{ mt: 15, width: "80%", height: "40%" }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={item.img}
            width={"100%"}
            height={{ xs: "100%", sm: 100, md: 200 }}
          />

          <ImageListItemBar position="below" title={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

function handleButtonClick() {
  console.log("Damn  you clicked me!");
}
