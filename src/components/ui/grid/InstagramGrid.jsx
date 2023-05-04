import { Box, Typography, Divider, Grid } from "@mui/material";
import "./css/GridOnHover.css";
import { useFooterStore } from "../../../stores/FooterStore";
import { useEffect } from "react";
import { getFooter } from "../../../data/repositories/FooterRepository";
import { useMediaQuery } from "@mui/material";
import LazyLoad from "react-lazy-load";

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
            typography: { xs: "h5", sm: "h4" },
            ml: 30,
            "&:hover": {
              cursor: "pointer",
              color: "#49494a",
            },
          }}
        >
          @TheStylishLife
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
  const isMobileView = useMediaQuery("(max-width:600px)");
  const slicedData = isMobileView ? data.slice(1, 5) : data.slice(1, 7);
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
          <LazyLoad>
            <img src={data[0].imageUrl} height="100%" />
          </LazyLoad>

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
          <Grid item xs={6} sm={4}>
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
              <LazyLoad>
                <img
                  src={item.imageUrl}
                  className={"image"}
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </LazyLoad>

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
