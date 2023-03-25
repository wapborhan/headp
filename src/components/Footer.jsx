import React from "react";
import FootLogo from "../assets/images/logo/logo-light.png";

const Footer = () => {
  const d = new Date();
  return (
    <footer className="footer-area-start padding-both pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={FootLogo} className="footer-logo" alt="footer-logo" />
            <ul className="social-lists">
              <li>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <p>
              Copyright &copy; {d.getFullYear()}. All Rights Reserved | Design
              by{" "}
              <a
                className="text-white text-decoration-underline"
                href="https://www.srdreamlab.com"
              >
                SR Dream Lab
              </a>
            </p>

            {/* <!--Btm to top Btn start--> */}
            <a href="#home" className="nav-link js-scroll-trigger btm-to-top">
              <i className="fas fa-angle-up"></i>
            </a>
            {/* <!--Btm to top Btn end--> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
