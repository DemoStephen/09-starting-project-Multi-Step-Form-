/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

export default function InputText({ title, ...props }) {
  const [error, setError] = useState("");
  const ref = useRef();

  function validateInput() {
    const value = ref.current.value.trim();
    const type = ref.current.type;

    if (value === "") {
      setError(`${title} is required`);
      return;
    }

    if (type === "tel" && value.length < 7) {
      setError("Phone number must be at least 7 digits");
      return;
    }

    if (type === "email") {
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!value.match(mailformat)) {
        setError("Invalid email address");
        return;
      }
    }

    // Clear error if validation passes
    setError("");
  }

  return (
    <>
      <label htmlFor={props.name}>
        <div className="d-flex errorHandle">
          <strong className="formTitle">{title}</strong>
          <span className="error">{error}</span>
        </div>
        <input
          {...props}
          ref={ref}
          onChange={validateInput}
          required
          className={`sectOneInput ${error ? "error" : ""}`}
        />
      </label>
    </>
  );
}
