
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { CalculoUno, ExtraccionUno, InternetUno, PracticaUno, SwitUno } from './Nota1';
import { CalculoDos, ExtraccionDos, InternetDos, PracticaDos, SwitDos } from './Nota2';
import { CalculoTres, ExtraccionTres, InternetTres, PracticaTres, SwitTres } from './Nota3';
import { CalculoDefinitiva, ExtraccionDefinitiva, InternetDefinitiva, PracticaDefinitiva, SwitDefinitiva } from './Definitiva';
export default function StackedBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const PromedioUno: number = ((CalculoUno + ExtraccionUno + InternetUno + PracticaUno + SwitUno) / 5);
    const PromedioDos: number = ((CalculoDos + ExtraccionDos + InternetDos + PracticaDos + SwitDos) / 5);
    const PromedioTres: number = ((CalculoTres + ExtraccionTres + InternetTres + PracticaTres + SwitTres) / 5);
    const PromedioDefinitiva: number = ((CalculoDefinitiva + ExtraccionDefinitiva + InternetDefinitiva + PracticaDefinitiva + SwitDefinitiva) / 5);
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['corte #1', 'corte #2', 'corte #3', 'Definitiva',],
            datasets: [
                {
                    type: 'line',
                    label: 'Promedio',
                    borderColor: documentStyle.getPropertyValue('--black-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [PromedioUno, PromedioDos, PromedioTres, PromedioDefinitiva,]
                },
                {
                    type: 'bar',
                    label: 'calculo diferencial',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [CalculoUno, CalculoDos, CalculoTres, CalculoDefinitiva,]
                },
                {
                    type: 'bar',
                    label: 'Carga de datos',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [ExtraccionUno, ExtraccionDos, ExtraccionTres, ExtraccionDefinitiva,]
                },
                {
                    type: 'bar',
                    label: 'internet de las cosas',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [SwitUno, SwitDos, SwitTres, SwitDefinitiva,]
                },
                {
                    type: 'bar',
                    label: 'Practicas 1',
                    backgroundColor: documentStyle.getPropertyValue('--red-500'),
                    data: [InternetUno, InternetDos, InternetTres, InternetDefinitiva,]
                },
                {
                    type: 'bar',
                    label: 'internet de las cosas',
                    backgroundColor: documentStyle.getPropertyValue('--purple-500'),
                    data: [PracticaUno, PracticaDos, PracticaTres, PracticaDefinitiva,]
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
