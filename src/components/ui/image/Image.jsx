import { Box } from "@mui/material";

export const CustomImage = ({ src, marginTop, width, padding, height }) => {
  return (
    <Box
      component="img"
      sx={{
        width: width,
      }}
      src={src}
      style={{ objectFit: "fill" }}
      mt={marginTop ?? "5%"}
      p={padding ?? "0%"}
    />
  );
};
