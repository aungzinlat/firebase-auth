import React from "react";

const ButtonComponents = ({ children, style, ...rest }) => {
  return (
    <>
      <button
        className={` py-4 border text-md font-bold font-sans rounded-3xl bg-blue-500 hover:bg-blue-600 hover:shadow-md duration-200 text-white text-md w-full ${style}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonComponents;
