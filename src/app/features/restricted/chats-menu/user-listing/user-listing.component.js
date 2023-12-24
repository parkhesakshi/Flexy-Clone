import React from "react";
import "./user-listing.component.scss";

const UserListing = () => {
  return (
    <div className="user-listing overflow-auto">
      <div className="user-card d-flex align-items-center p-2 gap-3 chat-active pointer-event">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png"
          alt="circled-user-female-skin-type-1-2--v1"
        />
        <div className="user-name">
          <p>James Johnson</p>
          <p className="opacity-50">Theme Developer</p>
        </div>
      </div>
      <div className="user-card d-flex align-items-center p-2 gap-3  pointer-event">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png"
          alt="circled-user-female-skin-type-1-2--v1"
        />
        <div className="user-name">
          <p>James Johnson</p>
          <p className="opacity-50">Theme Developer</p>
        </div>
      </div>
      <div className="user-card d-flex align-items-center p-2 gap-3  pointer-event">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png"
          alt="circled-user-female-skin-type-1-2--v1"
        />
        <div className="user-name">
          <p>James Johnson</p>
          <p className="opacity-50">Theme Developer</p>
        </div>
      </div>
      <div className="user-card d-flex align-items-center p-2 gap-3  pointer-event">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png"
          alt="circled-user-female-skin-type-1-2--v1"
        />
        <div className="user-name">
          <p>James Johnson</p>
          <p className="opacity-50">Theme Developer</p>
        </div>
      </div>
      <div className="user-card d-flex align-items-center p-2 gap-3  pointer-event">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png"
          alt="circled-user-female-skin-type-1-2--v1"
        />
        <div className="user-name">
          <p>James Johnson</p>
          <p className="opacity-50">Theme Developer</p>
        </div>
      </div>
      <div className="user-card d-flex align-items-center p-2 gap-3  pointer-event">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png"
          alt="circled-user-female-skin-type-1-2--v1"
        />
        <div className="user-name">
          <p>James Johnson</p>
          <p className="opacity-50">Theme Developer</p>
        </div>
      </div>
    </div>
  );
};

export default UserListing;
