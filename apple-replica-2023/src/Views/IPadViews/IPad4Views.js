import React from "react";
import "../../App.css";

import "../../Components/IPadPro/IPadPro.css";
import "../../Components/IPad/IPad.css";

import Header from "../../Components/Header/Header";
import MainProps from "../MainProps";
import Footer from "../../Components/Footer/Footer";

function IPad4Views() {
  return (
    <div>
      <Header />
      <MainProps
        FromTop="top-50"
        BrandImgClass="container-fluid ipad bg-imgs"
        BrandType="New"
        BrandName="iPad"
        Description="Lovable.Drawable.Magical."
        PriceClass="grey"
        Price="Available starting $449"
        SecondLink="Order Now"
      />

      <MainProps
        BrandImgClass="container-fluid ipad-pro bg-imgs white"
        BrandType="New"
        BrandName="iPad Pro"
        ProDescriptionClass="d-flex justify-content-center align-items-center gap-2"
        ProDescription="Supercharged by"
        ProDescriptionLogo="img-m2"
        PriceClass="grey"
        Price="Available starting $799"
        SecondLink="Order Now"
      />

      <Footer />
    </div>
  );
}

export default IPad4Views;
