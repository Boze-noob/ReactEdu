import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function PolicieItem({ title, paragraphs }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        fontFamily={"Work Sans"}
        sx={{ mt: { xs: "10%", sm: "3%" } }}
      >
        {title}
      </Typography>

      {paragraphs.map((listItem, index) => (
        <Typography
          textAlign={"center"}
          sx={{
            ml: { xs: "10%", sm: "20%" },
            mr: { xs: "10%", sm: "20%" },
            mt: { xs: "10%", sm: "3%" },
          }}
          fontSize={15}
        >
          {listItem}
        </Typography>
      ))}
    </Box>
  );
}
