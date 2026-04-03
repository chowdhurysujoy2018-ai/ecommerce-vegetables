import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ data, defaultOpen = 0, faqItemStyle = "" }) => {
  const [activeIndex, setActiveIndex] = useState(defaultOpen);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto space-y-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${faqItemStyle} rounded-lg overflow-hidden border`}
        >
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center p-4 text-left font-semibold transition ${
              activeIndex === index ? "text-(--primary-color)" : "text-gray-900"
            }`}
          >
            <span>{item.title}</span>

            <FontAwesomeIcon
              icon={activeIndex === index ? faMinus : faPlus}
              className="text-sm"
            />
          </button>

          {/* Content (SMOOTH ANIMATION) */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight:
                activeIndex === index
                  ? contentRefs.current[index]?.scrollHeight + "px"
                  : "0px",
            }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="p-4 pt-0">
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;