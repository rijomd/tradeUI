import React from 'react';
import { Grid } from '@mui/material';

import { PageOutLine } from 'components/pageOutline/PageOutLine';
import { InvestmentDetail } from '../components/InvestmentDetail';
import { PieChart } from '../components/PieChart';

import "../style/style.css";

const Investments = () => {

    const investmentsDetails = [
        {
            amount: 180000,
            name: "Total Investments",
            color: "#C200AB"
        },
        {
            amount: 280000,
            name: "Current Value",
            color: "#118FA8"

        },
        {
            amount: 100000,
            name: "Unrealized P & L",
            isProfitOrLose: "profit",
            color: "#047400"
            // color: "red"
        }
    ];

    const investmentGraphData = [
        {
            title: "Amount",
            labels: ['Red', 'Blue', 'Green'],
            backgroundColor: ["#A1008E", "#1AA6C2", "#047400"],
            data: [300, 50, 100],
        },
        {
            title: "Sectors",
            labels: ['Red', 'Blue', 'Green'],
            backgroundColor: ["#A1008E", "#1AA6C2", "#047400"],
            data: [300, 50, 100],
        },
        {
            title: "Stocks",
            labels: ['Red', 'Blue', 'Green'],
            backgroundColor: ["#A1008E", "#1AA6C2", "#047400"],
            data: [300, 50, 100],
        }
    ];

    return (
        <>
            <PageOutLine title="Investments">
                <Grid container spacing={2} pt={2}>

                    {investmentsDetails.map((item, index) => {
                        return <Grid key={index} item md={4} lg={4} xl={4} xs={12} sm={12}>
                            <InvestmentDetail investmentsDetail={item} />
                        </Grid>
                    })}

                    {investmentGraphData.map((item, index) => {
                        return <Grid key={index} item md={4} lg={4} xl={4} xs={12} sm={12}>
                            <PieChart graphData={item} />
                        </Grid>
                    })}

                </Grid>
            </PageOutLine>
        </>
    )
}

export default Investments;
