import "./WatchSEFitness.css";

import watchSE from "../../Resources/icons/22promo_logo_apple_watch_se__b85vr9ri02gi_large.png";
import fitness from "../../Resources/icons/promo_logo_fitness_plus_iphone__dpayetemakq6_large.png";

const WatchSEFitness = () => {
  return (
    <div>
      <section className="fullHide">
        <section className="text-center">
          {/* watch-se and fitness */}
          <div className="container-fluid">
            <div className="row">
              {/* watch-se */}
              <div className="col-md-6">
                <div className="container-fluid watch-se bg-imgs">
                  <img src={watchSE} alt="" />
                  <h5 className="pt-1">A great deal to love.</h5>
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

              {/* fitness */}
              <div className="col-md-6">
                <div className="container-fluid fitness bg-imgs">
                  <img src={fitness} alt="" />
                  <h5 className="pt-1">
                    Fitness for everyone.
                    <br />
                    Now all you need is iPhone.
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

export default WatchSEFitness;
