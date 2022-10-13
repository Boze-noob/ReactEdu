import { Box, Typography, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramGrid from "./../grid/InstagramGrid";

export default function Footer({ marginTop }) {
  return (
    <Box style={{ background: "#f4eadf", marginTop: marginTop ?? 10 }}>
      <InstagramGrid />
      <Box
        sx={{
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#f4eadf",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          pt: 35,
          pb: 20,
        }}
      >
        <SocialMediaBox />
        <CopyrightBox />
        <InfoBox />
      </Box>
      <Typography textAlign={"center"} sx={{ mt: 5, pb: 10 }} fontSize={10}>
        @Copyright 2022 Sincerly Julies
      </Typography>
    </Box>
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
      <Button target="_blank" href={"https://www.youtube.com/"}>
        <InstagramIcon sx={{ m: 10 }} />
      </Button>
      <Button target="_blank" href={"https://www.youtube.com/"}>
        <TwitterIcon sx={{ m: 10 }} />
      </Button>
      <Button target="_blank" href={"https://www.youtube.com/"}>
        <PinterestIcon sx={{ m: 10 }} />
      </Button>
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
      <Button variant="text" sx={{ m: 7, fontFamily: "Work Sans" }}>
        About
      </Button>
      <Button variant="text" sx={{ m: 7, fontFamily: "Work Sans" }}>
        Policies
      </Button>
      <Button variant="text" sx={{ m: 7, fontFamily: "Work Sans" }}>
        Contact
      </Button>
    </Box>
  );
}
