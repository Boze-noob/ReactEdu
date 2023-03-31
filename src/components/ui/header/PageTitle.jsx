import { Typography, Box, Divider } from "@mui/material";

export default function PageTitle({ title }) {
  return (
    <>
      <Divider sx={{ mt: { xs: "16%", sm: "10%", md: "7%" } }} />
      <Box width={"100%"} sx={{ my: { xs: 5, sm: 10 } }}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            typography: { sx: "h6", sm: "h5" },
            textAlign: "center",
          }}
        >
          {title.toUpperCase() ?? "TITLE"}
        </Typography>
      </Box>
      <Divider />
    </>
  );
}
