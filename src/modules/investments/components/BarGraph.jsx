import React from 'react';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export const BarGraph = ({ color }) => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [
            {
                label: '',
                data: [1, 4, 2, 9, 12, 7, 14, 5],
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,
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
            y: {
                beginAtZero: true,
            },
        },
    };

    return (<Bar data={data} options={options} />);
}
