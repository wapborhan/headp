import React from "react";
import FaqImg from "../../assets/images/product-4.png";

const Faq = () => {
  return (
    <section className="headp-faq-area-start padding-both" id="faq">
      <div className="container">
        <div className="row">
          {/* <!--Project title area start--> */}
          <div className="col-md-12">
            <div className="headp-project-title">
              <h4>FAQS</h4>
              <h1>Frequently Asked question</h1>
              <span></span>
            </div>
          </div>
          {/* <!--Project title area end--> */}
        </div>

        <div className="row">
          {/* <!--faq area content start--> */}
          <div className="col-md-6">
            <div className="headp-faq-content-area">
              <div id="accordion">
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How can I buy the headset?
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                >
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How can i order the headset?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How much price of the headset?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="2800"
                >
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How can i get refund?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="2900"
                >
                  <div className="card-header" id="headingFive">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        do you have any premium plan?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--faq area content end--> */}
          {/* <!--faq area image start--> */}
          <div className="col-md-6">
            <div className="headp-faq-area-image">
              <img
                src={FaqImg}
                alt="product"
                className="animateupdown mouse-move"
                data-aos="fade-left"
                data-aos-duration="1500"
              />
            </div>
          </div>
          {/* <!--faq area image end--> */}
        </div>
      </div>
    </section>
  );
};

export default Faq;
