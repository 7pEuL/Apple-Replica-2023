import React from "react";

import "./NavMac.css";

import PagesNav from "../PagesNav/PagesNav";
import PagesTemplate from "../PagesTemplate";
import macBookAir from "../../Resources/icons/logo_promo_macbookair__hy9ktdqqtv2a_large.png";
import { Link } from "react-router-dom";

function NavMac() {
  return (
    <>
      <div className="top-30 bg-violate">
        <PagesNav
          name="Mac"
          list1="Overview"
          list2="Why Mac"
          list3="Tech Specs"
        />
      </div>

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <div className="container-fluid macbook-air bg-imgs">
              <h1 className="fw-bold">MacBook Air</h1>
              <img src={macBookAir} alt="" />
              <div className="links pt-2">
                <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                  <Link to="...">Learn more</Link>
                  <i className="fa-solid fa-chevron-right pe-4"></i>
                  <a href="...">Buy</a>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font text-light">
        <h1>
          Introducing the New
          <br />
          MacBook Pro and Mac mini.
          <p className="badge rounded-pill text-bg-light grey fs-5 m-3">
            Watch the announcement
            <i className="bi bi-play-circle-fill ms-2 fs-6"></i>
          </p>
        </h1>
      </div>

      <PagesTemplate
        bgLogoClass="container-fluid MacBookPro bg-imgs white"
        BrandName="MacBook Pro"
        Descriptions="Mover. Maker. Boundary breaker."
        PriceFrom="From $1999"
        Price="Available starting 1.24"
      />

      <PagesTemplate
        bgLogoClass="container-fluid MacMini bg-imgs white"
        BrandName="Mac mini"
        Descriptions="More muscle. More hustle."
        PriceFrom="From $599"
        Price="Available starting 1.24"
      />
    </>
  );
}

export default NavMac;
