import React from "react";

export const TextArea = ({
  placeholder,
  inputName,
  value,
  setState,
  height = "100px",
}) => {
  return (
    <div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder={placeholder}
          id="floatingTextarea2"
          style={{ height: height }}
          value={value}
          onChange={(e) => setState(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea2">{inputName}</label>
      </div>
    </div>
  );
};
