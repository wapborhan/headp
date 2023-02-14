import React from "react";
import ProductImg1 from "../../assets/images/product-1.png";
import ProductImg2 from "../../assets/images/product-2.png";
import ProductImg3 from "../../assets/images/product-3.png";
import ProductImg4 from "../../assets/images/product-4.png";
const product = [
  {
    img: ProductImg1,
    title: "70 mm HD driver",
    desc: [
      { 0: " Hard case for storage" },
      { 1: "Silver-coated oxygen-free copper" },
      { 2: "4.4Φ balanced connection cable" },
    ],
    price: "150",
  },
  {
    img: ProductImg2,
    title: "70 mm HD driver",
    desc: [
      { 0: " Hard case for storage" },
      { 1: "Silver-coated oxygen-free copper" },
      { 2: "4.4Φ balanced connection cable" },
    ],
    price: "150",
  },
  {
    img: ProductImg3,
    title: "70 mm HD driver",
    desc: [
      { 0: " Hard case for storage" },
      { 1: "Silver-coated oxygen-free copper" },
      { 2: "4.4Φ balanced connection cable" },
    ],
    price: "150",
  },
  {
    img: ProductImg4,
    title: "70 mm HD driver",
    desc: [
      { 0: " Hard case for storage" },
      { 1: "Silver-coated oxygen-free copper" },
      { 2: "4.4Φ balanced connection cable" },
    ],
    price: "150",
  },
];

const Product = () => {
  return (
    <section
      className="headp-product-area-start df-bg padding-both"
      id="product"
    >
      <div className="container">
        <div className="row">
          {/* <!--Project title area start--> */}
          <div className="col-md-12">
            <div className="headp-project-title">
              <h4>Products</h4>
              <h1>
                You can choose your <br />
                favorite products.
              </h1>
              <span></span>
            </div>
          </div>
          {/* <!--Project title area end--> */}

          {/* <!--Product slider area start--> */}
          <div className="col-md-12">
            <div className="headp-product-slider-area">
              <div className="row">
                {/* <!--Single product start--> */}
                {product.map((item, idx) => {
                  return (
                    <div className="col-md-6 mb-4" key={idx}>
                      <div
                        className="single-product-slider mouse-move"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="d-flex">
                          <div className="flex-shrink-1">
                            <a href="#">
                              <img src={item.img} alt="product" />
                            </a>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <a href="#" className="product-title">
                              70 mm HD driver
                            </a>
                            <ul>
                              <li>
                                <i className="fal fa-check-circle"></i>Hard case
                                for storage
                              </li>
                              <li>
                                <i className="fal fa-check-circle"></i>{" "}
                                Silver-coated oxygen-free copper
                              </li>
                              <li>
                                <i className="fal fa-check-circle"></i> 4.4Φ
                                balanced connection cable
                              </li>
                            </ul>
                            <span className="price">$ 150</span>
                            <a href="#" className="df-btn">
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <!--Single product end-->/ */}

                {/* <!--Pagination area start--> */}
                <div className="col-md-12 mt-5">
                  <ul className="pagination  text-center">
                    <li>
                      <a href="#">
                        <i className="fal fa-angle-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">6</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--Pagination area end--> */}
              </div>
            </div>
          </div>
          {/* <!--Product slider area end--> */}
        </div>
      </div>
    </section>
  );
};

export default Product;
