import React from "react";
import { FaPlus } from "react-icons/fa6";

const Accordion = ({ heading, desc, open, setOpen }) => {
  return (
    <div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="flex items-center justify-between w-full p-5  text-gray-500 border-b border-secondary-200    gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span className="font-semibold text-lg  text-primary-100">
              {heading}
            </span>
            <FaPlus />
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${open ? "block" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200">
            <p className="mb-2 text-primary-300 dark:text-gray-400">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
