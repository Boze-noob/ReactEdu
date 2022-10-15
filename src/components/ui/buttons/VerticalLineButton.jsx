import { Box, Button, Divider } from "@mui/material";

export default function VerticalLineButton({
  marginTop,
  marginBottom,
  onClick,
}) {
  return (
    <Box
      sx={{
        flexDirection: "column",
        marginTop: marginTop ?? 10,
        marginBottom: marginBottom ?? 10,
        alignItems: "center",
        display: "flex",
      }}
    >
      <Button
        variant="text"
        sx={{
          fontWeight: "bold",
          fontFamily: "Work Sans",
          "&:hover": {
            opacity: 0.6,
          },
          transition: "0.7s",
        }}
        onClick={onClick}
      >
        LOAD MORE
      </Button>
      <Box height={20}></Box>
      <Divider orientation="vertical" sx={{ height: 50, bgcolor: "black" }} />
    </Box>
  );
}
