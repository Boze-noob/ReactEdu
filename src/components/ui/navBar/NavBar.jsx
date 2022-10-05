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
            <MenuIcon
              sx={{
                fontSize: { xs: 20, sm: 30 },
                color: trigger ? "black" : "white",
              }}
            />
          </IconButton>
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
              variant="h7"
              style={{
                fontFamily: "Work Sans",
                color: trigger ? "black" : "white",
              }}
            >
              Shop
            </Typography>
            <Box sx={{ width: { sm: 5, md: 10 } }} />
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
