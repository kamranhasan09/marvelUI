import React from "react";
import logo from "../img/logo-name.png";
import video from "../img/video.mp4";
import bar from "../img/bar.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <section className="seccc container-fluid " id="Home">
      <div className="">
        <header>
          <div className="logo">
          <a href="/">
            <img src={logo} className="logo"  alt="logo" />
          </a>
          </div>
          
          <input type="checkbox" id="check"/>
    <label htmlFor="check" className="checkbtn">
    <img src={bar} alt="logo" />
    </label>
    
          <ul className="navigation">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Comics">Comics</a>
            </li>
            <li>
              <a href="#Movies">Movies</a>
            </li>
            <li>
              <a href="#tvshows">TV Shows</a>
            </li>
            <li>
              <a href="#Games">Games</a>
            </li>
          </ul>
        </header>

        <video src={video} muted loop autoPlay={true} />

        <div className="content" >
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
            <a href="https://www.youtube.com/watch?v=TcMBFSGVi1c" target="_blank" rel="noopener noreferrer" aria-label="Trailer">Watch trailler now</a>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Header;
