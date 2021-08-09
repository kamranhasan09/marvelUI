import React from "react";
import Tilt from "react-parallax-tilt";
import "./Footer.css";
import c1 from "../img/c1.jpg";
import c2 from "../img/c2.jpg";
import c3 from "../img/c3.jpg";
import c4 from "../img/c4.jpg";
import c5 from "../img/c5.jpg";
import c6 from "../img/c6.jpg";

export default function Card() {
  return (
    <div>
      <section className="cardss">
        <div className="container">
          <div className="row p-2">
            <div className="col-md-2">
              <Tilt>
                <img
                  src={c1}
                  className="img-fluid"
                  style={{ height: "20rem", width: "12rem" }}
                />
                <p>
                  <b>Extreme Carnage: Lasher (2021) #1</b>
                </p>
              </Tilt>
            </div>
            <div className="col-md-2 ">
              <Tilt>
                <img
                  src={c2}
                  className="p-2"
                  style={{ height: "20rem", width: "12rem" }}
                />
                <p>
                  <b>Sinister War (2021) #2</b>
                </p>
              </Tilt>
            </div>
            <div className="col-md-2 ">
              <Tilt>
                <img
                  src={c3}
                  className="p-2"
                  style={{ height: "20rem", width: "12rem" }}
                />
                <p>
                  <b> X-Men (2021) #2</b>
                </p>
              </Tilt>
            </div>
            <div className="col-md-2 ">
              <Tilt>
                <img
                  src={c4}
                  className="p-2"
                  style={{ height: "20rem", width: "12rem" }}
                />
                <p>
                  <b>Deadpool: Black, White & Blood (2021) </b>
                </p>
              </Tilt>
            </div>
            <div className="col-md-2 ">
              <Tilt>
                <img
                  src={c5}
                  className="p-2"
                  style={{ height: "20rem", width: "12rem" }}
                />
                <p>
                  <b>Guardians Of The Galaxy Annual (2021)</b>
                </p>
              </Tilt>
            </div>
            <div className="col-md-2">
              <Tilt>
                <img
                  src={c6}
                  className="p-2"
                  style={{ height: "20rem", width: "12rem" }}
                />
                <p>
                  <b>Avengers (2018) #47</b>
                </p>
              </Tilt>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
