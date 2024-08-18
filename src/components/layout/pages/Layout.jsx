import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export const Layout = () => {
    const theme = useTheme();

    return (
        <div>
            <Outlet />

        </div>
    )
}

