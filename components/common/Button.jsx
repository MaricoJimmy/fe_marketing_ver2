import React from "react";

const Button = ({ label, children, className = "", ...rest }) => {
    return (
        <button {...rest} className={`${className} rounded-md outline-none`}>
            {label || children}
        </button>
    );
};

export default Button;
