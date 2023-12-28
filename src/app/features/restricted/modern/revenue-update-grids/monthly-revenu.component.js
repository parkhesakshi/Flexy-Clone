import React from "react";
import Chart from "react-apexcharts";
import BarChart from "../../../../ui/components/charts/bar-chart/bar-chart.component";

const MonthlyRevenueCard = () => {
  const seriesData = [
    {
      name: "Monthly Earnings",
      data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12],
    },
  ];

  return (
    <div className="monthly-revenue-card p-3" style={{ color: "white" }}>
      <h5 className="card-header">Monthly Revenue</h5>
      <div className="card-body d-flex">
        <BarChart height={"90px"} colors={"#AAEBF1"} seriesData={seriesData} />
      </div>
      <div className="d-flex align-items-center gap-3">
        <h2 className="mt-2 b">$39,358</h2>
        <h6 className="mt-3"> +9% this week</h6>
      </div>
    </div>
  );
};

export default MonthlyRevenueCard;
