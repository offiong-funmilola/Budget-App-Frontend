import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2"
import { ChartData } from "../../type";
import {labels, datasets} from '../../data'

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);



function DisplayChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
        stepwise: 10,
        callback: (value: number, index: number, values: number[]) => {
          return (value / 100 * 100).toFixed(0) + "%"; // convert it to percentage
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Expenses",
      },
      tooltip: {
        titleColor: "purple",
      },
      legend: {
        display: true,
        labels: {
          boxWidth: 30,
          boxHeight: 10,
        },
      },
    },
    layout: {
      // autoPadding: false
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      setChartData({
        labels: labels,
        datasets: datasets
      });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Bar
        datasetIdKey="id"
        ref={chartRef}
        data={chartData}
        options={options}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  )
}

export default DisplayChart;
