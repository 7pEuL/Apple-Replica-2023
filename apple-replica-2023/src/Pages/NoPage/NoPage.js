import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <div className="text-center">
        <div className="jumbotron bg-light mt-2 px-5 pt-5 pb-5 mb-5">
          <h1 className="display-4 text-success fs-1">Hello, world!</h1>
          <h1 className="display-4 text-warning">You are Lost, Mia!</h1>
          <p className="lead text-danger">
            This is No Page with this path, simply go to{" "}
            <a href="http://localhost:3000/">apple.com</a> for calling exact
            location attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>Check if there is a type error every word.</p>
          <p>If spelling is correct, try running Windows Network Diagnostics.</p>
          <p>DNS_PROBE_FINISHED_NXDOMAIN</p>
          <Link className="btn btn-info text-light btn-lg" role="button" to="http://localhost:3000/">
            Reload
          </Link>
        </div>
      </div>
    </>
  );
}

export default NoPage;
