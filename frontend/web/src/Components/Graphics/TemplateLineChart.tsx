import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  type: string;
  data: { date: string; value: number }[];
  step?: number;
}

const LineChart: React.FC<LineChartProps> = ({ type, data, step = 20 }) => {
  const labels = data.map((item) => item.date);
  const values = data.map((item) => item.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Valeurs",
        data: values,
        fill: false,
        borderColor: "#1A2B78",
        backgroundColor: "#1A2B78",
        tension: 0.4,
        pointRadius: 2,
      },
    ],
  };

  const chartOptions = {
    backgroundColor: "#FFFFFF",
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw} unités`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: true,
          drawTicks: false,
          color: "#E0E0E0",
          lineWidth: 1,
          borderColor: "#1A2B78",
          borderWidth: 2,
        },
        ticks: {
          display: true,
          color: "#1A2B78",
          autoSkip: false,
          padding: 10,
        },
      },
      y: {
        title: {
          display: false,
        },
        grid: {
          display: true,
          drawTicks: false,
          color: "#E0E0E0",
          lineWidth: 1,
          borderColor: "#1A2B78",
          borderWidth: 2,
        },
        ticks: {
          stepSize: step,
          beginAtZero: true,
          max: 180,
          min: 0,
          callback: function (tickValue: string | number) {
            return tickValue.toString();
          },
          color: "#1A2B78",
        },
      },
    },
    layout: {
      padding: 20,
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    borderColor: "#1A2B78",
    borderWidth: 2,
    borderRadius: 8,
  };
  return (
    <div>
      <div className={"text-[#1A2B78] font-bold text-[1.5em]"}>
        Votre consommation <span className={"text-[#EF4445]"}>d&#39;{type}</span> (en {type === "eau" ? "litres" : "kWh"})
      </div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
