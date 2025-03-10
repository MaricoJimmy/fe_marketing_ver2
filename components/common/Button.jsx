import React from "react";

const Button = ({ label, title, children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      title={label || title}
      className={`${className} rounded-md outline-none transition-all`}
    >
      {label || children}
    </button>
  );
};

export default Button;
