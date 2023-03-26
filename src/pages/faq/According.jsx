import React, { useState, useRef } from "react";

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
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
  );
};

export default AccordionItem;
