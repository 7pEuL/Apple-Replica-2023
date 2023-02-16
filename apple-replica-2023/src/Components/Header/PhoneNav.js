import React from "react";

import LiProps from "./LiProps";
import DropMenu from "./DropMenu";

import logoSm from "../../Resources/icons/logo-sm.png";
import cartSm from "../../Resources/icons/cart-sm.png";
// import SwipeableTemporaryDrawer from "./React Drawer";
import DragHandleIcon from '@mui/icons-material/DragHandle';

function PhoneNav() {
  return (
    <>
      {/* Phone Nav */}
      <nav className="list-unstyled text-decoration-none py-2 px-3 d-lg-none">
        <div className="d-flex justify-content-between">
          <div className="appleMenu">
            <li className="text-decoration-none">
              <div>
                {/* <SwipeableTemporaryDrawer /> */}
                <DragHandleIcon className="white fs-1 pt-1 " />
                {/* <i className="fa-solid fa-bars fs-5 pt-1 white"></i> */}
              </div>
            </li>
          </div>

          <div className="logoApp">
            <LiProps Url="/" ListName={<img src={logoSm} alt="" />} />
          </div>
          <div className="">
            <LiProps Url="/Cart"
              ListNameClass="noCart"
              ListName={<img src={cartSm} alt="" />}
            />
          </div>
        </div>

        {/* DropDown Phone Menu */}
        <div className={`offMenu`}>
          <DropMenu />
        </div>
      </nav>
    </>
  );
}

export default PhoneNav;
