import React from "react";

const BarChart = ({}) => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      height: "200px",
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    colors: ["#ffffff"], // Bar color (white in this case)
    fill: {
      type: "solid",
      opacity: 1,
    },
  };
  return <>
  <Chart
  options={options}
  series={}/>
  
  </>;
};

export default BarChart;
