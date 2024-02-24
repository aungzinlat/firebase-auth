import React from "react";

const FormComponents = ({
  type,
  name,
  children,
  placeholder = "",
  ...rest
}) => {
  return (
    <div className=" flex flex-col gap-2">
      <label className=" text-xl " htmlFor={name}>
        {children}
      </label>
      <input
        className=" px-2 py-3 rounded border border-gray-300"
        {...rest}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormComponents;
