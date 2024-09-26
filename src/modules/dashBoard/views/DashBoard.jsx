import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import NiftyChart from '../components/NiftyChart';
import { PageOutLine } from 'components/pageOutline/PageOutLine';
import { NormalTable } from 'components/Table/Table';

import "../style/style.css";

const DashBoard = ({ }) => {
    const [tab, setTab] = useState("nifty");

    const handleSubmit = (data) => {
        if (data !== tab) {
            setTab(data);
            if (data === "nifty") {
                // api call
            }
            else {
                // api call
            }
        }
    }

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
        { slNo: "10", company: "company", cmp: "short code", pe: "P", charges: "charges", value: "Profit" }
    ];


    return (
        <>
            <PageOutLine title="Indices">
                <Grid container spacing={2}>
                    <Grid item md={12} lg={12} xl={12} xs={12} >
                        <Box className="tab-container">
                            <button style={{ background: tab === "nifty" && "#FFD5FA", color: tab === "nifty" && "black" }} onClick={() => { handleSubmit("nifty") }}>Nifty 50</button>
                            <button style={{ background: tab === "bank_nifty" && "#FFD5FA", color: tab === "bank_nifty" && "black" }} onClick={() => { handleSubmit("bank_nifty") }}>Bank Nifty</button>
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={12} xl={12} xs={12} >
                        <NiftyChart />
                    </Grid>
                    <Grid item md={12} lg={12} xl={12} xs={12} >
                        <NormalTable tableHeader={tableHeader} tableData={tableData} />
                    </Grid>
                </Grid>
            </PageOutLine >
        </>
    )
}

export default DashBoard;
