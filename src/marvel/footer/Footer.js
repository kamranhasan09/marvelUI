import React from "react";
import "../footer/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="container-fluid p-5" style={{ background: "#000" }}>
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
              <li className="list-group">ABOUT MARVEL</li>
              <li className="list-group">HELP/FAQS</li>
              <li className="list-group">CAREERS</li>
              <li className="list-group">INTERNSHIPS</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-group">
              <li className="list-group">ADVERTISING</li>
              <li className="list-group">DISNEY+</li>
              <li className="list-group">MARVELHQ.COM</li>
              <li className="list-group">REDEEM DIGITAL COMICS</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-group">
              <li className="list-group">MARVEL INSIDER</li>
              <li className="list-group">
                Get Rewarded for Being a Marvel Fan
              </li>

              <li className="list-group">MARVEL UNLIMITED</li>
              <li className="list-group">Access Over 28,000 Digital Comics</li>
            </ul>
          </div>
          <div className="col-3">
            <div className="footer-info text-center">
              <p>FOLLOW MARVEL</p>
              <div className="social-links mt-3 social-links">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-skype"></a>
                <a href="#" className="fa fa-youtube"></a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="copyright">
            Privacy Policy&emsp; Your California Privacy Rights&emsp; Do Not
            Sell My Personal Information&emsp; Children's Online Privacy
            Policy&emsp; License Agreement&emsp; Interest-Ads
            <div className="credits">Marvel Insider Terms ©2021 MARVEL</div>
          </div>
        </div>
      </div>
    </>
  );
}
