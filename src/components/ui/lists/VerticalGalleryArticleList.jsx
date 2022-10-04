import { Typography, Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function VerticalGalleryArticleList() {
  const itemData = [
    "hey",
    "asd",
    "asfaw",
    "afw",
    "asf",
    "aw",
    "hesy",
    "assd",
    "assfaw",
    "asfw",
    "assf",
    "aws",
  ];

  return (
    <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
      <ImageList cols={3} gap={40}>
        {itemData.map((item) => (
          <ImageListItem key={item}>
            <Box
              component="img"
              sx={{
                height: { xs: 300, sm: 600 },
                width: "100%",
              }}
              src={"https://www.w3schools.com/css/img_lights.jpg"}
              style={{ objectFit: "fill" }}
            />
            <ImageListItemBar
              title={
                <Typography
                  sx={{ typography: { xs: "h5", sm: "h4" } }}
                  textAlign="center"
                  style={{ wordWrap: "break-word" }}
                >
                  {"Title asd aw awf"}
                </Typography>
              }
              subtitle={
                <Typography variant="h6" textAlign="center">
                  {"description"}
                </Typography>
              }
              position="below"
              sx={{ mt: 30 }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
