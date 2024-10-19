/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const InputRadio = forwardRef(function InputRadio(
  { imgSrc, title, price, onChange, selectedPlan },
  ref
) {
  return (
    <>
      <div className="arcade">
        <input
          type="radio"
          name="plan"
          id={title}
          value={title}
          ref={ref}
          onChange={() => onChange(title)}
          required
          checked={selectedPlan === title && true}
        />
        <label htmlFor={title} className="d-flex">
          <img src={imgSrc} alt={title} />
          <div>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </label>
      </div>
    </>
  );
});
export default InputRadio;
