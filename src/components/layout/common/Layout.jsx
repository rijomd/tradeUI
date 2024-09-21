import React, { useCallback, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from "@mui/material";

import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { Header } from './header/Header';
import { DrawerWidthCommon } from 'themes/constants/ThemeConstants';
import { Sidebar } from './sideBar/SideBar';

import '../style/style.css';

const MainStyled = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, leftDrawerOpened }) => ({
    ...theme.typography.body1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 88,
    transition: theme.transitions.create(
        'margin',
        leftDrawerOpened
            ? {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }
            : {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }
    ),
    [theme.breakpoints.up('md')]: {
        marginLeft: leftDrawerOpened ? 0 : -(DrawerWidthCommon),
        width: leftDrawerOpened ? `calc(100% - ${DrawerWidthCommon}px)` : '100%'
    },
    [theme.breakpoints.down('md')]: {
        width: leftDrawerOpened ? `calc(100% - ${DrawerWidthCommon}px)` : '100%',
        padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
        width: `100%`,
        padding: '16px',
    }
}));

const Main = React.memo(({ leftDrawerOpened, content }) => {
    return (
        <MainStyled theme={useTheme()} leftDrawerOpened={leftDrawerOpened}>
            {content}
        </MainStyled>
    );
});


const Layout = () => {
    const theme = useTheme();
    const [leftDrawerOpened, setLeftDrawerOpened] = useState(false);
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const handleLeftDrawerToggle = () => {
        setLeftDrawerOpened(!leftDrawerOpened);
    }

    const sideBar = useMemo(() => (
        <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
      ), [leftDrawerOpened])

    return (
        <Box sx={{ minHeight: "100vh", display: "flex" }}>
            <CssBaseline />
            <AppBar
                enableColorOnDark
                position="fixed" color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
            {sideBar}
            <Main leftDrawerOpened={leftDrawerOpened} content={<Outlet />} />
        </Box>
    )
}

export default Layout;