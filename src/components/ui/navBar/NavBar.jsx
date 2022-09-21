import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}} sx={{px: {xs: 15, sm: 45} , py: 25}}>
        <Toolbar sx={{
      justifyContent: "space-between"
    }}>
      <IconButton>
        <MenuIcon sx= {{fontSize: {xs: 20, sm: 30}}}/>
      </IconButton>
          <Typography variant='h4' color='primary'>
            News
          </Typography>
          <Button>
            <Typography variant='h7'>Shop</Typography>
            <Box sx= {{width: {sm: 5, md: 10}}}/>
            <ShoppingBasketIcon sx= {{fontSize: {xs: 20, sm: 25}}}/>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}