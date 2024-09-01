import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Container sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Outlet />
        </Container>
    )
}

export default Layout;
