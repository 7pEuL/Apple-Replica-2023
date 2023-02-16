import React from "react";

import LiProps from "./LiProps";

import logoSm from "../../Resources/icons/logo-sm.png";
import cartSm from "../../Resources/icons/cart-sm.png";
import searchSm from "../../Resources/icons/search-icon-sm.png";

function LaptopNav() {
  return (
    <>
      <nav className="lap-menu container d-none d-lg-block list-unstyled text-decoration-none align-items-center py-2 Lap-nav-width">
        <div className="">
          <div className="d-flex justify-content-between align-items-center">
            <LiProps Url="/" ListName={<img src={logoSm} alt="" />} />
            <LiProps Url="/Store" ListName="Store" />
            <LiProps Url="/Mac" ListName="Mac" />
            <LiProps Url="/iPad" ListName="iPad" />
            <LiProps Url="/iPhone" ListName="iPhone" />
            <LiProps Url="/Watch" ListName="Watch" />
            <LiProps Url="/AirPods" ListName="AirPods" />
            <LiProps Url="/TV & Home" ListName="TV & Home" />
            <LiProps Url="/Only on Apple" ListName="Only on Apple" />
            <LiProps Url="/Accessories" ListName="Accessories" />
            <LiProps Url="/Support" ListName="Support" />
            <LiProps Url="/Search" ListName={<img src={searchSm} alt="" />} />
            <LiProps Url="/Cart" ListName={<img src={cartSm} alt="" />} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default LaptopNav;
