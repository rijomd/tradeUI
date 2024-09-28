import React from 'react';
import { Grid } from '@mui/material';

import { PageOutLine } from 'components/pageOutline/PageOutLine';
import { InvestmentDetail } from '../components/InvestmentDetail';
import { PieChart } from '../components/PieChart';

import "../style/style.css";
import { NormalTable } from 'components/Table/Table';

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
                    <Grid item md={12} lg={12} xl={12} xs={12} >
                        <NormalTable tableHeader={tableHeader} tableData={tableData} />
                    </Grid>
                </Grid>
            </PageOutLine>
        </>
    )
}

export default Investments;
