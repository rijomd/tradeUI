import React from 'react';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export const BarGraph = ({ color }) => {
    const data = {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'],
        datasets: [
            {
                label: '',
                data: [1, 4, 2, 9, 12, 7, 14, 5, 13, 8, 6, 14, 3, 9, 11, 6, 15, 2, 6],
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,
                barThickness: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: false,
                text: 'Monthly Sales Data',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,  // Optional: Hide the vertical grid lines
                },
                barPercentage: 1.0,
                categoryPercentage: 0.2,
                offset: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (<Bar data={data} options={options} />);
}
