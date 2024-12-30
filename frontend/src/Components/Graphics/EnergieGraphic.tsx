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
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
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
          display: false,
        },
        grid: {
          display: true,
          color: "#E0E0E0", // Ligne de la grille
          drawBorder: false, // Masquer la bordure des axes
        },
        ticks: {
          color: "#1A2B78", // Couleur des étiquettes des axes
        },
      },
      y: {
        title: {
          display: false,
        },
        ticks: {
          stepSize: 5,
          beginAtZero: true,
          color: "#1A2B78", // Couleur des étiquettes des axes
        },
        grid: {
          display: true,
          color: "#E0E0E0", // Ligne de la grille
          drawBorder: false, // Masquer la bordure des axes
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div className={"h-[400px] w-full rounded-2xl bg-white p-4"}>
      <Line data={data} options={options} />
    </div>
  );
};

export default EnergieGraphic;