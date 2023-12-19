import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiChat1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import UIButton from "../../ui/components/button/button.component";
import { ICON_MD, ICON_SM } from "../../shared/constants/utilities";
import ProfileImg from "../../../assets/images/profile-img.jpg";

const headernav = () => {
  return (
    <div className="headnav d-flex justify-content-between">
      <div className="headnav-content-left">
        <UIButton className="icon">
          <IoIosMenu size={ICON_MD} />
        </UIButton>
        <UIButton className="icon">
          <CiSearch size={ICON_MD} />
        </UIButton>
      </div>
      <div className="headnav-content-right d-flex">
        <UIButton className="icon">
          <PiShoppingCartSimpleThin size={ICON_MD} />
        </UIButton>
        <UIButton className="icon">
          <CiChat1 size={ICON_MD} />
        </UIButton>
        <UIButton className="icon">
          <IoIosNotificationsOutline size={ICON_MD} />
        </UIButton>
        <UIButton className="profile-btn d-flex align-items-center gap-2">
          <img src={ProfileImg} alt="" height={30} width={30} />
          <h6 className="m-0">Hii, Sakshi</h6>
          <GoChevronDown size={ICON_MD} />
        </UIButton>
      </div>
    </div>
  );
};

export default headernav;
