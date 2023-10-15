import React from "react";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      // position: "top",
      // labels: {
      //   usePointStyle: "circle",
      //   boxWidth: 100,
      //   borderColor: "#FFF",
      //   boderWidth: "10px",

      //   title: {
      //     color: "red",
      //     display: false,
      //   },
      // },
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Семинары",
      data: labels.map(() => faker.datatype.number({ min: 400, max: 1000 })),
      borderColor: "#49FFC3",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(28, 117, 79, 1)");
        gradient.addColorStop(1, "rgba(28, 117, 79, 0.43)");
        return gradient;
      },
      order: 3,
    },
    {
      fill: true,
      label: "Конференции",
      data: labels.map(() => faker.datatype.number({ min: 200, max: 400 })),
      borderColor: "rgba(174, 221, 248, 1)",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(28, 117, 79, 1)");
        gradient.addColorStop(1, "rgba(28, 117, 79, 0.43)");
        return gradient;
      },
      order: 2,
    },
    {
      fill: true,
      label: "Выставки",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 200 })),
      borderColor: "rgba(222, 200, 151, 1)",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(28, 117, 79, 1)");
        gradient.addColorStop(1, "rgba(28, 117, 79, 0.43)");
        return gradient;
      },
      order: 1,
    },
    {
      fill: true,
      label: "Онлайн-мероприятия",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgba(208, 225, 156, 1)",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(28, 117, 79, 1)");
        gradient.addColorStop(1, "rgba(28, 117, 79, 0.43)");
        return gradient;
      },
      order: 0,
    },
  ],
};

function Chart_1() {
  return <Line options={options} data={data} />;
}

export default Chart_1;
