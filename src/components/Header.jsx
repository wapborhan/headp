import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import HeadImg from "../assets/images/logo/logo-color.png";

const Header = () => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = headerRef.current;
      if (header) {
        setIsSticky(scrollY > header.offsetTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className={
        isSticky ? "headp-header-area-start sticky" : "headp-header-area-start"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="headp-logo-area-start">
              {" "}
              <a href="index-2.html">
                <img src={HeadImg} alt="headp-official-logo" />
              </a>{" "}
            </div>
          </div>
          <div className="col-md-9">
            <nav className="headp-navigation-area-start text-right">
              <ul className="headp-main-menu trigger">
                <li className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    activeClass="active"
                    to="home"
                    spy={true}
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
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
