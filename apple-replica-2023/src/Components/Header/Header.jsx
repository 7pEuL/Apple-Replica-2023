import React, { useEffect } from "react";
import $ from "jquery";

// import "./headerScript";
import "./Header.css";

import PhoneNav from "./PhoneNav";
import LaptopNav from "./LaptopNav";

const Header = () => {
  useEffect(() => {
    $(() => {
      // *****************************//
      // Phone Header Nav Script Start here
      // *****************************//

      $(".dropMenu").hide();

      $(".appleMenu").on("click", () => {
        if (window.matchMedia("(max-width: 991px)").matches) {
          $(".dropMenu").toggle();
          $(".appleMenu i").toggleClass("popUp");
          // $(".noCart").toggleClass("cartMenu");
          $(".fixed-top").toggleClass("bgMenu");
          // $(".fullHide").toggleClass("allHide");
        }
      });

      // *****************************//
      // Phone Header Script End here
      // *****************************//
    });
  }, []);

  return (
    <>
      <header className="nav-bg fixed-top">
        <div className="">
          {/* Phone nav */}
          <PhoneNav />

          {/* Laptop nav */}
          <LaptopNav />
        </div>
      </header>
    </>
  );
};

export default Header;
