import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { SideBar } from './SideBar';
import { Header } from './Header';
import { useMobile } from 'components/hooks/Hook';
import { Container } from '@mui/material';

import "../style/style.css";

const HomeWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.paper,
    minHeight: '100vh'
}));

export const HomeLayout = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMobile();

    return (
        <HomeWrapper>
            <Header isMobile={isMobile} toggleDrawer={() => setDrawerOpen(!drawerOpen)} />
            <SideBar open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />
            <Container className='home-container' maxWidth={false} sx={{
                width: '100%',
                maxWidth: '100%'
            }}>
                <Outlet />
            </Container>
        </HomeWrapper>
    )
}

