import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import axios from 'axios';

// make api here
const NiftyApi = () => {
    const chartContainerRef = useRef();
    const chartRef = useRef();
    const seriesRef = useRef();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNiftyData = async () => {
            try {
                const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY'; // Replace with your Alpha Vantage API key
                const response = await axios.get(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NSE:NIFTY&interval=5min&apikey=${apiKey}`
                );

                const data = formatAlphaVantageData(response.data['Time Series (5min)']);
                initializeChart(data);
            } catch (error) {
                console.error('Error fetching Nifty data', error);
            }
        };

        const initializeChart = (data) => {
            const chartOptions = {
                layout: {
                    textColor: 'black',
                    background: { type: 'solid', color: 'white' },
                },
                height: 400,
            };

            chartRef.current = createChart(chartContainerRef.current, chartOptions);
            seriesRef.current = chartRef.current.addCandlestickSeries({
                upColor: '#26a69a',
                downColor: '#ef5350',
                borderVisible: false,
                wickUpColor: '#26a69a',
                wickDownColor: '#ef5350',
            });

            seriesRef.current.setData(data);
            chartRef.current.timeScale().fitContent();
            setIsLoading(false);
        };

        const formatAlphaVantageData = (data) => {
            const formattedData = Object.keys(data).map((time) => ({
                time: new Date(time).getTime() / 1000,
                open: parseFloat(data[time]['1. open']),
                high: parseFloat(data[time]['2. high']),
                low: parseFloat(data[time]['3. low']),
                close: parseFloat(data[time]['4. close']),
            }));
            return formattedData;
        };

        fetchNiftyData();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchNiftyData();
        }, 300000); // 300,000 milliseconds = 5 minutes

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {isLoading ? <p>Loading...</p> : <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }}></div>}
        </div>
    );
};

export default NiftyApi;
