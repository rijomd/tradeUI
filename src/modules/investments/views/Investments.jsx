import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { PageOutLine } from 'components/pageOutline/PageOutLine';
import { InvestmentDetail } from '../components/InvestmentDetail';
import { PieChart } from '../components/PieChart';

import { NormalTable } from 'components/Table/Table';
import { NewsFeed } from 'modules/home/components/NewsFeed';
import news from "assets/images/newsletter.jpg"

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

    const tableHeader = [
        {
            name: "slNo",
            label: "Sl No",
            renderComponent: (item) => {
                console.log(item);
            },
            type: "text"
        },
        {
            name: "company",
            label: "Company",
            type: "text"
        },
        {
            name: "cmp",
            label: "CMP Rs",
            type: "text"
        },
        {
            name: "pe",
            label: "P/E",
            type: "text"
        },
        {
            name: "charges",
            label: "Charges",
            type: "text"
        },
        {
            name: "value",
            label: "UnRealized",
            type: "text"
        },
    ];

    const tableData = [
        { slNo: "1", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "2", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "3", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "4", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "5", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "6", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "7", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "8", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "9", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
        { slNo: "10", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" },
    ];

    const newsData = {
        subTitle: "industry's standard",
        content: "Simply dummy text of the printing and It has survived not only five centuries, but also the leap into electronic ," +
            "Simply dummy text of the printing and It has survived not only five centuries, but also the leap into electronic " +
            "Simply dummy text of the printing and It has survived not only five centuries, but also the leap into electronic " +
            "Simply dummy text of the printing and It has survived not only five centuries, but also the leap into electronic " +
            "Simply dummy text of the printing and It has survived not only five centuries, but also the leap into electronic " +
            "Simply dummy text of the printing and It has survived not only five centuries, but also the leap into electronic ",
        imageUrl: news,
    };

    return (
        <>
            <PageOutLine title="Investments">
                <Grid container spacing={2} pt={2}>

                    {investmentsDetails.map((item, index) => {
                        return <Grid key={index} item md={4} lg={4} xl={4} xs={12} sm={4}>
                            <InvestmentDetail investmentsDetail={item} />
                        </Grid>
                    })}

                    {investmentGraphData.map((item, index) => {
                        return <Grid key={index} item md={4} lg={4} xl={4} xs={12} sm={4}>
                            <PieChart graphData={item} />
                        </Grid>
                    })}

                    <Grid item md={8} lg={8} xl={8} xs={12} sm={8}>
                        <NormalTable tableHeader={tableHeader} tableData={tableData} />
                    </Grid>

                    <Grid item md={4} lg={4} xl={4} xs={12} sm={4}>
                        <Box className='news-letter-container' p={2} sx={{ boxShadow: "0px 10px 20px 0px #00000040", background: "#181818" }}>
                            <Typography variant='h5' pb={2}>Did you know ?.</Typography>
                            <NewsFeed item={newsData} isHideButton characters={75} />
                        </Box>
                    </Grid>

                </Grid>
            </PageOutLine>
        </>
    )
}

export default Investments;
