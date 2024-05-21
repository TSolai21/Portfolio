import React from "react";

const Button = ({ text, onclick, className }) => {
  return (
    <>
      <button onClick={onclick} className={className}>
        {text}
      </button>
    </>
  );
};

export default Button;
