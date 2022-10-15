import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import SideMenu from "./components/SideBar.jsx";

export default function NavBar(props) {
  const trigger = useScrollTrigger();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          boxShadow: "none",
          background: trigger ? "white" : "transparent",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 15, sm: 45 },
            py: 15,
          }}
        >
          <SideMenu />
          <Typography
            sx={{ typography: { xs: "h6", sm: "h4" } }}
            style={{
              fontFamily: "Work Sans",
              color: trigger ? "black" : "white",
            }}
          >
            SINCERLY JULES
          </Typography>
          <Button>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                color: trigger ? "black" : "white",
                fontWeight: "500",
                fontSize: { xs: 10, sm: 15 },
              }}
            >
              Shop
            </Typography>
            <Box sx={{ width: { xs: 5, md: 10 } }} />
            <ShoppingBasketIcon
              sx={{
                fontSize: { xs: 15, sm: 20 },
                color: trigger ? "black" : "white",
              }}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
