import React from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import NavBar from "../../components/ui/navBar/NavBar.jsx";
import { Box } from "@mui/material";
import ShoppeSideMenu from "./components/ShoppeSideMenu.jsx";
import ShopperArticleList from "./components/ShopperArticleList.jsx";

export default function ShoppePage() {
  return (
    <>
      <NavBar primaryColor={"black"} secondaryColor={"black"} />
      <PageTitle title={"SHOP"} />
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "row", mt: "4%" }}
      >
        <Box sx={{ width: "25%", pl: "8%" }}>
          <ShoppeSideMenu />
        </Box>
        <Box sx={{ width: "75%" }}>
          <ShopperArticleList />
        </Box>
      </Box>
    </>
  );
}
