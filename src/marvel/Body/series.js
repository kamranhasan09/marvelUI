import React from "react";
import Tilt from "react-parallax-tilt";

const Series = (prop) => {
  return (
    <>
      <div className="container text-light">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <div className="p-5">
                <Tilt>
                  <img src={prop.img} className="img-fluid" />
                </Tilt>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div className="p-5">
                <h1 className=" text-center ">{prop.name}</h1>
                <h4 className=" text-center">
                  Now stream all Episode of {prop.name} available on Disney+
                  hotstar
                </h4>
                <hr />
                <p className="">{prop.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Series;
