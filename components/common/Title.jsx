import React from "react";

function Title({ label, className = "", ...props }) {
  return (
    <div className="w-fit">
      <h2
        {...props}
        className={`${className} text-2xl md:text-4xl text-center text-neutral font-bold`}
      >
        {label}
      </h2>
    </div>
  );
}

export default Title;
