import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({
  height,
  seriesData,
  width,
  colors,
  showDataLable = false,
  showLegends = false,
  categories,
}) => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      height: height,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: categories || [],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
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
        columnWidth: "20%",
      },
    },
    dataLabels: {
      enabled: !!showDataLable,
    },
    legend: {
      show: !!showLegends,
      position: "bottom",
      horizontalAlign: "center",
    },
    colors: colors || [],
    fill: {
      type: "solid",
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      theme: "dark",
    },
  };
  return (
    <>
      <Chart
        options={options}
        series={seriesData || []}
        type="bar"
        height={height}
      />
    </>
  );
};

export default BarChart;
