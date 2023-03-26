import React, { useState, useRef } from "react";

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div id="accordion">
      <div className="card" data-aos="fade-up" data-aos-duration="1000">
        <div
          className={`card-header ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
          // id="headingOne"
        >
          <h5 className="mb-0">
            {" "}
            <button
              className={`btn btn-link ${active === id ? "" : "collapsed"} `}
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {header}
            </button>
          </h5>
        </div>

        <div
          ref={contentEl}
          className={`collapse ${active === id ? "show" : ""}`}
          // style={
          //   active === id
          //     ? { height: contentEl.current.scrollHeight }
          //     : { height: "100%" }
          // }
        >
          <div className="card-body">
            <p className="mb-0">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
<div id="accordion">
  <div className="card" data-aos="fade-up" data-aos-duration="2800">
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
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </p>
      </div>
    </div>
  </div>
  <div className="card" data-aos="fade-up" data-aos-duration="2900">
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
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </p>
      </div>
    </div>
  </div>
</div>;
