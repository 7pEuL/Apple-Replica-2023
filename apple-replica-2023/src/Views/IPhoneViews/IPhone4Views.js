import React from "react";
import "../../App.css";

import Header from "../../Components/Header/Header";
import MainProps from "../MainProps";
import Footer from "../../Components/Footer/Footer";
import "./IPhone14.css";
import "./IPhone14Pro.css";

function IPhone4Views() {
  return (
    <div>
      <Header />

      <MainProps
        FromTop="top-50"
        BrandImgClass="container-fluid iphone-14-pro bg-imgs white"
        BrandType="New"
        BrandName="iPhone 14 Pro"
        Description="Pro.Beyond"
        PriceClass="grey"
        Price="From $41.62/mo. for 24 mo. or $999 before trade‑in1"
        SecondLink="Order Now"
      />

      <MainProps
        FromTop="top-50"
        BrandImgClass="container-fluid iphone-14 bg-imgs"
        BrandType="New"
        BrandName="iPhone 14"
        Description="Big and bigger"
        Price="From $33.29/mo. for 24 mo. or $799 before trade‑in1"
        SecondLink="Order Now"
      />

      <Footer />
    </div>
  );
}

export default IPhone4Views;
