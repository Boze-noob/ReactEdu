import React, { useState } from "react";
import { List, ListItem, Collapse, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { MenuData } from "../data/MenuData";
import { hasChildren } from "../../../utils/utils";
import { changeCategoryShoppeService } from "../../../services/ShoppeService";
import { useShoppeStore } from "../../../stores/ShoppeStore";
import * as Items from "../../../types/enumerations/shopMenu";
import { isMobile } from "react-device-detect";

export default function ShoppeSideMenu() {
  let menuDataCopy = MenuData;
  if (isMobile) {
    menuDataCopy = [
      {
        title: Items.ShopMenuEnum.FILTER_SHOPPE,
        items: menuDataCopy,
      },
    ];
  }

  return menuDataCopy.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  const selectedCategory = useShoppeStore((state) => state.selectedCategory);

  return (
    <ListItem onClick={() => changeCategoryShoppeService(item.title)}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: 11, sm: 13 },
          fontFamily: "Work Sans",
          cursor: "pointer",
          textDecoration:
            selectedCategory === item.title && "underline #F4EADF",
          textDecorationThickness: "7px",
        }}
      >
        {item.title}
      </Typography>
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box>
      <ListItem onClick={handleClick}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: 11, sm: 13 },
            fontFamily: "Work Sans",
            cursor: "pointer",
          }}
        >
          {item.title}
        </Typography>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ pl: "10%" }}>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </Box>
  );
};
