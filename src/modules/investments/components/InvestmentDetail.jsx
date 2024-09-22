import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { BarGraph } from './BarGraph';

export const InvestmentDetail = ({ investmentsDetail }) => {
    const profit = investmentsDetail?.isProfitOrLose === "profit";

    return (
        <Box className="investmentDetail-container">
            <Grid container spacing={2}>
                <Grid className="investmentDetail-div1" item md={5} lg={5} xl={5} xs={5}>
                    {!investmentsDetail?.isProfitOrLose && <Typography variant='h2'> ₹ {investmentsDetail.amount}</Typography>}
                    {investmentsDetail?.isProfitOrLose && <Typography variant='h2' sx={{ color: profit ? "green" : "red" }}>
                        {profit ? "+" : "-"}₹ {investmentsDetail.amount}
                    </Typography>}
                    <Typography variant='body1' sx={{ color: "#FFFFFF66" }}>{investmentsDetail.name}</Typography>
                </Grid>
                <Grid item md={7} lg={7} xl={7} xs={7}>
                    <BarGraph color={investmentsDetail.color} />
                </Grid>
            </Grid>
        </Box>
    )
}
