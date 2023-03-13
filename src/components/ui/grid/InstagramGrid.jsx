import { Box, Typography, Divider, Grid } from "@mui/material";
import "./css/GridOnHover.css";
import { useFooterStore } from "../../../stores/FooterStore";
import { useEffect } from "react";
import { getFooter } from "../../../data/repositories/FooterRepository";

export default function InstagramGrid() {
  useEffect(() => {
    getFooter();
  }, []);

  const footerData = useFooterStore((state) => state.footerData);

  return (
    <Box style={{ background: "#f4eadf" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
        <Typography
          sx={{
            ml: 30,
            "&:hover": {
              cursor: "pointer",
              color: "#49494a",
            },
          }}
          variant="h4"
        >
          @SincerlyJules
        </Typography>
        <Divider
          sx={{
            height: 0.8,
            width: "30%",
            bgcolor: "black",
            ml: "5%",
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>
      <ImagesGrid data={footerData} />
    </Box>
  );
}

function ImagesGrid({ data }) {
  const slicedData = data.slice(1, 7);
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 250, sm: 600 },
        flexDirection: "row",
        display: "flex",
        mt: 20,
      }}
    >
      {data.length > 0 ? (
        <Box
          style={{ position: "relative" }}
          className={"container"}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <img
            src={data[0].imageUrl}
            height="100%"
            style={{ objectFit: "fill" }}
          />
          <div className="overlay">
            <Typography
              sx={{
                typography: { xs: "h6", sm: "h5" },
                display: { xs: "none", md: "block" },
              }}
              className={"text"}
              style={{ fontWeight: 500, fontFamily: "Lora" }}
            >
              {data[0].description}
            </Typography>
          </div>
        </Box>
      ) : (
        ""
      )}

      <Grid container spacing={0} rowSpacing={0}>
        {slicedData.map((item) => (
          <Grid item xs={4}>
            <Box
              sx={{
                height: { xs: 125, sm: 300 },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              style={{ position: "relative" }}
              className={"container"}
            >
              <img src={item.imageUrl} className={"image"} />
              <div className="overlay">
                <Typography
                  sx={{
                    typography: "h6",
                    display: { xs: "none", md: "block" },
                  }}
                  className={"text"}
                  style={{ fontWeight: 500, fontFamily: "Lora" }}
                >
                  {item.description}
                </Typography>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
