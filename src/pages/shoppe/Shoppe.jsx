import React from "react";
import { useState } from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import { Box } from "@mui/material";
import ShoppeSideMenu from "./components/ShoppeSideMenu.jsx";
import ShopperArticleList from "./components/ShopperArticleList.jsx";
import { useShoppeStore } from "../../stores/ShoppeStore.js";

export default function ShoppePage() {
  const selectedCategory = useShoppeStore((state) => state.selectedCategory);

  return (
    <>
      <PageTitle title={selectedCategory} />
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
