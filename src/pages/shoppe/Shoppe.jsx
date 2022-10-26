import React from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import NavBar from "../../components/ui/navBar/NavBar.jsx";
import { Box } from "@mui/material";
import ShoppeSideMenu from "./components/ShoppeSideMenu.jsx";

export default function ShoppePage() {
  return (
    <>
      <NavBar primaryColor={"black"} secondaryColor={"black"} />
      <PageTitle title={"SHOP"} />
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "20%", height: 100 }}>
          <ShoppeSideMenu />
        </Box>
        <Box sx={{ width: "80%", height: 100, bgcolor: "blue" }}></Box>
      </Box>
    </>
  );
}
