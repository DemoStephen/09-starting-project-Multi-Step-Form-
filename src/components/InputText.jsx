/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function InputText({
  title,
  type,
  name,
  placeholder,
  autoComplete,
}) {
  const [value, setValue] = useState("");
  function handleValue(event) {
    setValue((prev) => event.target.value);
  }

  return (
    <>
      <label htmlFor={name}>
        <div className="d-flex errorHandle">
          <strong className="htmlFormTitle">{title}</strong>
          <span className="error"></span>
        </div>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required
          autoComplete={autoComplete}
          className="sectOneInput"
          value={value}
          onChange={() => handleValue(event)}
        />
      </label>
    </>
  );
}
