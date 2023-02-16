import "./WatchUltra.css";

import watchUltraLogo from "../../Resources/icons/22hero_logo_apple_watch_ultra__etygmmkwgfma_largetall.png";

const WatchUltra = () => {
  return (
    <div>
      <section className="fullHide">
        <section className="text-center">
          <div className="container-fluid watch-ultra bg-imgs">
            <img src={watchUltraLogo} alt="" />
            <h5 className="pt-1">Adventure awaits.</h5>
            <div className="links">
              <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                <a href="/">Learn more</a>
                <i className="fa-solid fa-chevron-right pe-4"></i>
                <a href="/">Buy</a>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default WatchUltra;
