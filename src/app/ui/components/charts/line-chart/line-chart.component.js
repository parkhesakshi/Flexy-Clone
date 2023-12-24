import React, { Component } from "react";
import Chart from "react-apexcharts";

const LineChart = (width, height, title, seriesData, id) => {
  const series = seriesData;
  const options = {
    chart: {
      id: id,
    },
    title: {
      text: title,
      align: "left",
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={width}
      height={height}
    />
  );
};

export default LineChart;
