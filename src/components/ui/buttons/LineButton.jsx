import { Typography, Divider, Box, Link } from "@mui/material";

export default function LineButton({ btnTxt, width, url }) {
  return (
    <Link underline="none" href={url}>
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
            transition: "0.7s",
          }}
          style={{
            fontFamily: "Work Sans",
            fontWeight: "bold",
          }}
        >
          {btnTxt.toUpperCase()}
        </Typography>
      </Box>
    </Link>
  );
}
