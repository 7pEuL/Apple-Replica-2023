import "./IPadPro.css";

const IPadPro = (props) => {
  return (
    <div>
      <section className="fullHide">
        <section className="text-center">
          {/* iPad Pro */}
          <div className="container-fluid ipad-pro bg-imgs white">
            <div className={props.NewClass}>{props.New}</div>
            <div className="fw-bold fs-1">iPad Pro</div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div className="fs-4">Supercharged by</div>
              <div className="img-m2"></div>
            </div>
            <h5 className="grey">Available starting $799</h5>
            <div className="links">
              <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                <a href="/">Learn more</a>
                <i className="fa-solid fa-chevron-right pe-4"></i>
                <a href="/">Order now</a>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default IPadPro;
