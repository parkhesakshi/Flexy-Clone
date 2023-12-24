import React from "react";
import Logo from "../../../assets/images/logo.svg";
import "./sidenav.component.scss";
import { MAIN_MENUS } from "../../shared/constants/sidenav-menulist";
import { Outlet, Link } from "react-router-dom";

const sidenav = () => {
  return (
    <div className="sidenav p-3 bg-white overflow-auto vh-100">
      <div className="sidenav-header">
        <img src={Logo} alt="" />
      </div>
      <div className="sidenav-menu-list d-flex flex-column">
        {MAIN_MENUS.map((item, index) => (
          <div className="sidenav-menu-group" key={index}>
            <h6 className=" sidenav-menu-heading mt-5">{item.label}</h6>
            <div className="sidenav-submenu-list d-flex flex-column">
              {item.hasSubMenu &&
                item.subMenus.map((subItem) => (
                  <Link
                    to={`${item.link}${subItem.link}`}
                    className="sidenav-link active d-flex p-3 gap-4 text-black"
                  >
                    <img src={subItem.icon} alt="" />
                    <span className="ml-3">{subItem.label}</span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sidenav;
