import React from "react";
import UIButton from "../../../ui/components/button/button.component";
import ModernAvtar from "../../../../assets/images/modern-avtar.png";
import { FiShoppingBag } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
import LineChart from "../../../ui/components/charts/line-chart/line-chart.component";
import "./modern.component.scss";
import RevenueUpdateCard from "./revenue-update-grids/revenu-update.component";
import MonthlyRevenueCard from "./revenue-update-grids/monthly-revenu.component";
import CustomerGrid from "./revenue-update-grids/customer-grid.component";

const Modern = () => {
  return (
    <div className="h-auto">
      <div className="main-1">
        <div className="m-one modern-cards d-flex justify-content-between overflow-hidden">
          <div className="content-1 p-4 ml-2">
            <h5 className="mt-3">Congratulation Julia</h5>
            <div className="d-flex align-items-center gap-3">
              <h2 className="mt-2 b">$39,358</h2>
              <h6 className="mt-3"> +9%</h6>
            </div>
            <UIButton
              className=" download icon rounded mb-2 p-2 mt-2 text-white "
              children="Download"
            />
          </div>
          <div className="avtar">
            <img className="w-100 h-100  " src={ModernAvtar} alt="" />
          </div>
        </div>
        <div className="m-two modern-cards">
          <div className="content-2 d-flex p-4 ml-2 align-items-start justify-content-between w-100">
            <h5 className="mt-3">Purcheses</h5>
            <UIButton className="purchase icon rounded-circle mt-3">
              <FiShoppingBag size={24} />
            </UIButton>
          </div>
          <div className="mx-4">
            <h5 className="number m-0">2,367</h5>
            <p className="base-line">Monthly Sales</p>
          </div>
        </div>
        <div className="m-three modern-cards">
          <div className="content-2 d-flex p-4 ml-2 align-items-start justify-content-between w-100">
            <h5 className="mt-3">Total Earnings</h5>
            <UIButton className="dollar icon rounded-circle mt-3">
              <LuDollarSign size={24} />
            </UIButton>
          </div>
          <div className="mx-4">
            <h5 className="number m-0">$93,438.78</h5>
            <p className="base-line">Monthly Revenue</p>
          </div>
        </div>
        <div className="m-four modern-cards p-3">
          <RevenueUpdateCard />
        </div>
        <div className="m-five modern-cards ">
          <MonthlyRevenueCard />
        </div>
        <div className="m-six modern-cards">
          <CustomerGrid />
        </div>
      </div>
      <div className="main-2">
        <div className="m2-one modern-cards"></div>
        <div className="m2-two modern-cards"></div>
        <div className="m2-three modern-cards"></div>
        <div className="m2-four modern-cards"></div>
        <div className="m2-five modern-cards"></div>
      </div>
    </div>
  );
};

export default Modern;
