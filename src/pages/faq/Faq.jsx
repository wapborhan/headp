import React, { useState, useRef } from "react";
import AccordionItem from "./According";
import FaqImg from "../../assets/images/product-4.png";
const faqs = [
  {
    id: 1,
    header: "How can I buy the headset?",
    text: ` Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.`,
  },
  {
    id: 2,
    header: "How can i order the headset?",
    text: ` Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. `,
  },
  {
    id: 3,
    header: "How much price of the headset?",
    text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.`,
  },
  {
    id: 4,
    header: "Where can I get some?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];
const Faq = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
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
            <div id="accordion">
              <div className="headp-faq-content-area">
                {faqs.map((faq, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      active={active}
                      handleToggle={handleToggle}
                      faq={faq}
                    />
                  );
                })}
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
