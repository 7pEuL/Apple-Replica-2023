import LiProps from "./LiProps";
import "./footerScript";
import "./Footer.css";

import flagIcon from "../../Resources/icons/16.png";

const Footer = () => {
  return (
    <>
      <section className="fullHide">
        <footer className="bg-light">
          {/* <!-- Phone footer --> */}
          <div className="container d-lg-none p-3 pho-text">
            <div className="row">
              <div className="col">
                <div className="div-footer">
                  <div className="">
                    1. Apple Fitness+ requires iPhone 8 or later, or Apple Watch
                    Series 3 or later paired with iPhone 6s or later. New
                    subscribers only. $9.99/month after trial. Plan
                    automatically renews until cancelled. Terms apply. <br />
                    <br />
                    A subscription is required for Apple Fitness+. <br />
                    <br /> Apple Fitness+ requires an iPhone 8 or later with iOS
                    16.1. <br />
                    <br /> Apple Fitness+ requires an Apple Watch Series 3 or
                    later. <br />
                    <br /> Available when paired with iPhone 6s or later with
                    iOS 14.3 or later. <br />
                    <br /> Fitness app on Apple TV requires tvOS 14.3 or later.
                    Fitness app on iPad requires iPadOS 14.3 or later. <br />
                    <br /> To get the newest features, make sure your devices
                    are running the latest software version. <br />
                    <br />
                    To access and use all the features of Apple Card, you must
                    add Apple Card to Wallet on an iPhone or iPad with the
                    latest version of iOS or iPadOS. Update to the latest
                    version by going to Settings &#62; General &#62; Software
                    Update. Tap Download and Install. <br />
                    <br />
                    Available for qualifying applicants in the United States.
                    <br />
                    <br />
                    Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or
                    later,
                    <br />
                    <br />
                    Apple Card is issued by Goldman Sachs Bank USA, Salt Lake
                    City Branch. <br />
                    <br />
                    Learn more about how Apple Card applications are evaluated
                    at
                    <a href="/">support.apple.com/kb/HT209218</a>. <br />
                    <br />
                  </div>

                  <hr />
                  <br />

                  <div className="listUl">
                    <div className="toggleSt1 d-flex justify-content-between px-1">
                      <p className="">Shop and Learn</p>
                      <span className="shopX1">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery1">
                      <LiProps Url="/Store" ListName="Store" />
                      <LiProps Url="/Mac" ListName="Mac" />
                      <LiProps Url="/iPad" ListName="iPad" />
                      <LiProps Url="/iPhone" ListName="iPhone" />
                      <LiProps Url="/Watch" ListName="Watch" />
                      <LiProps Url="/TV & Home" ListName="TV & Home" />
                      <LiProps Url="/AirPods" ListName="AirPods" />
                      <LiProps Url="/AirTag" ListName="AirTag" />
                      <LiProps Url="/Accessories" ListName="Accessories" />
                      <LiProps Url="/Gift Cards" ListName="Gift Cards" />
                    </div>
                    <hr />
                    <div className="toggleSt2 d-flex justify-content-between px-1">
                      <p className="">Services</p>
                      <span className="shopX2">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery2">
                      <LiProps ListName="Apple Music" />
                      <LiProps ListName="Apple News+" />
                      <LiProps ListName="Apple TV+" />
                      <LiProps ListName="Apple Arcade" />
                      <LiProps ListName="Apple Card" />
                      <LiProps ListName="iCloud" />
                    </div>
                    <hr />
                    <div className="toggleSt3 d-flex justify-content-between px-1">
                      <p className="">Account</p>
                      <span className="shopX3">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery3">
                      <LiProps ListName="Manage Your Apple ID" />
                      <LiProps ListName="Apple Store Account" />
                      <LiProps ListName="iCloud.com" />
                    </div>
                    <hr />
                    <div className="toggleSt4 d-flex justify-content-between px-1">
                      <p className="">Apple Store</p>
                      <span className="shopX4">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery4">
                      <LiProps ListName="Find a store" />
                      <LiProps ListName="Genius Bar" />
                      <LiProps ListName="Today at Apple" />
                      <LiProps ListName="Apple Camp" />
                      <LiProps ListName="Field Trip" />
                      <LiProps ListName="Apple Store App" />
                      <LiProps ListName="Refurbished and Clearance" />
                      <LiProps ListName="Financing" />
                      <LiProps ListName="Apple Trade In" />
                      <LiProps ListName="Order Status" />
                      <LiProps ListName="Shopping Help" />
                    </div>
                    <hr />
                    <div className="toggleSt5 d-flex justify-content-between px-1">
                      <p className="">For Business</p>
                      <span className="shopX5">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery5">
                      <LiProps ListName="Apple and Business" />
                      <LiProps ListName="Shop for Business" />
                    </div>
                    <hr />
                    <div className="toggleSt6 d-flex justify-content-between px-1">
                      <p className="">For Education</p>
                      <span className="shopX6">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery6">
                      <LiProps ListName="Apple and Education" />
                      <LiProps ListName="Shop for College" />
                    </div>
                    <hr />
                    <div className="toggleSt7 d-flex justify-content-between px-1">
                      <p className="">For Healthcare</p>
                      <span className="shopX7">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery7">
                      <LiProps ListName="Manage Your Apple ID" />
                      <LiProps ListName="Apple Store Account" />
                      <LiProps ListName="iCloud.com" />
                    </div>
                    <hr />
                    <div className="toggleSt8 d-flex justify-content-between px-1">
                      <p className="">For Government</p>
                      <span className="shopX8">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery8">
                      <LiProps ListName="Apple and Education" />
                      <LiProps ListName="Shop for College" />
                    </div>
                    <hr />
                    <div className="toggleSt9 d-flex justify-content-between px-1">
                      <p className="">Apple Values</p>
                      <span className="shopX9">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery9">
                      <LiProps ListName="Find a store" />
                      <LiProps ListName="Genius Bar" />
                      <LiProps ListName="Today at Apple" />
                      <LiProps ListName="Apple Camp" />
                      <LiProps ListName="Field Trip" />
                      <LiProps ListName="Apple Store App" />
                    </div>
                    <hr />
                    <div className="toggleSt10 d-flex justify-content-between px-1">
                      <p className="">About Apple</p>
                      <span className="shopX10">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2 pt-2 slideToggleJsQuery10">
                      <LiProps ListName="Find a store" />
                      <LiProps ListName="Genius Bar" />
                      <LiProps ListName="Today at Apple" />
                      <LiProps ListName="Apple Camp" />
                      <LiProps ListName="Field Trip" />
                      <LiProps ListName="Apple Store App" />
                    </div>
                    <hr />
                  </div>

                  <div className="div-more-ways">
                    More ways to shop: <a href="/">Find an Apple Store</a> or
                    <a href="/"> Other Retailer</a> near you. Or call
                    1-800-MY-APPLE.
                  </div>

                  <div className="">
                    <div className="usa-icon-text gap-2 py-2">
                      <div>
                        <img src={flagIcon} alt="usa flag icon in circle" />
                      </div>
                      <div className="usa-text">United States</div>
                    </div>
                    <div className="py-2">
                      Copyright &copy; 2019 Apple Inc. All rights reserved.
                    </div>
                  </div>
                  <div className="term-of-use">
                    <ul className="px-1">
                      <LiProps ListNameClass="tega" ListName="Privacy Policy" />
                      <LiProps ListNameClass="tega" ListName="Terms of Use" />
                      <LiProps
                        ListNameClass="tega"
                        ListName="Sales and Refunds"
                      />
                      <LiProps ListNameClass="tega" ListName="Legal" />
                      <LiProps ListNameClass="tega" ListName="Site Map" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Laptop footer --> */}
          <div className="d-none d-lg-block p-3 lap-text">
            <div className="">
              <div className="">
                <div className="pb-2">
                  1. Apple Fitness+ requires iPhone 8 or later, or Apple Watch
                  Series 3 or later paired with iPhone 6s or later. New
                  subscribers only. $9.99/month after trial. Plan automatically
                  renews until cancelled. Terms apply. <br />
                </div>
                <div className="pb-2">
                  A subscription is required for Apple Fitness+. <br />
                </div>
                <div className="pb-2">
                  Apple Fitness+ requires an iPhone 8 or later with iOS 16.1.
                  <br />
                </div>
                <div className="pb-2">
                  Apple Fitness+ requires an Apple Watch Series 3 or later.{" "}
                  <br />
                </div>
                <div className="pb-2">
                  Available when paired with iPhone 6s or later with iOS 14.3 or
                  later. <br />
                </div>
                <div className="pb-2">
                  Fitness app on Apple TV requires tvOS 14.3 or later.
                </div>
                Fitness app on iPad requires iPadOS 14.3 or later. <br />
                <div className="pb-2">
                  To get the newest features, make sure your devices are running
                  the latest software version. <br />
                </div>
                <div className="pb-2">
                  To access and use all the features of Apple Card, you must add
                  Apple Card to Wallet on an iPhone or iPad with the latest
                  version of iOS or iPadOS. Update to the latest version by
                  going to Settings &#62; General &#62; Software Update. Tap
                  Download and Install. <br />
                </div>
                <div className="pb-2">
                  Available for qualifying applicants in the United States.
                  <br />
                </div>
                <div className="pb-2">
                  Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or
                  later,
                  <br />
                </div>
                <div className="pb-2">
                  Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
                  Branch. <br />
                </div>
                <div className="pb-2">
                  Learn more about how Apple Card applications are evaluated at
                  <a href="/">support.apple.com/kb/HT209218</a>. <br />
                </div>
              </div>

              <hr />
              <br />

              <div className="d-flex justify-content-between">
                <div>
                  <b>Shop and Learn</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps Url="/Store" ListName="Store" />
                    <LiProps Url="/Mac" ListName="Mac" />
                    <LiProps Url="/iPad" ListName="iPad" />
                    <LiProps Url="/iPhone" ListName="iPhone" />
                    <LiProps Url="/Watch" ListName="Watch" />
                    <LiProps Url="/TV & Home" ListName="TV & Home" />
                    <LiProps Url="/AirPods" ListName="AirPods" />
                    <LiProps Url="/AirTag" ListName="AirTag" />
                    <LiProps Url="/Accessories" ListName="Accessories" />
                    <LiProps Url="/Gift Cards" ListName="Gift Cards" />
                  </div>
                </div>

                <div className="d-flex flex-column gap-2">
                  <b>Services</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Apple Music" />
                    <LiProps ListName="Apple News+" />
                    <LiProps ListName="Apple TV+" />
                    <LiProps ListName="Apple Arcade" />
                    <LiProps ListName="Apple Card" />
                    <LiProps ListName="iCloud" />
                  </div>
                  <br />
                  <b>Account</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Manage Your Apple ID" />
                    <LiProps ListName="Apple Store Account" />
                    <LiProps ListName="iCloud.com" />
                  </div>
                </div>

                <div className="d-flex flex-column gap-2">
                  <b>Apple Store</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Find a store" />
                    <LiProps ListName="Genius Bar" />
                    <LiProps ListName="Today at Apple" />
                    <LiProps ListName="Apple Camp" />
                    <LiProps ListName="Field Trip" />
                    <LiProps ListName="Apple Store App" />
                    <LiProps ListName="Refurbished and Clearance" />
                    <LiProps ListName="Financing" />
                    <LiProps ListName="Apple Trade In" />
                    <LiProps ListName="Order Status" />
                    <LiProps ListName="Shopping Help" />
                  </div>
                </div>

                <div className="d-flex flex-column gap-2">
                  <b>For Business</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Apple and Business" />
                    <LiProps ListName="Shop for Business" />
                  </div>
                  <br />
                  <b className="d-flex flex-column gap-2">For Education</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Apple and Education" />
                    <LiProps ListName="Shop for College" />
                  </div>
                  <br />
                  <b className="d-flex flex-column gap-2">For Healthcare</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Manage Your Apple ID" />
                    <LiProps ListName="Apple Store Account" />
                    <LiProps ListName="iCloud.com" />
                  </div>
                  <br />
                  <b className="d-flex flex-column gap-2">For Government</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Apple and Education" />
                    <LiProps ListName="Shop for College" />
                  </div>
                </div>

                <div className="d-flex flex-column gap-2">
                  <b>Apple Values</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Find a store" />
                    <LiProps ListName="Genius Bar" />
                    <LiProps ListName="Today at Apple" />
                    <LiProps ListName="Apple Camp" />
                    <LiProps ListName="Field Trip" />
                    <LiProps ListName="Apple Store App" />
                  </div>
                  <br />
                  <b>About Apple</b>
                  <div className="d-flex flex-column gap-2 pt-2">
                    <LiProps ListName="Find a store" />
                    <LiProps ListName="Genius Bar" />
                    <LiProps ListName="Today at Apple" />
                    <LiProps ListName="Apple Camp" />
                    <LiProps ListName="Field Trip" />
                    <LiProps ListName="Apple Store App" />
                  </div>
                </div>
              </div>

              <div className="div-more-ways">
                More ways to shop: <a href="/">Find an Apple Store</a> or
                <a href="/"> Other Retailer</a> near you. Or call
                1-800-MY-APPLE.
              </div>

              <hr />

              <div className="d-flex">
                <div>Copyright &copy; 2019 Apple Inc. All rights reserved.</div>
                <div className="ps-3">
                  <div className="d-flex gap-1 border-r">
                    <div className="border-r">
                      <a href="/">Privacy Policy</a>
                    </div>
                    <div className="border-r">
                      <a href="/">Terms of Use</a>
                    </div>
                    <div className="border-r">
                      <a href="/">Sales and Refunds</a>
                    </div>
                    <div className="border-r">
                      <a href="/">Legal</a>
                    </div>
                    <div className="border-r">
                      <a href="/">Site Map</a>
                    </div>
                  </div>
                </div>
                <div className="gap-2 flag-us">
                  <div className="">
                    <img src={flagIcon} alt="usa flag icon in circle" />
                  </div>
                  <div className="usa-text">United States</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
