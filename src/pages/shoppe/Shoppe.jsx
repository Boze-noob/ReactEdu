import React, { useEffect } from "react";
import PageTitle from "../../components/ui/header/PageTitle.jsx";
import { Box } from "@mui/material";
import ShoppeSideMenu from "./components/ShoppeSideMenu.jsx";
import ShopperArticleList from "./components/ShopperArticleList.jsx";
import { useShoppeStore } from "../../stores/ShoppeStore.js";
import { getAllShoppeService } from "../../services/ShoppeService.js";

export default function ShoppePage() {
  const selectedCategory = useShoppeStore((state) => state.selectedCategory);

  useEffect(() => {
    getAllShoppeService(selectedCategory);
  }, []);

  return (
    <>
      <PageTitle title={selectedCategory} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          mt: "4%",
        }}
      >
        <Box
          sx={{
            width: { xs: 1, sm: "25%" },
            pl: { sm: "4%", lg: "8%" },
            mb: { xs: "5%", sm: 0 },
            justifyContent: { xs: "center", sm: "start" },
            alignItems: { xs: "center", sm: "start" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ShoppeSideMenu />
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "75%" } }}>
          <ShopperArticleList />
        </Box>
      </Box>
    </>
  );
}
