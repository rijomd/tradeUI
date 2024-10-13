import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { useMobile } from 'components/hooks/Hook';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ graphData }) => {
    const isMobile = useMobile();
    const hasData = graphData?.labels?.length > 0 && graphData?.data.length > 0;

    const data = hasData ? {
        labels: graphData?.labels,
        datasets: [
            {
                label: graphData?.title,
                data: graphData?.data,
                backgroundColor: graphData?.backgroundColor,
                hoverOffset: 4,
                borderColor: "#1B1B1B",
                borderWidth: 6
            },
        ],
    }
        : {
            labels: ['No Records'],
            datasets: [
                {
                    label: 'No Records',
                    data: [1],
                    borderColor: "black",
                    backgroundColor: ['black'],
                },
            ],
        };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: graphData?.title,
                color: 'white',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => (hasData ? `${tooltipItem?.label}: ${tooltipItem?.raw}` : `No ${graphData?.title} Found`),
                },
            },
        },
    };

    return (
        <Box className="pieChart-container" >
            <Box sx={{ height: "250px" }}>
                <Doughnut data={data} options={options} />
            </Box>
            <Box sx={{ width: isMobile ? "100%" : "80%", height: "100%" }} mt={3}>
                {graphData?.labels?.length > 0 && graphData?.labels.map((label, index) => (
                    <Box key={index} sx={{ backgroundColor: "#1B1B1B", padding: "2px" }}>
                        <Grid container sx={{ backgroundColor: "#323232", margin: 0, padding: "8px", borderRadius: "8px" }}>
                            <Grid item md={3} lg={3} xs={3}>
                                <p
                                    style={{
                                        background: graphData?.backgroundColor?.[index],
                                        margin: 0,
                                        height: "100%",
                                        width: "100%",
                                    }}
                                >
                                </p>
                            </Grid>
                            <Grid item md={6} lg={6} xs={6}>
                                <Typography variant="body1" sx={{ fontSize: "11px", paddingLeft: "8px" }}>{label}</Typography>
                            </Grid>
                            <Grid item md={3} lg={3} xs={3}>
                                <Typography variant="body1" sx={{ fontSize: "11px", textAlign: "right" }}>{graphData?.data?.[index]}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                ))}
                {graphData?.labels?.length === 0 && <Box sx={{ backgroundColor: "#323232", padding: "8px", borderRadius: "8px" }}>
                    <Typography variant="body1" sx={{ fontSize: "11px", textAlign: "center" }}>{`No ${graphData?.title} Found`} </Typography>
                </Box>}
            </Box>
        </Box>
    )
}
