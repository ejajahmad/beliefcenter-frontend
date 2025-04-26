import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Accordion = ({ id, title, type, content, isActive, onToggle }) => {
    return (
      <div className="border border-gray-200 bg-white rounded-lg overflow-hidden mb-4">
        <button
          onClick={() => onToggle(id)}
          className="cursor-pointer w-full flex justify-between items-center px-4 py-3 border-b border-gray-200 transition"
        >
          <div className="flex gap-1 md:gap-2 items-center">
            <span className="text-yellow-500">{type}</span>
            <span className="text-left font-bold">{title}</span>
          </div>
          {isActive ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
        </button>
        <div
          className={`${
            isActive ? "min-h-10" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="border-l-4 border-yellow-500 px-4 py-3 text-sm text-gray-700 bg-white">
            {content}
          </div>
        </div>
      </div>
    );
  };
  
  export default Accordion;