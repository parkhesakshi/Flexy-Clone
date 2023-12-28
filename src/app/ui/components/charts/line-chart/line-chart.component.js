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
      row: {
        strokeDashArray: 3,
        borderColor: "#e7e7e7",
        // opacity: 0.5,
      },
    },
    stroke: {
      curve: "smooth",
    },
    colors: colors || [],
    dataLabels: {
      enabled: !!showDataLabel,
    },
    xaxis: {
      categories: categories || [],
      title: {
        text: xAxisTitle,
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
