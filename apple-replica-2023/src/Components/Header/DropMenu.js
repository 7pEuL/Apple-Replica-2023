import React from "react";
import "./headerScript";

import PhoneLink from "./PhoneLink";
import searchSm from "../../Resources/icons/search-icon-sm.png";

function DropMenu() {
  return (
    <>
      {/* DropDown Phone Menu */}
      <div className="dropMenu">
        {/* <div className="menuAppleLogo">
                <a href="/">
                  <img src="./icons/logo-sm.png" alt="" />
                </a>
              </div>  */}
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search apple.com"
        />

        <div className="searchMenu">
          <img src={searchSm} alt="" />
        </div>

        <div className="hrStyle">
          <hr />
        </div>

        <PhoneLink Url="/Store" ListName="Store" />
        <hr />
        <PhoneLink Url="/Mac" ListName="Mac" />
        <hr />
        <PhoneLink Url="/iPad" ListName="iPad" />
        <hr />
        <PhoneLink Url="/iPhone" ListName="iPhone" />
        <hr />
        <PhoneLink Url="/Watch" ListName="Watch" />
        <hr />
        <PhoneLink Url="/AirPods" ListName="AirPods" />
        <hr />
        <PhoneLink Url="/TV & Home" ListName="TV & Home" />
        <hr />
        <PhoneLink Url="/Only on Apple" ListName="Only on Apple" />
        <hr />
        <PhoneLink Url="/Accessories" ListName="Accessories" />
        <hr />
        <PhoneLink Url="/Support" ListName="Support" />
      </div>
    </>
  );
}

export default DropMenu;
