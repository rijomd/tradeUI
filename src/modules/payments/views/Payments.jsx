import React, { useRef, useState } from 'react';
import { Box, Grid } from '@mui/material';

import { PageOutLine } from 'components/pageOutline/PageOutLine';
import { useAlert, useMobile } from 'components/hooks/Hook';
import { FormButtonField } from 'components/formElements/FormButtonField';
import { NormalTable } from 'components/Table/Table';

import PaymentIcon from 'assets/icons/Vector.svg';
import { PaymentScheduler } from '../components/PaymentScheduler';
import { DateRangePicker } from 'components/formElements/DateRangePicker';

const Payments = () => {
    const [isOenScheduler, setOpenScheduler] = useState(false);
    const xs = useMobile(true);
    const dateRef = useRef(null);


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

    const paymentData = {
        name: "Midhun Nandhanan",
        growWiseId: "GSVAGH1234Sw344",
        profit: 24560
    }

    const checkStatements = (startDate, endDate) => {
        console.log(startDate, "date", endDate);
    }

    const submitSchedule = (item) => {
        setOpenScheduler(false);
        const a = <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ borderRadius: "6px", padding: "8px", background: "#FFD5FA", color: "black", fontWeight: 700 }}> NEW</div>
            <div style={{ paddingLeft: "8px" }}> {`Your request was successfully sent on ${item.value} and is currently PENDING. We will inform you one it has been approved.`}</div>
        </div>
        useAlert(a, "theme");
    }

    const search = () => {
        return <FormButtonField
            sx={{ textTransform: 'none', marginLeft: !xs && "8px" }}
            fullWidth={xs ? true : false}
            onClick={() => { dateRef.current?.onSubmit() }}
        >
            Search
        </FormButtonField>
    }

    return (
        <PageOutLine title="Payments" >
            <Grid container spacing={2}>

                <Grid item xl={8} lg={8} md={8} xs={12}>
                    {/* monthly and yearly statements */}
                    <Box sx={{ display: "flex" }}>
                        <DateRangePicker ref={dateRef} handleSubmit={checkStatements} />
                        {!xs && search()}
                    </Box>

                </Grid>
                {xs && <Grid item xs={12}>
                    {search()}
                </Grid>}

                <Grid item xl={4} lg={4} md={4} xs={12} sm={4}>
                    <Box sx={{ display: "flex", justifyContent: 'end', height: "100%" }}>
                        <FormButtonField
                            sx={{ textTransform: 'none' }}
                            fullWidth={xs ? true : false}
                            startIcon={<img src={PaymentIcon} />}
                            onClick={() => { setOpenScheduler(prev => !prev); }}
                        >
                            Payment Scheduler
                        </FormButtonField>
                    </Box>
                </Grid>

                <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
                    <NormalTable tableHeader={tableHeader} tableData={tableData} />
                </Grid>

                {isOenScheduler && <PaymentScheduler
                    paymentData={paymentData}
                    open={isOenScheduler}
                    handleClose={() => { setOpenScheduler(prev => !prev); }}
                    submitSchedule={submitSchedule}
                />}

            </Grid>
        </PageOutLine>
    )
}

export default Payments;
