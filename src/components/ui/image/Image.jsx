import { Box } from "@mui/material";

export const CustomImage = ({
  src,
  marginTop,
  width,
  padding,
  paddingLeft,
  paddingBottom,
}) => {
  return (
    <Box
      component="img"
      sx={{
        width: width,
        paddingLeft: paddingLeft,
        paddingBottom: paddingBottom,
      }}
      src={src}
      style={{ objectFit: "fill" }}
      mt={marginTop ?? "5%"}
      p={padding ?? "0%"}
    />
  );
};
