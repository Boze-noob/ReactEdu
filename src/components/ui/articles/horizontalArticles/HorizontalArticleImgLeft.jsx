import { Typography, Box, Grid } from "@mui/material";
import CustomButton from "../../buttons/CustomButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function HorizontalArticleImgLeft() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        <Image
          src={
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          }
          width={"90%"}
        />
      </Grid>
      <Grid item xs={6}>
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
          <Typography variant="h3">Must have</Typography>
          <Typography variant="h3" sx={{ mb: 20 }}>
            Fall essentials
          </Typography>
          <HorizontalList />
          <CustomButton onClick={handleButtonClick} margin={20} />
        </Box>
      </Grid>
    </Grid>
  );
}

function Image({ src, width }) {
  return (
    <Box
      component="img"
      sx={{
        height: { xs: "100%", sm: 400, md: 700 },
        width: { width },
      }}
      src={src}
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
          <img
            src={`${item.img}?h=150&w=261&fit=crop&auto=format`}
            srcSet={`${item.img}?w=261&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
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
