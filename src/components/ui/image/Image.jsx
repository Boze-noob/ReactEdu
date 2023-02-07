import { Box } from "@mui/material";

export const CustomImage = ({
  src,
  marginTop,
  width,
  padding,
  paddingLeft,
  paddingBottom,
  imgFit = "cover",
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
      style={{ objectFit: imgFit }}
      mt={marginTop ?? "5%"}
      p={padding ?? "0%"}
    />
  );
};
