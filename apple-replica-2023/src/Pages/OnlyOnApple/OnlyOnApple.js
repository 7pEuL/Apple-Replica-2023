import React from "react";
import { Link } from "react-router-dom";

import PagesNav from "../PagesNav/PagesNav";

import mac from "../../Resources/images/Store/store-card-14-16-mac-nav-202301.png";
import iPhone from "../../Resources/images/Store/store-card-13-iphone-nav-202209_GEO_US.png";
import iPad from "../../Resources/images/Store/store-card-13-ipad-nav-202210.png";
import watch from "../../Resources/images/Store/store-card-13-watch-nav-202209.png";
import airPod from "../../Resources/images/Store/store-card-13-airpods-nav-202209.png";
import airTags from "../../Resources/images/Store/store-card-13-airtags-nav-202108.png";
import appleTv from "../../Resources/images/Store/store-card-13-appletv-nav-202210.png";
import HomePod from "../../Resources/images/Store/store-card-13-homepod-nav-202301.png";
import AppleGiftCard from "../../Resources/images/Store/store-card-13-holiday-giftcards-asit-agc-nav-202111.png";
import accessories from "../../Resources/images/Store/store-card-13-accessories-nav-202209.png";

const OnlyOnApple = () => {
  return (
    <div>
      <div className="top-50 bg-light">
        <PagesNav
          name="Only on Apple "
          list1="Overview"
          list2="Tech Specs"
          list3="Product"
        />
      </div>

      <div className="container longWidth">
        <div className="row">
          <div className="store mt-5">
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={mac} alt="" />
              <Link to="">Mac</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={iPhone} alt="" />
              <Link to="">iPhone</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={iPad} alt="" />
              <Link to="">iPad</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={watch} alt="" />
              <Link to="">Apple Watch</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={airPod} alt="" />
              <Link to="">AirPods</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={airTags} alt="" />
              <Link to="">AirTag</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={appleTv} alt="" />
              <Link to="">Apple TV 4K</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={HomePod} alt="" />
              <Link to="">HomePod</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={AppleGiftCard} alt="" />
              <Link to="">Apple Gift Card</Link>
            </div>
            <div className="col-sm-12 col-md-2 watch text-center">
              <img src={accessories} alt="" />
              <Link to="">Accessories</Link>
            </div>
          </div>

          <section className="container text-dark">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-white p-2 iPad bg-store ">
                  <h1 className="mt-5">iPad</h1>
                  <h1 className="my-3">Lovable. Drawable. Magical.</h1>
                  <p className="mt-3">
                    From $449 or $37.41/mo.per month for 12 mo.monthsFootnote†
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5 text-light">
                <div className="storeBox bg-black p-2 watchBlue bg-store ">
                  <h3 className="mt-5">Apple Watch Series 8</h3>
                  <h1 className="my-3">A healthy leap ahead.</h1>
                  <p className="mt-3">
                    From $399 or $16.62/mo.per month for 24 mo.monthsFootnote†
                  </p>
                </div>
              </div>
            </section>
          </section>

          <section className="container text-dark">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black text-light p-2 iPadPro bg-store ">
                  <h1 className="mt-5">iPad Pro</h1>
                  <h1 className="my-3">Supercharged by M2.</h1>
                  <p className="mt-3">
                    From $799 or $66.58/mo.per month for 12 mo.monthsFootnote†
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5 text-dark">
                <div className="storeBox bg-white p-2 watchUltra bg-store ">
                  <h5 className="mt-5">APPLE WATCH ULTRA</h5>
                  <h1 className="my-3">Adventure awaits.</h1>
                  <p className="mt-3">
                    From $799 or $33.29/mo.per month for 24 mo.monthsFootnote†
                  </p>
                </div>
              </div>
            </section>
          </section>

          <section className="container text-dark">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-white p-2 iPhone14 bg-store ">
                  <h1 className="mt-5">iPhone 14</h1>
                  <h1 className="my-3">Big and bigger.</h1>
                  <p className="mt-4">
                    {" "}
                    From $799.00 or $33.29/mo.per month for 24 mo.months before
                    trade‑inFootnote*
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5 text-light">
                <div className="storeBox bg-black p-2 HOMEPOD bg-store">
                  <h1 className="mt-5">HOME Pod</h1>
                  <h1 className="my-1">Profound sound.</h1>
                  <p className="mt-3">From $299 </p>
                </div>
              </div>
            </section>
          </section>

          <section className="container text-light">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black p-2 macBookStore bg-store ">
                  <h1 className="mt-5">MacBook Pro</h1>
                  <h4 className="my-3">Mover. Maker. Boundary breaker.</h4>
                  <p className="mt-3">
                    From $1999 or $166.58/mo.per month for 12 mo.monthsFootnote†
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black p-2 macMiniStore bg-store ">
                  <h1 className="mt-5">MAC MINI</h1>
                  <h3 className="my-3">More muscle. More hustle.</h3>
                  <p className="mt-3">
                    From $599 or $49.91/mo.per month for 12 mo.monthsFootnote†
                  </p>
                </div>
              </div>
            </section>
          </section>

          <section className="container text-light">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black p-2 iPhone14Pro bg-store ">
                  <h2 className="mt-5">iPhone 14 Pro</h2>
                  <h1 className="my-3">Pro. Beyond.</h1>
                  <p className="mt-3">
                    From $999 or $41.62/mo.per mo. before trade‑in*
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black p-2 watchGreen bg-store ">
                  <h1 className="mt-5">BLACK UNITY BAND</h1>
                  <h5 className="my-3">
                    Creativity and community.
                    <br /> Woven together.
                  </h5>
                  <h5 className="mt-3">$49</h5>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OnlyOnApple;
