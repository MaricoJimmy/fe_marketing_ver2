import React from "react";

function Title({ label, className = "" }) {
  return (
    <div className="w-fit">
      <h2
        className={`${className} text-2xl md:text-4xl text-center text-neutal font-bold`}
      >
        {label}
      </h2>
    </div>
  );
}

export default Title;
