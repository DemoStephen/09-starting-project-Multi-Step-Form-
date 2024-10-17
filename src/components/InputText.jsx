import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const InputText = forwardRef(function InputText(
  { title, type, name, placeholder, autoComplete, error },
  ref
) {
  return (
    <>
      <label htmlFor={name}>
        <div className="d-flex errorHandle">
          <strong className="formTitle">{title}</strong>
          <span className="error">{error}</span>
        </div>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required
          autoComplete={autoComplete}
          className={`sectOneInput ${error ? "error" : ""}`}
          ref={ref}
        />
      </label>
    </>
  );
});
export default InputText;
