import React from "react";
import ProImg from "../../assets/images/product-1.png";

const ProductCount = () => {
  return (
    <section className="headp-product-count-area df-bg padding-both">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="headp-product-count-image">
              <img
                src={ProImg}
                alt="product"
                className="mouse-move animateupdown"
                data-aos="fade-right"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div className="col-md-7">
            {/* <!--Project title area start--> */}
            <div className="headp-project-title">
              <h4>Company</h4>
              <h1>company review</h1>
              <span></span>
            </div>
            {/* <!--Project title area end--> */}

            <div className="row">
              <div className="col-md-6">
                <div
                  className="single-product-count mouse-move mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="d-flex">
                    <div className="media-head align-self-center">
                      <i className="fal fa-backpack"></i>
                    </div>
                    <div className="media-body text-right">
                      <p>
                        <span className="counter">850</span> +{" "}
                      </p>
                      <h4>No of Products</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="single-product-count mouse-move mb-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="d-flex">
                    <div className="media-head align-self-center">
                      <i className="fal fa-award"></i>
                    </div>
                    <div className="media-body text-right">
                      <p>
                        <span className="counter">12</span> +{" "}
                      </p>
                      <h4>Awards</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="single-product-count mouse-move"
                  data-aos="fade-up"
                  data-aos-duration="2400"
                >
                  <div className="d-flex">
                    <div className="media-head align-self-center">
                      <i className="fal fa-smile"></i>
                    </div>
                    <div className="media-body text-right">
                      <p>
                        <span className="counter">15850</span> +{" "}
                      </p>
                      <h4>Happy Clients</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="single-product-count mouse-move"
                  data-aos="fade-up"
                  data-aos-duration="2900"
                >
                  <div className="d-flex">
                    <div className="media-head align-self-center">
                      <i className="fal fa-female"></i>
                    </div>
                    <div className="media-body text-right">
                      <p>
                        <span className="counter">502</span> +{" "}
                      </p>
                      <h4>Employees</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCount;
