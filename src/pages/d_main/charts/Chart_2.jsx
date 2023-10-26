import React from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["08.2023", "07.2023", "06.2023", "05.2023"],
  datasets: [
    {
      label: "Агропромышленность",
      data: [20, 30, 40, 50, 60, 70],
      backgroundColor: "rgba(43, 54, 30, 1)",
    },
    {
      label: "Логистика",
      data: [15, 20, 25, 40, 45, 60],
      backgroundColor: "rgba(234, 240, 228, 1)",
    },
    {
      label: "+ level компании",
      data: [10, 12, 14, 16, 18, 20],
      backgroundColor: "rgba(131, 145, 89, 1)",
    },
  ],
};

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      display: true,
      grid: {
        display: false,
      },
    },

    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        // usePointStyle: "circle",
        // boxWidth: 100,
        // title: {
        //   color: "red",
        //   display: false,
        // },
      },
    },
    title: {
      display: false,
    },
  },
};

const labels = ["08.2023", "07.2023", "06.2023", "05.2023"];

function Chart_2() {
  return <Bar options={options} data={data} />;
}

export default Chart_2;
