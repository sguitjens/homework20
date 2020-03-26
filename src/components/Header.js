import React from "react";
// import { Link } from "react-router-dom";
import Nav from "../components/Nav"

function Header() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row justify-content-between align-items-center">
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-2 visible-md-* visible-lg-*"></div>
            <div className="col-md-8 text-center text-white h3">
              Sydney Guitjens
            </div>
          </div>
        </div>
        <div className="col-sm-5 justify-content-end text-lg-right text-md-center">
        {/* <div className="col-md-5 justify-content-end text-lg-right text-md-center navlinks"> */}
        <Nav></Nav>
          </div>
      </div>
    </div>
  );
}

export default Header;