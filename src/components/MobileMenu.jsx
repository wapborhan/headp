import React, { useState } from "react";
import DrawerMenu from "./DrawerMenu";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo/logo-color.png";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="mobile-menu-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mobile-menu-logo">
              <a href="index-2.html" className="nav-link js-scroll-trigger">
                <img src={Logo} alt="official-logo" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="drawer drawer--right">
              <div role="banner">
                <button
                  type="button"
                  className="drawer-toggle drawer-hamburger"
                  onClick={handleMenuToggle}
                >
                  <span className="sr-only">toggle navigation</span>
                  <span className="drawer-hamburger-icon"></span>
                </button>
                <DrawerMenu
                  isOpen={isMenuOpen}
                  onClose={handleCloseMenu}
                  className="drawer-nav"
                >
                  <div className="mobile-logo">
                    <a href="#home" className="nav-link js-scroll-trigger">
                      <img src={Logo} alt="" />
                    </a>
                    <ul className="social-menu">
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
                  </div>
                  <ul className="main-menu-area trigger">
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        activeClass="active"
                        to="home"
                        spy={true}
                        onClick={handleMenuToggle}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        activeClass="active"
                        to="feature"
                        spy={true}
                        onClick={handleMenuToggle}
                      >
                        Features
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        activeClass="active"
                        to="about"
                        spy={true}
                        onClick={handleMenuToggle}
                      >
                        about
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        activeClass="active"
                        to="product"
                        spy={true}
                        onClick={handleMenuToggle}
                      >
                        product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        activeClass="active"
                        to="faq"
                        spy={true}
                        onClick={handleMenuToggle}
                      >
                        faq
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    activeClass="active"
                    to="testimonial"
                    spy={true}
                  >
                    testimonial
                  </Link>
                </li> */}
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        onClick={handleMenuToggle}
                      >
                        contact
                      </Link>
                    </li>
                  </ul>
                </DrawerMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
