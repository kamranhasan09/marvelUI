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

        <video src={video} width="100%" height="80%" muted loop autoPlay={true} />

        <div className="content" >
          <div className="textBox">
            <h2 className=".heading_2">
              <span className="spann">Avengers</span> Doomsday
            </h2>
            <p>
              As a new and terrifying force threatens the fate of every universe, the Avengers must assemble once more alongside powerful allies to confront the ruthless Doctor Doom. With reality itself on the brink of collapse, Earth's Mightiest Heroes must fight to stop an unimaginable catastrophe, no matter what sacrifices lie ahead.
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
