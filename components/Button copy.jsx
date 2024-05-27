import React from "react";

function Button({ name, type, classname, text, onclick, children, img }) {
  return (
    <>
      <button onClick={onclick} className={classname}>
        {text && !img ? (
          text
        ) : img && !text ? (
          <img className="sm:size-7 size-10" src={img} alt="image" />
        ) : img && text ? (
          <div className="flex items-center justify-center gap-1">
            <img className="sm:size-7 size-10" src={img} alt="image" />
            <span className="sm:text-2xl text-3xl ">{text}</span>
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
}

export default Button;
