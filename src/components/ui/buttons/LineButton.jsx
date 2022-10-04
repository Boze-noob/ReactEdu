import { Typography } from "@mui/material";
import { Box, Divider } from "@mui/material";

export default function LineButton({ btnTxt, width }) {
  return (
    <Box alignItems="center" sx={{ display: "flex", flexDirection: "row" }}>
      <Divider
        sx={{
          height: 2,
          width: width,
          bgcolor: "white",
        }}
      ></Divider>
      <Typography
        color={"white"}
        sx={{
          pl: 15,
          fontSize: { xs: 8, sm: 16 },
          "&:hover": {
            color: "black",
          },
        }}
      >
        {btnTxt}
      </Typography>
    </Box>
  );
}
