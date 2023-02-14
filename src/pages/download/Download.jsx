import React from "react";
import DownImg from "../../assets/images/download.png";
import Goole from "../../assets/images/google-play.png";
import Apple from "../../assets/images/app-store.png";

const Download = () => {
  return (
    <section className="headp-download-area-start">
      <div className="container">
        <div className="row align-items-center">
          {/* <!--Download content area start--> */}
          <div className="col-md-7 col-lg-7 col-12 col-sm-12">
            <div className="headp-download-content">
              <h1>Download our apps</h1>
              <p>
                Prolend is available for all devices, consectetur adipisicing
                elit. Itaque at harum quam explicabo. Aliquam optio, delectus,
                dolorem quod neque eos totam. Delectus quae animi tenetur
                voluptates doloribus commodi dicta modi aliquid deserunt, quis
                maiores nesciunt autem, aperiam natus.
              </p>
              <a href="#">
                <img src={Goole} alt="google-play" />
              </a>
              <a href="#">
                <img src={Apple} alt="app-store" />
              </a>
            </div>
          </div>
          {/* <!--Download content area end--> */}

          {/* <!--Download image start--> */}
          <div className="col-md-5 col-lg-5 col-12 col-sm-12">
            <div className="headp-download-image">
              <img
                src={DownImg}
                alt="mobile"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
          </div>
          {/* <!--Download image end--> */}
        </div>
      </div>
    </section>
  );
};

export default Download;
