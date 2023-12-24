import React from "react";
import LineChart from "../../../../ui/components/charts/line-chart/line-chart.component";

const RevenueUpdateCard = () => {
  const seriesData = [
    {
      name: "Earnings",
      data: [0, 5, 6, 8, 25, 9, 11, 24],
    },
    {
      name: "Expense",
      data: [0, 3, 1, 2, 8, 1, 5, 1],
    },
  ];

  const getSeriesData = () => {};
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h2>Revenue Updates</h2>
      </div>
      <div className="h-100">
        <LineChart
          height={"340"}
          showLegends={true}
          colors={["#03c9d7", "#fb9678"]}
          seriesData={seriesData}
          categories={[
            "16/08",
            "17/08",
            "18/08",
            "19/08",
            "20/08",
            "21/08",
            "22/08",
            "23/08",
          ]}
        />
      </div>
    </>
  );
};

export default RevenueUpdateCard;
