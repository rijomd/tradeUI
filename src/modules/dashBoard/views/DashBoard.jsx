import React from 'react';
import { Grid } from '@mui/material';

import NiftyChart from '../components/NiftyChart';
import { PageOutLine } from 'components/pageOutline/PageOutLine';

const DashBoard = ({ }) => {

    return (
        <>
            <PageOutLine title="Indices">
                <Grid container spacing={2}>
                    <Grid item md={12} lg={12} xl={12} xs={12}>
                        <NiftyChart />
                    </Grid>
                </Grid>
            </PageOutLine>
        </>
    )
}

export default DashBoard;
