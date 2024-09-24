import React from 'react';
import { Box, Grid } from '@mui/material';

import NiftyChart from '../components/NiftyChart';
import { PageOutLine } from 'components/pageOutline/PageOutLine';

import "../style/style.css";

const DashBoard = ({ }) => {

    return (
        <>
            <PageOutLine title="Indices">
                <Grid container spacing={1}>
                    <Grid item md={12} lg={12} xl={12} xs={12} >
                        <Box className="tab-container">
                            <button>Nifty 50</button>
                            <button>Bank Nifty</button>
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={12} xl={12} xs={12} >
                        <NiftyChart />
                    </Grid>
                </Grid>
            </PageOutLine>
        </>
    )
}

export default DashBoard;
