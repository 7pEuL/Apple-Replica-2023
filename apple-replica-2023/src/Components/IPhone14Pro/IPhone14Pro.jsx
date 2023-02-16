import "./IPhone14Pro.css";

const IPhone14Pro = (props) => {
  return (
    <>
      <section className="fullHide">
        <section className="text-center">
          {/* iphone-14-pro */}
          <div className="container-fluid iphone-14-pro bg-imgs white">
            <div className={props.NewClass}>{props.New}</div>
            <h1 className="fw-bold">iPhone 14 Pro</h1>
            <h5 className="">Pro.Beyond</h5>
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
    </>
  );
};

export default IPhone14Pro;