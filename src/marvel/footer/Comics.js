import React from "react";
import "../footer/Footer.css";
import comic1 from "../img/comic1.jpg";

export default function Comics() {
  return (
    <>
      <div className="text-center  text-dark">
        <h1>Purchase Our Comics</h1>
      </div>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-lg-6 col-md-6 col-12">
            <h5 className="left-comic1">ON SALE 8/4</h5>
            <h1 className="left-comic2 text-danger">NEW COMICS THIS WEEK</h1>
            <p className="left-comic3">
              <b>Check out the newest Marvel comics coming out this week!</b>
            </p>
            <div className="butt">
              <button type="button" className="btn btn-info">
                SHOP DIGITAL COMIC
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={comic1} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}
