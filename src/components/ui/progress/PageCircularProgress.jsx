import { CircularProgress, Box } from "@mui/material";

export const PageCircularProgress = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={"8rem"} color={"primary"} />
    </Box>
  );
};
