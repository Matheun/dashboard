import * as React from 'react';
import InternetIdentityLogin from "./InternetIdentityLogin";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, flexGrow: 1 }}
          >
            <img src="IC_logo_horizontal.svg" alt="" className='nav-logo' />
          </IconButton>
          <InternetIdentityLogin />
        </Toolbar>
      </AppBar>
    </Box>
  );
}