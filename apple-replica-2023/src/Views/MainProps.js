import React from "react";

import watchUltraLogo from "../Resources/icons/22hero_logo_apple_watch_ultra__etygmmkwgfma_largetall.png";

function MainProps(props) {
  const {
    FromTop,
    BrandImgClass,
    BrandType,
    BrandName,
    ProDescriptionClass,
    ProDescription,
    ProDescriptionLogo,
    Description,
    PriceClass,
    Price,
    SecondLink,
    WatchImgClass,
  } = props;

  return (
    <div>
      <section className="fullHide">
        <section className="text-center">
          <div className={FromTop}>
            {/* ipad */}
            <div className={BrandImgClass}>
              <div className="text-danger">{BrandType}</div>
              <h1 className="fw-bold">{BrandName}</h1>

              <img src={watchUltraLogo} alt="" />

              {/* For iPadPro */}
              <div className={ProDescriptionClass}>
                <div className="fs-4">{ProDescription}</div>
                <div className={ProDescriptionLogo}></div>
              </div>
              {/* For iPadPro */}

              <h4 className="">{Description}</h4>
              <h5 className={PriceClass}>{Price}</h5>
              <div className="links">
                <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                  <a href="/">Learn more</a>
                  <i className="fa-solid fa-chevron-right pe-4"></i>
                  <a href="/">{SecondLink}</a>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={WatchImgClass}></div>
        </section>
      </section>
    </div>
  );
}

export default MainProps;
