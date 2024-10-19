import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const InputCheckBox = forwardRef(function InputCheckBox(
  { id, title, about, price, onChange, duration },
  ref
) {
  const data = {
    name: { title },
    price: { price },
    abbr: "mo",
    id: { id },
  };
  return (
    <label htmlFor={id} className="d-flex">
      <div className="d-flex gap">
        <input
          type="checkbox"
          name="addOns"
          id={id}
          ref={ref}
          onChange={() => onChange(data)}
        />
        <div>
          <strong className="formTitle">{title}</strong>
          <p>{about}</p>
        </div>
      </div>
      <p className="price">
        +${price}/{duration === "monthly" ? "mo" : "yr"}
      </p>
    </label>
  );
});
export default InputCheckBox;
