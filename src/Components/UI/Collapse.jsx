import React from "react";

const Collapse = ({ isOpen, onClick, title, children }) => {
  return (
    <div
      className="relative transition-all duration-300 border border-base-300 rounded-xl hover:shadow-lg bg-base-100"
    >
      {/* Toggle Button */}
      <button
        onClick={onClick}
        className="w-full p-5 text-left cursor-pointer text-base-content"
      >
        <div className="flex items-center justify-between">
          <span className="tracking-wide font-medium">{title}</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-500 ${
              isOpen ? "-rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 text-base-content/70">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
