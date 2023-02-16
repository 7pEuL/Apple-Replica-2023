import "./IPad.css";

const IPad = (props) => {
  return (
    <>
      <section className="fullHide">
        <section className="text-center">
          <div className="top-50">
            {/* ipad */}
            <div className="container-fluid ipad bg-imgs">
              <div className={props.NewClass}>{props.New}</div>
              <h1 className="fw-bold">iPad</h1>

              <h4 className="">Lovable.Drawable.Magical.</h4>
              <h5 className="grey">Available starting $449</h5>
              <div className="links">
                <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                  <a href="/">Learn more</a>
                  <i className="fa-solid fa-chevron-right pe-4"></i>
                  <a href="/">Order now</a>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default IPad;
