import React, { useEffect, useState } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { LogoSection } from '../LogoSection';

export const Header = ({ toggleDrawer, isMobile }) => {
    const [scrolled, setScrolled] = useState(false);
    const [color, setColor] = useState({ h1: "#fff", h2: "#fff" });

    const theme = useTheme();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);


    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: isMobile ? 'none' : 'transparent',
                backdropFilter: "blur(10px)",
                transition: '0.3s',
                position: "fixed",
                boxShadow: scrolled ? `0px 0px -1px 0px ${theme.palette.secondary.light}` : 'none',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar>
                <Container sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="span" sx={{ flexGrow: 1 }}>
                        <LogoSection />
                    </Box>
                    {!isMobile && <Box sx={{ display: "flex", cursor: "pointer" }}>
                        <Typography sx={{ ':hover': { color: theme.palette.secondary[200] } }}
                            mr={2} variant="subtitle1" component="div">
                            About Us
                        </Typography>
                        <Typography sx={{ ':hover': { color: theme.palette.secondary[200] } }}
                            mr={2} variant="subtitle1" component="div">Contact Us</Typography>
                    </Box>}
                    {isMobile && <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>}
                </Container>
            </Toolbar>
        </AppBar>
    )
}

