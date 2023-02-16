import React from "react";

import IPad from "../../Components/IPad/IPad";
import IPadPro from "../../Components/IPadPro/IPadPro";
import PagesNav from "../PagesNav/PagesNav";
// import NavMac from "../NavMac/NavMac";

import "./NavIPad.css";

function NavIPad() {
  return (
    <>
      <div className="top-30 bg-light">
        <PagesNav
          name="iPad Pro"
          list1="Overview"
          list2="Why iPad"
          list3="Tech Specs"
        />
      </div>

      <div className="gift text-light bg-danger container-fluid">
        <h1>
          <p className="container-fluid text-bg-danger grey m-3">
            Find gifts to jump start their Lunar New Year. Shop the gift guide
            <i className="fa-solid fa-chevron-right ms-2 fs-6"></i>
          </p>
        </h1>
      </div>

      <IPad NewClass="text-danger" New="New" />

      <IPadPro NewClass="text-danger" New="New" />
    </>
  );
}

export default NavIPad;
