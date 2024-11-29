import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergieGraphic: React.FC = () => {

  const data = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [
      {
        label: "kWh",
        data: [10, 20, 15, 18, 12, 25, 22],
        fill: false,
        borderColor: "#1A2B78",
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: "#1A2B78",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Consommation kWh au cours de la semaine",
        font: {
          size: 16,
        },
        color: "#1A2B78",
      },
      tooltip: {
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.raw} kWh`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Jours de la semaine",
          color: "#1A2B78",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "#1A2B78",
        },
      },
      y: {
        title: {
          display: true,
          text: "kWh",
          color: "#1A2B78",
          font: {
            size: 14,
          },
        },
        ticks: {
          stepSize: 5,
          beginAtZero: true,
        },
        grid: {
          color: "#1A2B78",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default EnergieGraphic;
