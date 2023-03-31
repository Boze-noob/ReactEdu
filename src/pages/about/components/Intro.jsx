import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Intro() {
  return (
    <Box width={"100%"} position={"relative"} height={"135vh"}>
      <Image
        top={{ xs: "1%", sm: "5%" }}
        right={"5%"}
        url={
          "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/pages/sj_about_image_01.png"
        }
        width={{ xs: "80%", sm: "60%" }}
      />

      <Typography
        sx={{
          top: { xs: "2%", sm: "10%" },
          left: "10%",
          position: "absolute",
          typography: { xs: "h5", sm: "h4", md: "h3" },
          whiteSpace: "pre-wrap",
        }}
        fontWeight={"bold"}
      >
        {'"DREAM \n BELIEVE \n ACHIEVE."'}
      </Typography>

      <Image
        bottom={{ xs: "0%", sm: "5%" }}
        left={{ xs: "35%", sm: "25%", md: "10%" }}
        url={
          "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/pages/sj_about_image_02.png"
        }
        width={{ xs: "60%", sm: "35%", md: "30%" }}
      />

      <Box
        position={"absolute"}
        sx={{
          width: { xs: "100%", md: "55%" },
          pr: { xs: "0%", sm: "5%" },
          bottom: { xs: "30%", sm: "35%", md: "10%" },
          right: { xs: "0%", sm: "1%" },
        }}
      >
        <Typography whiteSpace={"pre-wrap"} pl={"3%"}>
          {
            "HELLO!\nI am Julie (a.k.a Jules), welcome to my little world, Sincerely Jules, where you’ll see bits and pieces of my outfits, my fun travels, my favorite products, my beauty tips & tricks, parts of my home, sneak peaks of cool collabs, launches + more! Sincerely Jules is my happy place where I love to share parts of my life with you and bring you along for the ride! You have become my secondary family and I want you to feel like we are close friends and that I can share anything with you! It's a place where dreaming big is always encouraged and following your heart is too! I hope sharing with you parts of my life and journey, can somehow inspire you to live out your own dreams! It’s an open journal to you, I hope you enjoy it & it becomes your daily read because I always love having you come by. \n \n With love, \n Jules"
          }
        </Typography>
      </Box>

      <Divider />
    </Box>
  );
}

function Image({ url, top, right, bottom, left, width, height }) {
  return (
    <Box
      component="img"
      src={url}
      sx={{
        objectFit: "fill",
        width: width,
      }}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      position={"absolute"}
    />
  );
}
