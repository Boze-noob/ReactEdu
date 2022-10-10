import { Box, Typography, Divider } from "@mui/material";

export default function VerticalLineButton({ marginTop }) {
  return (
    <Box
      sx={{
        flexDirection: "column",
        marginTop: marginTop ?? 10,
        alignItems: "center",
        display: "flex",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontFamily: "Work Sans",
          "&:hover": {
            opacity: 0.6,
          },
          transition: "0.7s",
        }}
      >
        LOAD MORE
      </Typography>
      <Box height={20}></Box>
      <Divider orientation="vertical" sx={{ height: 50, bgcolor: "black" }} />
    </Box>
  );
}
