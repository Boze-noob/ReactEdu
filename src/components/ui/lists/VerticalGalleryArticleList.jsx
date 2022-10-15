import { Typography, Box, Grid } from "@mui/material";
import VerticalLineButton from "../buttons/VerticalLineButton";
import { useState } from "react";

export default function VerticalGalleryArticleList({ marginTop }) {
  const fakeData = [
    "https://sincerelyjules.com/wp-content/uploads/2022/05/SJxCANVA1-1000x1500.jpg",
    "https://sincerelyjules.com/wp-content/uploads/2022/06/Sincerely-jules-provence-1-1000x1500.jpg",
    "https://sincerelyjules.com/wp-content/uploads/2022/06/Sincerely-jules-travis-mathews-new-balance-shoes-Fendi-bag-levis-shorts-ensemble-1000x1500.jpg",
  ];

  const [itemData, setItemData] = useState(fakeData);

  const loadMore = () => {
    setItemData((items) => items.concat(fakeData));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={35} marginTop={marginTop ?? 10}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: { xs: 300, sm: 600 },

                  objectFit: "fill",
                }}
                src={item}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Work Sans",
                  fontWeight: "bold",
                  fontSize: { xs: 9, sm: 11, md: 13 },
                  marginTop: 40,
                  width: "50%",
                }}
              >
                {"FASHION"}
              </Typography>
              <Typography
                sx={{
                  typography: { xs: "h5", sm: "h4" },
                  width: "70%",
                  marginTop: 15,
                }}
                textAlign="center"
                style={{ wordWrap: "break-word" }}
              >
                {"MY GO-TO APP TO CREATE CONTENT: CANVA!"}
              </Typography>
              <Typography
                textAlign="center"
                marginTop={20}
                sx={{ width: "70%" }}
              >
                {
                  "If you're looking for ways to create engaging & unique content, CANVA will be your new go-to program for all things creative! Take a look at some templates I've created."
                }
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <VerticalLineButton
        marginTop={"10%"}
        marginBottom={"5%"}
        onClick={loadMore}
      />
    </Box>
  );
}
