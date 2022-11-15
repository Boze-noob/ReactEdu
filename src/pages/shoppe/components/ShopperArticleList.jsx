import React from "react";
import { useState } from "react";
import {
  Grid,
  Card,
  Paper,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import VerticalLineButton from "../../../components/ui/buttons/VerticalLineButton";

export default function ShopperArticleList() {
  const fakeData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [itemData, setItemData] = useState(fakeData);

  const loadMore = () => {
    setItemData((items) => items.concat(fakeData));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#e6ebeb" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={25}
          sx={{ paddingLeft: { xs: "10%", sm: "0%" } }}
        >
          {itemData.map((item) => (
            <Grid item xs={6} sm={4} lg={3}>
              <Item>
                <Article imageUrl={""} title={""} description={""} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      <VerticalLineButton
        marginTop={"10%"}
        marginBottom={"5%"}
        onClick={loadMore}
        text="Shop More"
      />
    </>
  );
}

function Article({ imageUrl, title, description }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={imageUrl}
          sx={{ height: { xs: 120, sm: 150, md: 190 }, objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            fontFamily={"Work Sans"}
          >
            {title}
          </Typography>
          <Typography
            color="text.secondary"
            fontFamily={"Work Sans"}
            sx={{ fontSize: { xs: 10, sm: 14, lg: 16 } }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
