import React from "react";
import Chart from "react-apexcharts";

const CustomerGrid = () => {
  const chartData = {
    series: [
      {
        name: "Monthly Sales",
        data: [1, 19, 3, 13, 2, 19],
      },
    ],
  };

  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      height: "100px",
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [],
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
    stroke: {
      curve: "smooth",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },

    colors: ["#FFFFFF"],
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
    <div className="monthly-revenue-card p-3" style={{ color: "white" }}>
      <h5 className="card-header">Customers</h5>
      <div className="card-body">
        <Chart
          options={chartOptions}
          series={chartData.series}
          type="line"
          height="100px"
        />
      </div>
      <div className="d-flex align-items-center gap-3">
        <h2 className="mt-2 b">750</h2>
        <h6 className="mt-3"> +9% this week</h6>
      </div>
    </div>
  );
};

export default CustomerGrid;
