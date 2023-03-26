import React from "react";

const NewsLatter = () => {
  return (
    <section className="headp-newslater-area-start padding-both">
      <div className="container">
        <div className="row align-items-center news-bg bg-light p-5 rounded">
          <div className="col-md-6">
            <div className="headp-newslater-text">
              <h1>subscribe our newslater</h1>
              <p>We will send you latest update of the product</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="headp-newslater-form text-right">
              <form action="#" method="POST">
                <input
                  type="text"
                  name="news"
                  id="news"
                  placeholder="Enter your email"
                />
                <button type="button" className="headp-news-btn">
                  <i className="fal fa-envelope"></i> subscribe now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
