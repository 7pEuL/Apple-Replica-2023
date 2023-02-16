import "./MacBookAirAppleCard.css";

import macBookAir from "../../Resources/icons/logo_promo_macbookair__hy9ktdqqtv2a_large.png";
import appleCard from "../../Resources/icons/22logo__dcojfwkzna2q_large.png";

const MacBookAirAppleCard = () => {
  return (
    <div>
      <section className="fullHide">
        <section className="text-center">
          {/* <!-- macbook-air and apple-card --> */}
          <div className="container-fluid">
            <div className="row">
              {/* <!-- macbook-air --> */}
              <div className="col-md-6">
                <div className="container-fluid macbook-air bg-imgs">
                  <h1 className="fw-bold">MacBook Air</h1>
                  <img src={macBookAir} alt="" />
                  <div className="links pt-2">
                    <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                      <a href="/">Learn more</a>
                      <i className="fa-solid fa-chevron-right pe-4"></i>
                      <a href="/">Buy</a>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- apple-card --> */}
              <div className="col-md-6">
                <div className="container-fluid apple-card bg-imgs">
                  <img src={appleCard} alt="" />
                  <h5 className="pt-2">
                    Get up to 3% Daily Cash back
                    <br />
                    with every purchase.
                  </h5>
                  <div className="links">
                    <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                      <a href="/">Learn more</a>
                      <i className="fa-solid fa-chevron-right pe-4"></i>
                      <a href="/">Buy</a>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MacBookAirAppleCard;
