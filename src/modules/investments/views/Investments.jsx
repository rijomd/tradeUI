import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { PageOutLine } from 'components/pageOutline/PageOutLine';
import { InvestmentDetail } from '../components/InvestmentDetail';
import { PieChart } from '../components/PieChart';
import { investmentsUserDEtailsAction } from '../reducer/InvestmentsAction';
import { Calculator } from '../components/Calculator';

import { NormalTable } from 'components/Table/Table';
import { NewsFeed } from 'modules/home/components/NewsFeed';
import news from "assets/images/newsletter.jpg"
import { getAuthUser } from 'service/AuthMethods';

import "../style/style.css";

const Investments = () => {

    const dispatch = useDispatch();
    const investment = useSelector((state) => state.investments);

    useEffect(() => {
        const user = getAuthUser();
        if (user?.user_id) {
            dispatch(investmentsUserDEtailsAction(user?.user_id));
        }
    }, []);

    const tableHeader = [
        {
            name: "slNo",
            label: "Sl No",
            type: "index",
            headerStyle: { width: "15%" }
        },
        {
            name: "companyName",
            label: "Company",
            type: "text",
            headerStyle: { width: "60%" }
        },
        {
            name: "investedAmount",
            label: "CMP Rs",
            type: "text",
            headerStyle: { width: "25%" }
        }
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

                    {investment?.investmentsDetails.map((item, index) => {
                        return <Grid key={index} item md={4} lg={4} xl={4} xs={12} sm={4}>
                            <InvestmentDetail investmentsDetail={item} />
                        </Grid>
                    })}

                    {investment?.investmentGraphData.map((item, index) => {
                        return <Grid key={index} item md={4} lg={4} xl={4} xs={12} sm={4}>
                            <PieChart graphData={item} />
                        </Grid>
                    })}

                    <Grid item md={8} lg={8} xl={8} xs={12} sm={8}>
                        <NormalTable tableHeader={tableHeader} tableData={investment?.investmentList} totalData={10} />
                    </Grid>

                    <Grid item md={4} lg={4} xl={4} xs={12} sm={4}>
                        <Box className='news-letter-container' p={2} sx={{ boxShadow: "0px 10px 20px 0px #00000040", background: "#181818" }}>
                            <Typography variant='h5' pb={2}>Did you know ?.</Typography>
                            <NewsFeed item={newsData} isHideButton characters={75} />
                        </Box>
                    </Grid>

                    <Calculator />
                </Grid>
            </PageOutLine>
        </>
    )
}

export default Investments;
