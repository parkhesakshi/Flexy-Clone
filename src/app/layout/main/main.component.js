import React from "react";
import "./main.component.scss";
import UIButton from "../../ui/components/button/button.component";
import ModernAvtar from "../../../assets/images/modern-avtar.png";
import { FiShoppingBag } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";

const main = () => {
  return (
    <div className="main">
      <div className="one modern-cards d-flex justify-content-between">
        <div className="content-1 p-4 ml-2">
          <h5 className="mt-3">Congratulation Julia</h5>
          <div className="d-flex align-items-center gap-3">
            <h2 className="mt-2">$39,358</h2>
            <h6 className="mt-3"> +9%</h6>
          </div>
          <UIButton
            className=" download icon rounded mb-2 p-2 mt-2 text-white "
            children="Download"
          />
        </div>
        <div className="avtar">
          <img className="w-100 h-100 " src={ModernAvtar} alt="" />
        </div>
      </div>
      <div className="two modern-cards">
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
      <div className="three modern-cards">
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
      <div className="four modern-cards"></div>
      <div className="five modern-cards"></div>
      <div className="six modern-cards"></div>
    </div>
  );
};

export default main;
