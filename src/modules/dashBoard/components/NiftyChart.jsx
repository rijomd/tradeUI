import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { createChart } from 'lightweight-charts';

import "../style/style.css";

const NiftyChart = () => {
    const chartContainerRef = useRef();
    const chartRef = useRef();
    const seriesRef = useRef();
    const intervalIdRef = useRef(null);
    const theme = useTheme();
    const lineSeriesRef = useRef();

    useEffect(() => {
        const chartOptions = {
            layout: {
                textColor: theme.palette.primary.light,
                background: { type: 'solid', color: theme.palette.background.paperSecondary },
                textColor: theme.palette.text.primary,
            },
            height: 400,
        };

        chartRef.current = createChart(chartContainerRef.current, chartOptions);
        seriesRef.current = chartRef.current.addCandlestickSeries({
            upColor: theme.palette.secondary.main,
            downColor: 'green',
            borderVisible: false,
            wickUpColor: theme.palette.secondary.main,
            wickDownColor: 'green',
        });

        const data = generateData(5000, 20, 3000);
        seriesRef.current.setData(data.initialData);

        lineSeriesRef.current = chartRef.current.addLineSeries({
            color: 'red',
            lineWidth: 2,
        });
        const lineData = [
            { time: '2023-09-19', value: 110 },
            { time: '2023-09-20', value: 115 },
            { time: '2023-09-21', value: 120 },
            { time: '2023-09-22', value: 125 },
        ];

        lineSeriesRef.current.setData(lineData);

        chartRef.current.timeScale().fitContent();
        chartRef.current.timeScale().scrollToPosition(5);

        const streamingDataProvider = getNextRealtimeUpdate(data.realtimeUpdates);

        intervalIdRef.current = setInterval(() => {
            const update = streamingDataProvider.next();
            if (update.done) {
                clearInterval(intervalIdRef.current);
                return;
            }
            seriesRef.current.update(update.value);
        }, 100);

        const resizeObserver = new ResizeObserver(() => {
            chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
        });

        resizeObserver.observe(chartContainerRef.current);

        return () => {
            clearInterval(intervalIdRef.current);
            resizeObserver.disconnect();
            chartRef.current.remove();
        };
    }, []);

    return (
        <Box className="details-main-container">
            <Box  ref={chartContainerRef} style={{ width: '100%', height: "auto" }}></Box>
        </Box>
    );
};

// Helper functions for data generation
let randomFactor = 25 + Math.random() * 25;

const samplePoint = (i) =>
    i *
    (0.5 +
        Math.sin(i / 1) * 0.2 +
        Math.sin(i / 2) * 0.4 +
        Math.sin(i / randomFactor) * 0.8 +
        Math.sin(i / 50) * 0.5) +
    200 +
    i * 2;

function generateData(numberOfCandles = 500, updatesPerCandle = 5, startAt = 100) {
    const createCandle = (val, time) => ({
        time,
        open: val,
        high: val,
        low: val,
        close: val,
    });

    const updateCandle = (candle, val) => ({
        time: candle.time,
        close: val,
        open: candle.open,
        low: Math.min(candle.low, val),
        high: Math.max(candle.high, val),
    });

    randomFactor = 25 + Math.random() * 25;
    const date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));
    const numberOfPoints = numberOfCandles * updatesPerCandle;
    const initialData = [];
    const realtimeUpdates = [];
    let lastCandle;
    let previousValue = samplePoint(-1);
    for (let i = 0; i < numberOfPoints; ++i) {
        if (i % updatesPerCandle === 0) {
            date.setUTCDate(date.getUTCDate() + 1);
        }
        const time = date.getTime() / 1000;
        let value = samplePoint(i);
        const diff = (value - previousValue) * Math.random();
        value = previousValue + diff;
        previousValue = value;
        if (i % updatesPerCandle === 0) {
            const candle = createCandle(value, time);
            lastCandle = candle;
            if (i >= startAt) {
                realtimeUpdates.push(candle);
            }
        } else {
            const newCandle = updateCandle(lastCandle, value);
            lastCandle = newCandle;
            if (i >= startAt) {
                realtimeUpdates.push(newCandle);
            } else if ((i + 1) % updatesPerCandle === 0) {
                initialData.push(newCandle);
            }
        }
    }

    return {
        initialData,
        realtimeUpdates,
    };
}

function* getNextRealtimeUpdate(realtimeData) {
    for (const dataPoint of realtimeData) {
        yield dataPoint;
    }
    return null;
}

export default NiftyChart;
