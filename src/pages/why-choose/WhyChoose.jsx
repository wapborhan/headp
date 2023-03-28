import React from "react";
// import OwlCarousel from "react-owl-carousel";
import Img1 from "../../assets/images/product-1.png";
import Img2 from "../../assets/images/product-2.png";
import Img3 from "../../assets/images/product-3.png";

const WhyChoose = () => {
  return (
    <section className="headp-why-shoose-area-start padding-both ">
      <div className="container">
        <div className="row">
          {/* <!--Choose content area start--> */}
          <div className="col-md-6 col-lg-6 col-12 col-sm-12">
            {/* <!--Project title area start--> */}
            <div className="headp-project-title">
              <h4>why choose?</h4>
              <h1>Choose you best quality products.</h1>
              <span></span>
            </div>
            {/* <!--Project title area end--> */}
            <div className="headp-why-choose-content">
              <ul className="choose-list">
                <li
                  // className="active"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="d-md-flex">
                    <div className="media-head">
                      <i className="fal fa-backpack"></i>
                    </div>
                    <div className="media-body">
                      <h4>high quality products</h4>
                      <p>
                        Optio vero at. Itaque repudiandae ullam libero doloribus
                        aspernatur minima, dolores expedita commodi aperiam?
                      </p>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="1800">
                  <div className="d-md-flex">
                    <div className="media-head">
                      <i className="fal fa-volume-up"></i>
                    </div>
                    <div className="media-body">
                      <h4>high quality sound ( no noise )</h4>
                      <p>
                        Optio vero at. Itaque repudiandae ullam libero doloribus
                        aspernatur minima, dolores expedita commodi aperiam?
                      </p>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration="2600">
                  <div className="d-md-flex">
                    <div className="media-head">
                      <i className="fal fa-headphones-alt"></i>
                    </div>
                    <div className="media-body">
                      <h4>fashionable design</h4>
                      <p>
                        Optio vero at. Itaque repudiandae ullam libero doloribus
                        aspernatur minima, dolores expedita commodi aperiam?
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--Choose content area end--> */}

          {/* <!--Product slider area start--> */}
          <div className="col-md-6 col-lg-6 col-sm-12 col-12">
            <div className="headp-product-content">
              <h3>70mm HD Driver</h3>
              <p>
                Recusclassandae officia illum cupiditate, esse cum nihil, libero
                labore harum delectus, facilis aperiam
              </p>
            </div>
            <div className="headp-product-slider owl-carousel owl-theme">
              <div
                className="headp-single-product animateupdown mouse-move"
                style={{
                  background: `url(${Img1}) no-repeat scroll center center / contain`,
                }}
              >
                <a href="#" className="df-btn">
                  <i className="fal fa-shopping-bag"></i> shop now
                </a>
              </div>
              {/* <div
                className="headp-single-product animateupdown mouse-move"
                // style="background: url('assets/images/product-2.png') no-repeat scroll center center / contain"
              >
                <a href="#" className="df-btn">
                  <i className="fal fa-shopping-bag"></i> shop now
                </a>
              </div> */}
              {/* <div
                className="headp-single-product animateupdown mouse-move"
                // style="background: url('assets/images/product-3.png') no-repeat scroll center center / contain"
              >
                <a href="#" className="df-btn">
                  <i className="fal fa-shopping-bag"></i> shop now
                </a>
              </div> */}
              {/* <div
                className="headp-single-product animateupdown mouse-move"
                // style="background: url('assets/images/product-4.png') no-repeat scroll center center / contain"
              >
                <a href="#" className="df-btn">
                  <i className="fal fa-shopping-bag"></i> shop now
                </a>
              </div> */}
            </div>
          </div>
          {/* <!--Product slider area end--> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
