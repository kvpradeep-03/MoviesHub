// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import fire from '../../assets/fire.png';
import star from '../../assets/glowing-star.png';
import party from '../../assets/partying-face.png';
import MenuIcon from '@mui/icons-material/Menu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import HotelClassIcon from '@mui/icons-material/HotelClass';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import { theme } from '../../theme';
import SwitchMode from '../../SwitchMode';

const Navbar = ({ mode, setMode }) => {
    const [open, setOpen] = useState(false);

    const navItems = ['Home', 'About', 'Contact'];

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        marginNBottom: "10px",
    
    })

    return (

        // <nav className="navbar">
        //     <h1>MoviesHub</h1>

        //     <div className="menu-toggle" onClick={toggleMenu}>
        //         <MenuIcon fontSize="large" />
        //     </div>

        //     <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        //         <a href="#">Popular <TrendingUpIcon className='nav-emoji' /></a>
        //         <a href="#">Top Rated <HotelClassIcon className='nav-emoji' /></a>
        //         <a href="#">Upcoming <UpcomingIcon className='nav-emoji' /></a>
        //     </div>
        // </nav>

        <AppBar sx={{ bgcolor: 'background.default', color: 'text.primary', position: 'sticky' }}>
            <StyledToolbar >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                >
                    MoviesHub
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, color: 'text.primary' }}>

                    <Button sx={{ color: 'inherit' }}>Home</Button>
                    <Button sx={{ color: 'inherit' }}>My Account</Button>
                    <Button sx={{ color: 'inherit' }}>Logout</Button>
                    {/** TODO: Fix icon Glide issue*/}
                    <Button sx={{ color: 'inherit' }}>
                        <SwitchMode setMode={setMode} mode={mode} />
                    </Button>

                </Box>
                <IconButton
                    edge="end"
                    onClick={e => setOpen(true)}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </StyledToolbar>



            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClick={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem sx={{ color: 'text.primary' }}>Home</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
                <MenuItem sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <SwitchMode setMode={setMode} mode={mode} />
                </MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
