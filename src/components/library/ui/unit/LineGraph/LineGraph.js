import './LineGraph.css';

import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function LineGraph(props) {


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
                        // responsive: false,
                        maintainAspectRatio: false,
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
                        tooltips: {
                            mode: 'x',
                            intersect: false
                          },
                        scales: {
                            xAxis: {
                                display: false,
                            },
                            yAxis: {
                                display: false,
                            },
                            x: {
                                display: false,
                                ticks: {
                                    maxRotation: 0,
                                    minRotation: 0,
                                    font: {
                                        size: 14,
                                        family: 'Noto Sans KR',
                                        weight: 500,
                                    },
                                    align: 'start',
                                    // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                                    callback: function(val, index) {
                                        return index%20 === 0? this.getLabelForValue(index): "";
                                    },
                                },
                            },
                        }}}
                    />
            </div>
        </div>
    )
}
