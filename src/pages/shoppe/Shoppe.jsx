import React from "react";
import { useState } from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import NavBar from "../../components/ui/navBar/NavBar.jsx";
import { Box } from "@mui/material";
import ShoppeSideMenu from "./components/ShoppeSideMenu.jsx";
import ShopperArticleList from "./components/ShopperArticleList.jsx";
import { useCallback } from "react";

export default function ShoppePage() {
  const [title, setTitle] = useState("Shop All");
  const setNewTitle = useCallback(
    (title) => {
      setTitle(title);
    },
    [title]
  );

  return (
    <>
      <PageTitle title={title} />
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "row", mt: "4%" }}
      >
        <Box sx={{ width: "25%", pl: { xs: "2%", sm: "4%", lg: "8%" } }}>
          <ShoppeSideMenu />
        </Box>
        <Box sx={{ width: "75%" }}>
          <ShopperArticleList />
        </Box>
      </Box>
    </>
  );
}
