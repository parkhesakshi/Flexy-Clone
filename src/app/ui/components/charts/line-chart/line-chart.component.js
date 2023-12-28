import React, { Component } from "react";
import Chart from "react-apexcharts";

const LineChart = ({
  width,
  height,
  title,
  seriesData,
  id,
  xAxisTitle,
  colors,
  showDataLabel = false,
  showLegends = false,
  categories,
}) => {
  const options = {
    chart: {
      id: id,
      toolbar: {
        show: false,
      },
      height: height,
    },
    title: {
      text: title,
      align: "left",
    },
    grid: {
      strokeDashArray: 2,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      theme: "dark",
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: colors || [],
    dataLabels: {
      enabled: !!showDataLabel,
    },
    xaxis: {
      categories: categories || [],
      labels: {
        style: {
          colors: "#C5C5C5",
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#C5C5C5",
          fontSize: "13px",
        },
      },
    },

    legend: {
      show: showLegends,
      position: "bottom",
      horizontalAlign: "center",
    },
    markers: {
      size: 4,
    },
  };
  return (
    <>
      <Chart
        options={options}
        series={seriesData || []}
        type="line"
        width={"100%"}
        height={height}
      />
    </>
  );
};

export default LineChart;
