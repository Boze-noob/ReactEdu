import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const CustomImage = ({
  src,
  marginTop,
  width,
  height,
  padding,
  paddingLeft,
  paddingBottom,
  imgFit,
}) => {
  return (
    <Box
      component="img"
      alt=""
      sx={{
        width: width,
        height: height ?? "auto",
        paddingLeft: paddingLeft,
        paddingBottom: paddingBottom,
      }}
      src={src}
      style={{ objectFit: imgFit ?? "cover" }}
      mt={marginTop ?? "5%"}
      p={padding ?? "0%"}
      loading="lazy"
    />
  );
};

export const CustomArticleDetailsImage = ({
  src,
  marginTop,
  width,
  height,
  padding,
  paddingLeft,
  paddingBottom,
  imgFit,
}) => {
  return (
    <Box>
      <LazyLoadImage
        key={src}
        src={src}
        style={{
          marginTop: marginTop ?? "5%",
          padding: padding ?? "0%",
          paddingLeft: paddingLeft ?? "0%",
          paddingBottom: paddingBottom ?? "0%",
          objectFit: imgFit ?? "cover",
        }}
        height={height ?? "auto"}
        width={width}
        loading="lazy"
        alt=""
        effect="blur"
        placeholderSrc={src}
      />
    </Box>
  );
};
