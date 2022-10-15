import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function PolicieItem({ title, paragraphs }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography textAlign={"center"}>{title}</Typography>

      {paragraphs.map((listItem, index) => (
        <Typography textAlign={"center"} marginLeft={"20%"} marginRight={"20%"}>
          {listItem}
        </Typography>
      ))}
    </Box>
  );
}
