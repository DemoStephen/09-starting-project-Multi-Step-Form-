/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export default function InputText({
  title,
  type,
  name,
  placeholder,
  autoComplete,
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  function handleValue(event) {
    setValue((prev) => event.target.value);
    formValidation();
  }
  function formValidation() {
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (value === "") {
      setError((prev) => "This field is required");
    } else {
      setError((prev) => "");
    }
  }
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
          className={`sectOneInput `}
          value={value}
          onChange={() => handleValue(event)}
        />
      </label>
    </>
  );
}
