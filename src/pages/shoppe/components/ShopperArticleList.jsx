import React from "react";
import { loadMoreShoppeService } from "../../../services/ShoppeService";
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
import { useShoppeStore } from "../../../stores/ShoppeStore";

export default function ShopperArticleList() {
  const articles = useShoppeStore((state) => state.articles);
  const selectedCategory = useShoppeStore((state) => state.selectedCategory);
  const offset = useShoppeStore((state) => state.offset);

  const loadMore = () => {
    loadMoreShoppeService(selectedCategory, offset, articles);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#e6ebeb" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  console.log("Articles are " + JSON.stringify(articles));

  if (articles.length === 0 || articles === undefined) {
    //TODO style it
    return (
      <>
        <Box
          sx={{
            width: 1,
            h: 1,
          }}
        >
          <Typography>No result</Typography>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={25}
            sx={{ paddingLeft: { xs: "10%", sm: "0%" } }}
          >
            {articles.map((item) => (
              <Grid item xs={6} sm={4} lg={3}>
                <Item key={item.title}>
                  <Article
                    imageUrl={item.img}
                    title={item.title}
                    description={item.description}
                  />
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
