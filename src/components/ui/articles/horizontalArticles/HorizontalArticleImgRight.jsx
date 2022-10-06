import { Typography, Box, Grid } from "@mui/material";
import CustomButton from "../../buttons/CustomButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function HorizontalArticleImgRight({ marginTop }) {
  return (
    <Grid container spacing={0} style={{ marginTop: marginTop }}>
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
          <Typography
            style={{
              marginBottom: 15,
              fontFamily: "Work Sans",
              fontWeight: 500,
            }}
          >
            FASHION
          </Typography>
          <Typography sx={{ typography: { xs: "h7", sm: "h4" } }}>
            QUICK & EASY
          </Typography>
          <Typography
            sx={{ typography: { xs: "h6", sm: "h3" }, mb: 20 }}
            style={{ fontWeight: 600, fontFamily: "Work Sans" }}
            textAlign="center"
          >
            OUTFIT IDEA
          </Typography>
          <Typography
            style={{ fontWeight: 600, marginLeft: 50, marginRight: 50 }}
            align="center"
          >
            Super easy and cute go-to outfit. Take a look!
          </Typography>
          <HorizontalList />
          <CustomButton
            onClick={handleButtonClick}
            margin={20}
            txt={"READ MORE"}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        <Image
          src={
            "https://sincerelyjules.com/wp-content/uploads/2022/09/Sincerely-jules-nanushka-top-levis-sandals-wicker-bag-sunnies-white-sandals-look_-1000x1500.jpg"
          }
          height={{ xs: 450, md: 900 }}
        />
      </Grid>
    </Grid>
  );
}

function Image({ src, height }) {
  return (
    <Box
      component="img"
      sx={{
        height: height,
        width: { xs: "100%", sm: "90%" },
      }}
      src={src}
      style={{ objectFit: "fill" }}
    />
  );
}

function HorizontalList() {
  const itemData = [
    {
      img: "https://img.shopstyle-cdn.com/sim/bd/de/bdde293e0389975344fc8677dd7e13f0_best/shayla-mini-dress.jpg",
      title: "SHAYKA MINI DRESS",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/2f/f8/2ff8464a2edc0ef4cd0238479887ef0f_best/polka-dot-crepe-minidress.jpg",
      title: "SAINT LAURENT",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/89/6f/896fc603c8c9ad3934d8732ef1a83296_best/halpern-shape-shifter-polka-dot-cotton-mini-dress.jpg",
      title: "HALPERN",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/b7/c4/b7c4b66629795afb665ca5f71b64256b_best/saloni-jamie-short-dress.jpg",
      title: "SALONI",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/9b/03/9b03a13fa019dfae8701146be550ab6e_best/saskia-dress.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/cf/fb/cffb786efcdf941bc270aea04bdb5c46_best/rococo-sand-vega-short-dress.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/f9/b0/f9b0a0bf0dcfacefc9c1d15a6a2d2278_best/kenia05-dress.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/15/93/15936a148923129869a04091e705efd7_best/hoop-pendant-earrings.jpg",
      title: "Title",
      author: "Author",
    },
    {
      img: "https://img.shopstyle-cdn.com/sim/fb/c3/fbc36cc6fb8b4d2039648e1882bed869_best/taner-mini-huggies.jpg",
      title: "Title",
      author: "Author",
    },
  ];
  return (
    <ImageList
      sx={{ overflowX: "auto", width: { xs: 300, sm: 500 }, marginTop: 40 }}
      rowHeight={250}
    >
      <ImageListItem sx={{ display: "inline-flex", flexDirection: "row" }}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ paddingRight: "3em", width: 200 }}
          >
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.author}
              loading="lazy"
              style={{ height: 210, objectFit: "contain" }}
            />
            <ImageListItemBar
              position="below"
              subtitle={item.title}
              style={{ fontFamily: "Work Sans" }}
            />
          </ImageListItem>
        ))}
      </ImageListItem>
    </ImageList>
  );
}

function handleButtonClick() {
  console.log("Damn  you clicked me!");
}
