import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Enregistre les composants de Chart.js nécessaires
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergieGraphic: React.FC = () => {
  // Données du graphique
  const data = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], // Jours de la semaine
    datasets: [
      {
        label: "kWh", // Type de la valeur
        data: [10, 20, 15, 18, 12, 25, 22], // Valeurs en kWh
        fill: false, // Pas de remplissage sous la courbe
        borderColor: "#1A2B78", // Couleur de la courbe
        tension: 0.4, // Légère courbure de la courbe
        borderWidth: 3, // Largeur de la bordure
        pointBackgroundColor: "#1A2B78", // Couleur des points
        pointRadius: 5, // Taille des points
        pointHoverRadius: 7, // Taille des points au survol
      },
    ],
  };

  // Options du graphique
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Consommation kWh au cours de la semaine",
        font: {
          size: 16,
        },
        color: "#1A2B78", // Couleur du titre
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
            return `${tooltipItem.raw} kWh`; // Affichage du tooltip en kWh
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Jours de la semaine",
          color: "#1A2B78", // Couleur du texte de l'axe X
          font: {
            size: 14,
          },
        },
        grid: {
          color: "#1A2B78", // Couleur des lignes de la grille
        },
      },
      y: {
        title: {
          display: true,
          text: "kWh",
          color: "#1A2B78", // Couleur du texte de l'axe Y
          font: {
            size: 14,
          },
        },
        ticks: {
          stepSize: 5, // Valeurs de l'axe Y
          beginAtZero: true, // Commencer à 0
        },
        grid: {
          color: "#1A2B78", // Couleur des lignes de la grille
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}> {/* Seul la hauteur a été augmentée ici */}
      <Line data={data} options={options} />
    </div>
  );
};

export default EnergieGraphic;
