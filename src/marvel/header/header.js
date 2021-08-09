import React from "react";
import logo from "../img/logo-name.png";
import video from "../img/video.mp4";
import "./header.css";

const Header = () => {
  return (
    <>
      <section className="seccc">
        <header>
          <a href="#">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <div className="toggle" ></div>
          <ul className="navigation">
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Character</a>
            </li>
            <li>
              <a href="#">Carriers</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </header>

        <video src={video} muted loop autoPlay={true} />

        <div className="content">
          <div className="textBox">
            <h2 className=".heading_2">
              <span className="spann">Avengers</span> Endgame
            </h2>
            <p>
              After the devastating events of Avengers: Infinity War (2018), the
              universe is in ruins due to the effarts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must Assemble once
              more in order to undo Thanos actions and restore order to the
              universe once and foe all, no matter what consequences may be in
              store.
            </p>
            <a href="#">Watch trailler now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
