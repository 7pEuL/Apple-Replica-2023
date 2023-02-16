import React from "react";
import "../../App.css";

import "./WatchUltra.css";

import Header from "../../Components/Header/Header";
import MainProps from "../MainProps";
import Footer from "../../Components/Footer/Footer";

function Watch4Views() {
  return (
    <div>
      <Header />

      <MainProps
        FromTop="top-50"
        ProDescriptionLogo="New"
        ProDescriptionClass="pt-1"
        ProDescription="Adventure awaits."
        PriceClass="grey"
        Price="$799"
        SecondLink="Watch the film"
        BrandImgClass="container-fluid watch-ultra bg-imgs"
      />

      <MainProps
        FromTop="top-50"
        BrandImgClass="container-fluid iphone-14 bg-imgs"
        BrandType="New"
        BrandName="iPhone 14"
        Description="Big and bigger"
        Price="From $33.29/mo. for 24 mo. or $799 before trade‑in1"
      />

      <Footer />
    </div>
  );
}

export default Watch4Views;

// <section class="fullHide">
//   <section class="text-center">
//     <div class="container-fluid watch-ultra bg-imgs">
//       <img src={watchUltraLogo} alt="" />
//       <h5 class="pt-1">Adventure awaits.</h5>
//       <div class="links">
//         <div class="d-flex justify-content-center align-items-center gap-1 pb-2">
//           <a href="/">Learn more</a>
//           <i class="fa-solid fa-chevron-right pe-4"></i>
//           <a href="/">Buy</a>
//           <i class="fa-solid fa-chevron-right"></i>
//         </div>
//       </div>
//     </div>
//   </section>
// </section>;
