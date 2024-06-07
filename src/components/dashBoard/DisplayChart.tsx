import {useEffect, useRef, useState} from 'react'
import { Chart as ChartJS, BarElement, Tooltip, Legend,  CategoryScale, LinearScale,  } from "chart.js";
import { Bar } from "react-chartjs-2";

    ChartJS.register( BarElement, Tooltip, Legend, CategoryScale, LinearScale,);

    type ChartData = {
        labels: string [],
        datasets: Data []
    }

    type Data = {
        id: number,
        label: string,
        data: number[],
        backgroundColor: string,
        borderColor: string,
        borderWidth?: number
    }

function DisplayChart() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: [],
    });

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                min: 0,
                max: 100,
                stepwise: 10,
                callback: function(value: number) {
                    return(value / this.max *100).toFixed(0) + "%" // convert it to percentage
                }
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Expenses',
            },
           legend: {
                display: true,
                labels: {
                    boxWidth: 20,
                    boxHeight: 20
                },
            },
            
        }
    }

    useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
        setChartData({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {   id: 1,
                    label: "Groceries",
                    data: [5, 5, 7, 8, 6, 6, 6, 5, 5, 6, 7, 10],
                    backgroundColor: "rgba(48, 112, 179)",
                    borderColor: 'rgb(48, 112, 179,)',
                    
                },
                {
                    id: 2,
                    label: "Bills",
                    data: [50, 60, 60, 60, 63, 65, 60, 57, 65, 65, 65, 60],
                    backgroundColor: "rgba(255, 99, 132)",
                    borderColor: 'rgb(255, 99, 132)',
                   
                },
                {
                    id: 3,
                    label: "Others",
                    data: [15, 15, 17, 18, 16, 16, 16, 15, 15, 16, 17, 10],
                    backgroundColor: "rgba(75, 192, 192)",
                    borderColor: 'rgb(75, 192, 192)',
                   
                }
            ]
        });
    }
    }, []);


  return (
    <Bar datasetIdKey='id' ref={chartRef} data={chartData} options={options} />
  )
}

export default DisplayChart

