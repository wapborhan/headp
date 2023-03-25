import React from "react";
import HeroImg from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <section className="headp-hero-area-start df-bg" id="home">
      <div className="bg-shape"></div>
      <div className="container">
        <div className="row align-items-center">
          {/* <!--headp-hero-text-area start--> */}
          <div className="col-md-6 col-lg-5 col-12">
            <div className="headp-hero-text-area">
              <span>headphone</span>
              <h1>Superior Sound, Tangible Quality</h1>
              <p>
                Sit back, relax and prepare to experience a new level of audio
                excellence. These headphones combine cutting-edge technology
                with the finest craftsmanship, for the ultimate listening
                experience.
              </p>
              <a href="#" className="df-btn">
                <i className="fal fa-shopping-bag"></i> buy products
              </a>
            </div>
          </div>
          {/* <!--headp-hero-text-area end--> */}
          {/* <!--headp-hero-image-area-start--> */}
          <div className="col-md-5 col-lg-7 col-12">
            <div className="headp-hero-image-area-start owl-carousel owl-theme">
              <div
                className="single-image animateupdown mouse-move"
                style={{
                  background: `url('${HeroImg}') no-repeat scroll center center / contain`,
                }}
              ></div>
              <div
                className="single-image animateupdown mouse-move"
                // style="background: url('assets/images/slider1.png') no-repeat scroll left center / contain"
              ></div>
            </div>
          </div>
          {/* <!--headp-hero-image-area-end--> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
