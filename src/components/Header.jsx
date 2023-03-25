import React, { useEffect, useRef, useState } from "react";
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
                  <a className="nav-link js-scroll-trigger active" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#feature">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    about
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#product">
                    product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#faq">
                    faq
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#testimonial">
                    testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    contact
                  </a>
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
