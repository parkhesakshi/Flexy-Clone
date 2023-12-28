import React from "react";
import Chart from "react-apexcharts";

const MonthlyRevenueCard = () => {
  const chartData = {
    series: [
      {
        name: "Monthly Earnings",
        data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12],
      },
    ],
  };

  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      height: "90px",
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#AAEBF1"],
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
      <h5 className="card-header">Monthly Revenue</h5>
      <div className="card-body">
        <Chart
          options={chartOptions}
          series={chartData.series}
          type="bar"
          height="90px"
        />
      </div>
      <div className="d-flex align-items-center gap-3">
        <h2 className="mt-2 b">$39,358</h2>
        <h6 className="mt-3"> +9% this week</h6>
      </div>
    </div>
  );
};

export default MonthlyRevenueCard;
