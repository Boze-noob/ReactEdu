import { Box, Typography, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramGrid from "./../grid/InstagramGrid";
import { Link } from "react-router-dom";
import * as Routes from "../../../pages/router/Routes";

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
        <PageNameBox />
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
      <Button
        target="_blank"
        href={"https://www.instagram.com/sincerelyjules/"}
      >
        <InstagramIcon sx={{ m: 10 }} />
      </Button>
      <Button target="_blank" href={"https://twitter.com/sincerelyJules"}>
        <TwitterIcon sx={{ m: 10 }} />
      </Button>
      <Button
        target="_blank"
        href={"https://www.pinterest.com/sincerelyjules1/"}
      >
        <PinterestIcon sx={{ m: 10 }} />
      </Button>
    </Box>
  );
}

function PageNameBox() {
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
        <Typography
          variant="h5"
          textAlign={"center"}
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: "#49494a",
            },
          }}
        >
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
      <Link to={Routes.ABOUT_ROUTE} style={{ textDecoration: "none" }}>
        <Button variant="text" sx={{ m: 7, fontFamily: "Work Sans" }}>
          About
        </Button>
      </Link>
      <Link to={Routes.POLICIES_ROUTE} style={{ textDecoration: "none" }}>
        <Button variant="text" sx={{ m: 7, fontFamily: "Work Sans" }}>
          Policies
        </Button>
      </Link>
      <Link to={Routes.CONTACT_ROUTE} style={{ textDecoration: "none" }}>
        <Button variant="text" sx={{ m: 7, fontFamily: "Work Sans" }}>
          Contact
        </Button>
      </Link>
    </Box>
  );
}
