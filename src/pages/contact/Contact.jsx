import React from "react";

const Contact = () => {
  return (
    <section className="headp-contact-area-start padding-both" id="contact">
      <div className="container">
        <div className="row">
          {/* <!--Project title area start--> */}
          <div className="col-md-12">
            <div className="headp-project-title text-center">
              <h4>contact us</h4>
              <h1>
                Need Help? Don't Forget <br />
                to Contact With Us
              </h1>
              <span></span>
            </div>
          </div>
          {/* <!--Project title area end--> */}

          {/* <!--Contact form content start--> */}
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                {/* <!--Single contact start--> */}
                <div
                  className="headp-single-contact-form"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <div className="d-flex">
                    <div className="media-head">
                      <i className="fal fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span>+12 345 678 90</span>
                      <span>+21 256 487 09</span>
                    </div>
                  </div>
                </div>
                {/* <!--Single contact end--> */}
                {/* <!--Single contact start--> */}
                <div
                  className="headp-single-contact-form"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <div className="d-flex">
                    <div className="media-head">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="media-body">
                      <span>support@example.com</span>
                      <span>example@example.com</span>
                    </div>
                  </div>
                </div>
                {/* <!--Single contact end--> */}
                {/* <!--Single contact start--> */}
                <div
                  className="headp-single-contact-form"
                  data-aos="fade-up"
                  data-aos-duration="2900"
                >
                  <div className="d-flex">
                    <div className="media-head">
                      <i className="fal fa-map-marker"></i>
                    </div>
                    <div className="media-body">
                      <span>71/A Demo Area</span>
                      <span>New York, USA</span>
                    </div>
                  </div>
                </div>
                {/* <!--Single contact end--> */}
              </div>
            </div>
          </div>
          {/* <!--Contact form content end--> */}
          <div className="col-md-8">
            <form action="#" method="post">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="uname"
                    id="uname"
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>{" "}
                <br />
                <br />
                <div className="col-md-6">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Your Subject"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    className="form-control"
                  />
                </div>{" "}
                <br />
                <br />
                <div className="col-md-12">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <br />
                  <button type="button" className="df-btn cnt-btn">
                    <i className="fal fa-envelope"></i> Message
                  </button>
                  <div
                    className="mt-4 text-uppercase custom-color text-center"
                    id="mail-status"
                  ></div>
                </div>
              </div>
            </form>
          </div>
          {/* <!--Contact form--> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
