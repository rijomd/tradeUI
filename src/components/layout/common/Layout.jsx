import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { Header } from './header/Header';
import { DrawerWidthCommon } from 'themes/constants/ThemeConstants';
import { Sidebar } from './sideBar/SideBar';

import '../style/style.css';

const MainStyled = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, leftDrawerOpened, mt }) => ({
    ...theme.typography.body1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: mt + 1,
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
    [theme.breakpoints.between('sm', 'md')]: {
        width: `100%`,
        padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        width: `100%`,
        padding: '16px',
    }
}));




const Layout = () => {
    const theme = useTheme();
    const [leftDrawerOpened, setLeftDrawerOpened] = useState(false);
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            setDivHeight(divRef.current.clientHeight);
        }
    }, []);

    const handleLeftDrawerToggle = () => {
        setLeftDrawerOpened(!leftDrawerOpened);
    }

    const sideBar = useMemo(() => (
        <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
    ), [leftDrawerOpened])

    const Main = React.memo(({ leftDrawerOpened, content }) => {
        return (
            <MainStyled theme={useTheme()} leftDrawerOpened={leftDrawerOpened} mt={divHeight}>
                {content}
            </MainStyled>
        );
    });

    return (
        <Box sx={{ minHeight: "100vh", display: "flex" }}>
            <CssBaseline />
            <AppBar
                id="grow-app-bar"
                ref={divRef}
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar sx={{ padding: 1 }}>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
            {sideBar}
            <Main leftDrawerOpened={leftDrawerOpened} content={<Outlet />} />
        </Box>
    )
}

export default Layout;