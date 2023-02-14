import React from "react";
import FeatureImg from "../../assets/images/product-2.png";

const FullFeature = () => {
  return (
    <section className="headp-full-feature-area-start df-bg padding-both">
      <div className="container">
        <div className="row align-items-center">
          {/* <!--Full feature content area start--> */}
          <div className="col-md-6 col-lg-6 col-12 col-sm-12">
            <div className="headp-full-feature-content">
              <h1>pure sound, no added noise</h1>
              <ul className="headp-full-feature-list">
                <li>
                  <i className="fal fa-check-circle"></i>
                  <span> High resulation audio compatible</span>
                </li>
                <li>
                  <i className="fal fa-check-circle"></i>
                  <span>
                    {" "}
                    High quality wireless audio with BLUETOOTH® and LDAC
                    technology
                  </span>
                </li>
                <li>
                  <i className="fal fa-check-circle"></i>
                  <span> Ergonomic, enfolding design headpads</span>
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
                learn more
              </a>
            </div>
          </div>
          {/* <!--Full feature content area end--> */}

          {/* <!--Full feature image start--> */}
          <div className="col-md-6 col-lg-6 col-12 col-sm-12">
            <img
              src={FeatureImg}
              alt="headphone"
              className="animateupdown mouse-move"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          {/* <!--Full feature image end--> */}
        </div>
      </div>
    </section>
  );
};

export default FullFeature;
