import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Content() {
  return (
    <Box width={"100%"} height={"135vh"} position={"relative"}>
      <Typography
        sx={{
          top: { xs: "2%", sm: "5%" },
          left: "5%",
          position: { xs: "static", sm: "absolute" },
          whiteSpace: "pre-wrap",
          width: { xs: "100%", sm: "55%" },
        }}
        textAlign={"center"}
      >
        {
          '"I launched my blog in 2009 while attending FIDM where I studied Visual Communications. At the time, I was also interning at WGSN, assisting a few celebrity stylists, working a 9-5, and attending college. It was a lot! I remember starting to feel overwhelmed with everything on my plate and felt like I was not being as creative as I wanted to be. \n \n My sister suggested I start a fashion blog to help me fulfill this void, so I went for it! I had no idea what I was doing but figured it out as I went. It was hard to juggle everything all at once but the blog gave me a sense of peace and freedom that I did not get with anything else so it kept me going. Being able to have my blog as a creative outlet helped me stay inspired and grow creatively. \n \n Now 12 years & over 5.7M+ followers later, I am so humbled to have this little blog here because it changed my life forever. This blog will forever hold a special place in my heart! Since the beginning of SJ, I have always stayed true to myself and do things I genuinely love and believe in, but most importantly, I always follow my heart no matter what. \n \n If there is one thing I would love for you to take away from visiting my blog is that YOU CAN DO ANYTHING you set your mind to! Believe in yourself and never give up even if it feels unreachable, trust the process and be patient and you will see results! As I always say DREAM, BELIEVE, ACHIEVE!"'
        }
      </Typography>
      <Image
        top={"0%"}
        right={"0%"}
        url={
          "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/pages/sj_about_image_03.png"
        }
        width={"33%"}
        visibility={{ xs: "hidden", sm: "visible" }}
      />

      <Image
        bottom={"0%"}
        left={"5%"}
        url={
          "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/pages/sj_about_image_04.png"
        }
        width={"50%"}
        visibility={{ xs: "visible", sm: "hidden", md: "visible" }}
      />

      <Box
        bottom={"10%"}
        sx={{
          width: "35%",
          position: { xs: "static", sm: "absolute" },
          visibility: { xs: "hidden", sm: "visible" },
          right: { sm: "5%", md: "15%" },
        }}
      >
        <Typography whiteSpace={"pre-wrap"} variant={"h4"} fontWeight={500}>
          {'"WHAT YOU LOVE DOING \n SHOULD NEVER FEEL LIKE \n WORK."'}
        </Typography>
      </Box>

      <Divider />
    </Box>
  );
}

function Image({ url, top, right, bottom, left, width, height, visibility }) {
  return (
    <Box
      component="img"
      src={url}
      sx={{
        objectFit: "fill",
        width: width,
        position: "absolute",
        visibility: visibility ?? "visible",
      }}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    />
  );
}
