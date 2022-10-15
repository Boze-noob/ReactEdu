import { Typography, Box, Divider } from "@mui/material";

export default function PageTitle({ title }) {
  return (
    <>
      <Divider sx={{ mt: "35%" }} />
      <Box width={"100%"}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            typography: { sx: "h4", sm: "h5" },
            textAlign: "center",
          }}
        >
          {title ?? "Title"}
        </Typography>
      </Box>
      <Divider />
    </>
  );
}
