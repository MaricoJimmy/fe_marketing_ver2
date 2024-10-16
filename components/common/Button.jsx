import React from "react";

const Button = ({ label, children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} rounded-md outline-none transition-all`}
    >
      {label || children}
    </button>
  );
};

export default Button;
