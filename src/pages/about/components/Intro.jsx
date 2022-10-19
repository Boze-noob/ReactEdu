import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Intro() {
  return (
    <Box width={"100%"} position={"relative"} bgcolor={"red"}>
      <Typography top={"2%"} left={"5%"} position={"absolute"}>
        {"DREAM \nBELIEVE \nACHIEVE"}
      </Typography>
      <Image
        url={
          "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/pages/sj_about_image_01.png"
        }
        top={"2%"}
        right={"0%"}
        width={{ xs: 100, sm: 200 }}
      />
      <Image
        url={
          "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/pages/sj_about_image_02.png"
        }
        top={"20%"}
        left={"0%"}
        width={{ xs: 100, sm: 200 }}
      />
      <Typography top={"20%"} left={"0%"} position={"absolute"}>
        {
          "HELLO! I am Julie (a.k.a Jules), welcome to my little world, Sincerely Jules, where you’ll see bits and pieces of my outfits, my fun travels, my favorite products, my beauty tips & tricks, parts of my home, sneak peaks of cool collabs, launches + more! Sincerely Jules is my happy place where I love to share parts of my life with you and bring you along for the ride! You have become my secondary family and I want you to feel like we are close friends and that I can share anything with you! It's a place where dreaming big is always encouraged and following your heart is too! I hope sharing with you parts of my life and journey, can somehow inspire you to live out your own dreams! It’s an open journal to you, I hope you enjoy it & it becomes your daily read because I always love having you come by. With love,Jules"
        }
      </Typography>
      <Divider />
    </Box>
  );
}

function Image({ url, top, right, left, width }) {
  return (
    <Box
      component="img"
      src={url}
      sx={{
        objectFit: "fill",
        width: width,
        height: 300,
      }}
      top={top}
      right={right}
      left={left}
      position={"absolute"}
    />
  );
}
