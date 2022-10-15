import React, { useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Drawer,
  Typography,
} from "@mui/material";
import {
  categoryItems,
  shopItems,
  copyrightItems,
  socialMediaItems,
} from "../../../data/SidebarData.js";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function App() {
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger();

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box component="div" sx={{ ml: 45, mt: 20, width: { xs: 120, sm: 250 } }}>
      <IconButton onClick={toggleSlider}>
        <CloseIcon
          sx={{
            fontSize: { xs: 17, sm: 27 },
            color: "#5C5C5C",
          }}
        />
      </IconButton>
      <SideBarItem items={categoryItems} toggleSlider={toggleSlider} />
      <SideBarItem items={shopItems} toggleSlider={toggleSlider} />
      <SideBarItem items={copyrightItems} toggleSlider={toggleSlider} />
      <SocialMediaSideBarItem items={socialMediaItems} />
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <Box component="nav">
        <IconButton onClick={toggleSlider}>
          <MenuIcon
            sx={{
              fontSize: { xs: 20, sm: 30 },
              color: trigger ? "black" : "white",
            }}
          />
        </IconButton>

        <Drawer open={open} anchor="left" onClose={toggleSlider}>
          {sideList()}
        </Drawer>
      </Box>
    </>
  );
}

function SideBarItem({ items, toggleSlider }) {
  return (
    <>
      <Divider />
      <List>
        {items.map((listItem, index) => (
          <ListItem
            button
            key={index}
            sx={{ p: 0, m: 0 }}
            onClick={toggleSlider}
          >
            <Link to={listItem.route} style={{ textDecoration: "none" }}>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 14 },
                      fontWeight: "600",
                      fontFamily: "Work Sans",
                      color: "black",
                      mt: 5,
                    }}
                  >
                    {listItem.text}
                  </Typography>
                }
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

function SocialMediaSideBarItem({ items }) {
  return (
    <>
      <Divider />
      <List>
        {items.map((listItem, index) => (
          <ListItem button key={index} sx={{ p: 0, m: 0 }}>
            <a href={listItem.route} style={{ textDecoration: "none" }}>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 14 },
                      fontWeight: "600",
                      fontFamily: "Work Sans",
                      color: "black",
                      mt: 5,
                    }}
                  >
                    {listItem.text}
                  </Typography>
                }
              />
            </a>
          </ListItem>
        ))}
      </List>
    </>
  );
}
