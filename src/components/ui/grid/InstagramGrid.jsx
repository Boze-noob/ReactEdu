import { Box, Typography, Divider, Grid } from "@mui/material";

export default function InstagramGrid() {
  return (
    <Box style={{ background: "#f4eadf" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          pt: 20,
        }}
      >
        <Typography
          sx={{ typography: { xs: "h4", sm: "h3" }, ml: "5%" }}
          style={{
            fontFamily: "Oooh Baby",
          }}
        >
          Follow
        </Typography>
        <Typography sx={{ ml: 30 }} variant="h5">
          @SincerlyJules
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
      <ImagesGrid />
    </Box>
  );
}

function ImagesGrid() {
  const items = ["asd", "awgfawg", "agwg", "asd", "awgfawg", "agwg"];
  return (
    <Box
      sx={{
        width: "100%",
        height: 500,
        flexDirection: "row",
        display: "flex",
        mt: 20,
        background: "blue",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        width={"40%"}
        height={"100%"}
      />

      <Grid container>
        {items.map((item) => (
          <Grid item xs={4}>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              width={"100%"}
              height={"100%"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
