import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import SideMenu from "./components/SideMenu.jsx";
import { Link } from "react-router-dom";
import * as Routes from "../../../pages/router/Routes";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

export default function NavBar({ primaryColor, secondaryColor }) {
  const trigger = useScrollTrigger();
  const navigate = useNavigate();

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
          <Box sx={{ width: "5%" }}>
            <SideMenu
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          </Box>

          <Typography
            sx={{
              typography: { xs: "h6", sm: "h4" },
              fontFamily: "Work Sans",
              color: trigger ? primaryColor : secondaryColor,
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            SINCERLY JULES
          </Typography>
          <Box sx={{ width: "5%" }}>
            <Link to={Routes.SHOPPE_ROUTE} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "transparent",
                    "& .txt": {
                      color: "black",
                    },
                    "& .icon": {
                      fill: "black",
                    },
                  },
                }}
              >
                <Typography
                  className="txt"
                  sx={{
                    fontFamily: "Work Sans",
                    color: trigger ? primaryColor : secondaryColor,
                    fontWeight: "500",
                    fontSize: { xs: 10, sm: 15 },
                    transition: "0.7s",
                  }}
                >
                  Shop
                </Typography>
                <Box sx={{ width: { xs: 5, md: 10 } }} />
                <ShoppingBasketIcon
                  className="icon"
                  sx={{
                    fontSize: { xs: 15, sm: 20 },
                    color: trigger ? primaryColor : secondaryColor,
                    transition: "0.7s",
                  }}
                />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
