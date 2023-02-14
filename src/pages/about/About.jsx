import React from "react";
import AboutImg from "../../assets/images/product-3.png";

const About = () => {
  return (
    <section
      className="headp-full-feature-area-start padding-both headp-about-area"
      id="about"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* <!--Full feature image start--> */}
          <div className="col-md-6 col-lg-6 col-12 col-sm-12">
            <img
              src={AboutImg}
              alt="headphone"
              className="animateupdown mouse-move"
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </div>
          {/* <!--Full feature image end--> */}

          {/* <!--Full feature content area start--> */}
          <div className="col-md-6 col-lg-6 col-12 col-sm-12">
            {/* <!--Project title area start--> */}
            <div className="headp-project-title">
              <h4>about us</h4>
              <h1>headp About</h1>
              <span></span>
            </div>
            {/* <!--Project title area end--> */}
            <div className="headp-full-feature-content">
              <h1>Capture pure sound with the 70mm HD Driver</h1>
              <ul className="headp-full-feature-list">
                <li>
                  <i className="fal fa-check-circle"></i>
                  <span> Hard case for storage</span>
                </li>
                <li>
                  <i className="fal fa-check-circle"></i>
                  <span> Silver-coated oxygen-free copper</span>
                </li>
                <li>
                  <i className="fal fa-check-circle"></i>
                  <span> 4.4Φ balanced connection cable</span>
                </li>
                <li>
                  <i className="fal fa-check-circle"></i>
                  <span>
                    {" "}
                    Smart listening experience by Adaptive Sound Control
                  </span>
                </li>
              </ul>
              <a href="#" className="df-btn">
                <i className="fal fa-shopping-bag"></i> shop now to get reward
              </a>
            </div>
          </div>
          {/* <!--Full feature content area end--> */}
        </div>
      </div>
    </section>
  );
};

export default About;
