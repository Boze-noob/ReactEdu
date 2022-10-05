import { Box, Typography, Divider, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getInstagramInfo } from "../../../redux/footerRedux/actions";
import "./css/GridOnHover.css";
import { useEffect } from "react";

export default function InstagramGrid() {
  const dispatch = useDispatch();
  const instagramInfoList = useSelector((state) => state.instagramInfoList);
  useEffect(() => {
    dispatch(getInstagramInfo());
  }, []);

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
      <ImagesGrid instagramInfoList={instagramInfoList} />
    </Box>
  );
}

function ImagesGrid({ instagramInfoList }) {
  const instagramInfoFilteredList = instagramInfoList.slice(1, 7);
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
      {instagramInfoList.length > 0 ? (
        <img
          src={instagramInfoList[0].imageUrl}
          height="100%"
          style={{ objectFit: "fill" }}
        />
      ) : (
        ""
      )}

      <Grid container spacing={0} rowSpacing={0}>
        {instagramInfoFilteredList.map((item) => (
          <Grid item xs={4}>
            <Box
              sx={{ height: { xs: 125, sm: 300 } }}
              style={{ position: "relative" }}
              className={"container"}
            >
              <img src={item.imageUrl} className={"image"} />
              <div className="overlay">
                <Typography
                  sx={{ typography: { xs: "h6", sm: "h5" } }}
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
