import React from "react";

function PagesTemplate(props) {
  return (
    <section className="fullHide">
      <section className="text-center">
        <div className="top-7">
          {/* iphone-14 */}
          <div className={props.bgLogoClass}>
          <div className="text-danger">New</div>
            <h1 className="fw-bold">{props.BrandName}</h1>

            <h5 className="">{props.Descriptions}</h5>

            <h5 className="mt-4 fs-6">{props.PriceFrom}</h5>

            <div className="links">
              <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                <a
                  href="/"
                  className="badge rounded-pill text-bg-primary p-2 me-3"
                >
                  Order Now
                </a>
                <a href="/">Learn more</a>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>

            <h5 className="grey mt-2 fs-6">{props.Price}</h5>
          </div>
        </div>
      </section>
    </section>
  );
}

export default PagesTemplate;
