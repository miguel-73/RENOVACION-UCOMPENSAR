
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function StackedBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['corte #1', 'corte #2', 'corte #3', 'Definitiva',],
            datasets: [
                {
                    type: 'bar',
                    label: 'calculo diferencial',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48,]
                },
                {
                    type: 'bar',
                    label: 'Carga de datos',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75,]
                },
                {
                    type: 'bar',
                    label: 'internet de las cosas',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [41, 52, 24, 74,]
                },
                {
                    type: 'bar',
                    label: 'idddd',
                    backgroundColor: documentStyle.getPropertyValue('--red-500'),
                    data: [41, 52, 24, 74,]
                },
                {
                    type: 'bar',
                    label: 'internet de las cosas',
                    backgroundColor: documentStyle.getPropertyValue('--purple-500'),
                    data: [41, 52, 24, 74, 23,]
                },
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
              