import './LineGraph.css';

import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function LineGraph(props) {
    const maximumData = Math.max(...props.ydata);
    const minimumData = Math.min(...props.ydata);
    
    const plotMaximumValue = maximumData + (maximumData - minimumData) * 0.25;
    const plotMinimumValue = minimumData - + (maximumData - minimumData) * 0.25;

    return (
        <div className='line-graph-container'>
            <div className='line-chart-canvas'>
                <Line
                    id='line_graph'
                    className='line-chart'
                    width="100vw"
                    data={{
                        labels: props.xdata,
                        datasets: [
                            {
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(154,216,205,1)',
                            borderWidth: 3,
                            data: props.ydata,
                            pointRadius: 0
                            }
                        ]
                        }}
                    options={{
                        maintainAspectRatio: false,
                        responsiveAnimationDuration: 500,
                        responsive: true,
                        spanGaps: true,
                        mouseLine: {
                            color: "#32d296"
                        },
                        interaction: {
                            mode: "index",
                            intersect: false,
                        },              
                        tooltips: {
                            enabled: true,
                            intersect: false,
                            mode: "index"
                        },
                        hover: {
                            mode: 'index',
                            intersect: false,
                        },
                        plugins: {
                            legend: {
                            position: 'top',
                            display: false,
                            },
                            title: {
                            display: false,
                            text: 'Stock price',
                            },
                        },
                        scales: {
                            xAxis: {
                                display: false,
                            },
                            yAxis: {
                                display: false,
                                max: plotMaximumValue,
                                min: plotMinimumValue,
                            },
                            x: {
                                display: false,
                            },
                        }
                    }}
                />
            </div>
        </div>
    )
}
