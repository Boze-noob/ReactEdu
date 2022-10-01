import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramGrid from "./../grid/InstagramGrid";

export default function Footer() {
  return (
    <>
     <InstagramGrid />
    <Box
      sx={{
        width: "100%",
        justifyContent: "space-around",
        background: "#f4eadf",
        display: "flex",
        flexDirection: "row",
        pt: 35,
        pb: 20,
      }}
    >
      <SocialMediaBox />
      <CopyrightBox />
      <InfoBox />
    </Box>
    </>
  );
}

function SocialMediaBox() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 0.2,
        justifyContent: "center",
      }}
    >
      <InstagramIcon sx={{ m: 10 }} />
      <TwitterIcon sx={{ m: 10 }} />
      <PinterestIcon sx={{ m: 10 }} />
    </Box>
  );
}

function CopyrightBox() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 0.6,
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" textAlign={"center"}>
          Sincerly Julies
        </Typography>
        <Typography textAlign={"center"} sx={{ mt: 15 }}>
          @Copyright 2022 Sincerly Julies
        </Typography>
      </Box>
    </Box>
  );
}

function InfoBox() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 0.2,
        justifyContent: "center",
      }}
    >
      <Typography sx={{ m: 7 }}>About</Typography>
      <Typography sx={{ m: 7 }}>Policies</Typography>
      <Typography sx={{ m: 7 }}>Contact</Typography>
    </Box>
  );
}
