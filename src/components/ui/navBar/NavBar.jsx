import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import useScrollTrigger from "@mui/material/useScrollTrigger";

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
          <IconButton>
            <MenuIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
          </IconButton>
          <Typography
            sx={{ typography: { xs: "h5", sm: "h4" } }}
            color="primary"
          >
            News
          </Typography>
          <Button>
            <Typography variant="h7">Shop</Typography>
            <Box sx={{ width: { sm: 5, md: 10 } }} />
            <ShoppingBasketIcon sx={{ fontSize: { xs: 20, sm: 25 } }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
