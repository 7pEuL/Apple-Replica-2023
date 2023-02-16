import "./WatchSeries8AirPodsPro.css";

import watchSeries8 from "../../Resources/icons/22promo_logo_apple_watch_series_8_ee6riplsucuq_large.png";

const WatchSeries8AirPodsPro = () => {
  return (
    <div>
      <section className="fullHide">
        <section className="text-center">
          {/* watch-series-8 and airPods-pro */}
          <div className="container-fluid">
            <div className="row">
              {/* watch-series-8 */}
              <div className="col-md-6">
                <div className="container-fluid watch-series-8 bg-imgs white">
                  <img src={watchSeries8} alt="" />
                  <h5 className="pt-1">A healthy leap ahead.</h5>
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

              {/* airPods-pro */}
              <div className="col-md-6">
                <div className="container-fluid airpods-pro bg-imgs white">
                  <h1 className="fw-bold">AirPods Pro</h1>
                  <h5 className="">Rebuilt from the sound up.</h5>
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

export default WatchSeries8AirPodsPro;
