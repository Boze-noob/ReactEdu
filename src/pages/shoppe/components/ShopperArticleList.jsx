import React from "react";
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

export default function ShopperArticleList() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={30}>
        <Grid item xs={4}>
          <Item>
            <Article />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Article />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Article />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Article />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function Article() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.mos.cms.futurecdn.net/kCbvedK262UGLXCLFeW5oS.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
