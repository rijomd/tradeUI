import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { PageOutLine } from 'components/pageOutline/PageOutLine';
import { useAlert, useMobile } from 'components/hooks/Hook';
import { FormButtonField } from 'components/formElements/FormButtonField';
import { NormalTable } from 'components/Table/Table';
import { DateRangePicker } from 'components/formElements/DateRangePicker';
import { getAuthUser } from 'service/AuthMethods';

import PaymentIcon from 'assets/icons/Vector.svg';

import { addPaymentsAction, getPaymentsAction } from '../reducer/PaymentsAction';
import PaymentScheduler from '../components/PaymentScheduler';

const Payments = () => {
    const xs = useMobile(true);
    const dateRef = useRef(null);
    const dispatch = useDispatch();
    const payments = useSelector((state) => state.payments);
    const user = getAuthUser();
    const payload = {
        limit: 10, page: 1
    }

    const [isOenScheduler, setOpenScheduler] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user?.user_id) {
            dispatch(getPaymentsAction({ ...payload, id: user?.user_id }));
        }
    }, []);

    useEffect(() => {
        if (payments.status === "completed") {
            setIsLoading(false);
            const a = <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ borderRadius: "6px", padding: "8px", background: "#FFD5FA", color: "black", fontWeight: 700 }}> NEW</div>
                <div style={{ paddingLeft: "8px" }}> {`Your request was successfully sent on ${12} and is currently PENDING. We will inform you one it has been approved.`}</div>
            </div>
            useAlert(a, "theme");
        }
        if (payments.status === "failed") {
            setIsLoading(false);
        }
    }, [payments?.status])


    const tableHeader = [
        {
            name: "slNo",
            label: "Sl No",
            renderComponent: (item) => {
                console.log(item);
            },
            type: "text",
            headerStyle: { width: "15%" }
        },
        {
            name: "company",
            label: "Company",
            type: "text",
            headerStyle: { width: "60%" }
        },
        {
            name: "cmp",
            label: "CMP Rs",
            type: "text",
            headerStyle: { width: "25%" }
        }
    ];

    const checkStatements = (startDate, endDate) => {
        dispatch(getPaymentsAction({ ...payload, id: user?.user_id, fromDate: startDate, toDate: endDate }));
    }

    const submitSchedule = (item) => {
        setIsLoading(true);
        dispatch(addPaymentsAction({
            user_id: user?.user_id,
            GrowwiseID: user?.user_id,
            scheduledDate: item?.value,
            name: user.user_name,
            status: "Created"
        }));
        setOpenScheduler(false);
    }

    const search = () => {
        return <FormButtonField
            sx={{ textTransform: 'none', marginLeft: !xs && "8px" }}
            fullWidth={xs ? true : false}
            onClick={() => { dateRef.current?.onSubmit() }}
        >
            {xs ? "Search" : <SearchIcon />}
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
                    <Box sx={{ display: "flex", justifyContent: 'end', alignItems: "center", height: "100%" }}>
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
                    <NormalTable tableHeader={tableHeader} tableData={payments?.paymentList} />
                </Grid>

                {isOenScheduler && <PaymentScheduler
                    paymentData={user}
                    open={isOenScheduler}
                    handleClose={() => { setOpenScheduler(prev => !prev); }}
                    submitSchedule={submitSchedule}
                    isLoading={isLoading}
                />}

            </Grid>
        </PageOutLine>
    )
}

export default Payments;
