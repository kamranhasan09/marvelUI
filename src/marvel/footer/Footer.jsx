import "../footer/Footer.css";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="container-fluid p-5" style={{ background: "#000" }}>
        <div className="row" >
          <div className="col-sm-3 border-bottom">
            <ul className="list-group">
              <li className="list-group">ABOUT MARVEL</li>
              <li className="list-group">HELP/FAQS</li>
              <li className="list-group">CAREERS</li>
              <li className="list-group">INTERNSHIPS</li>
            </ul>
          </div>
          <div className=" col-sm-3 border-bottom p-2">
            <ul className="list-group">
              <li className="list-group">ADVERTISING</li>
              <li className="list-group">DISNEY+</li>
              <li className="list-group">MARVELHQ.COM</li>
              <li className="list-group">REDEEM DIGITAL COMICS</li>
            </ul>
          </div>
          <div className="col-sm-3 border-bottom p-2">
            <ul className="list-group">
              <li className="list-group">MARVEL INSIDER</li>
              <li className="list-group">
                Get Rewarded for Being a Marvel Fan
              </li>

              <li className="list-group">MARVEL UNLIMITED</li>
              <li className="list-group">Access Over 28,000 Digital Comics</li>
            </ul>
          </div>
          <div className="col-sm-3 border-bottom p-2">
            <div className="footer-info text-center">
              <p>FOLLOW MARVEL</p>
              <div className="social-links mt-3 social-links">
                <a href="https://www.facebook.com/Marvel/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><div className="fa fa-facebook"></div></a>
                <a href="https://twitter.com/Marvel" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><div className="fa fa-twitter"></div></a>
                <a href="https://www.instagram.com/marvel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><div className="fa fa-instagram"></div></a>
                <a href="https://www.skype.com/" target="_blank" rel="noopener noreferrer" aria-label="Skype"><div className="fa fa-skype"></div></a>
                <a href="https://www.youtube.com/marvel" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><div className="fa fa-youtube"></div></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="copyright">
            Privacy Policy&emsp; Your California Privacy Rights&emsp; Do Not
            Sell My Personal Information&emsp; Children's Online Privacy
            Policy&emsp; License Agreement&emsp; Interest-Ads
            <div className="credits">Marvel Insider Terms ©{year} MARVEL</div>
          </div>
        </div>
      </div>
    </>
  );
}
