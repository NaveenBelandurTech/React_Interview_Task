// Build a React Accordion component that allows users to expand and collapse sections of content. When a section is clicked, it should toggle its visibility. If a new section is clicked, it should expand while the others collapse (i.e., only one section is open at a time).

import "./Accordion.css";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { AccordionFakeJson } from "../../../utils/AccordionFakejson";
import { useState } from "react";
const Accordion = () => {
  const [toggle, setToogle] = useState(null);
  const [json, setJson] = useState(AccordionFakeJson);

  const handleclicklogo = (id) => {
    console.log(id);
    console.log(toggle);
    setToogle(toggle == id ? null : id);
  };

  return (
    <section className="faq-container">
      {console.log(toggle)}
      {json.map(({ id, title, description }) => {
        return (
          <div
            className={toggle == id ? `faq-main-box_` : `faq-main-box`}
            key={id}
          >
            <div className="faq-inside-container">
              <p>{title}</p>
              <span onClick={() => handleclicklogo(id)}>
                {toggle == id ? <FaChevronUp /> : <FaAngleDown />}
              </span>
            </div>

            {toggle == id ? (
              <div className="list__item-container">
                <p>{description}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Accordion;
