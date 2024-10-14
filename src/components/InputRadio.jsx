/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function InputRadio({ id, imgSrc, title, price }) {
  const [input, setInput] = useState(false);
  function handleInputChange(event) {
    setInput((prev) => (prev = event.target.checked));
  }
  return (
    <>
      <div className="arcade">
        <input
          type="radio"
          name="plan"
          id={id}
          value={id}
          checked={input}
          onChange={() => handleInputChange(event)}
        />
        <label htmlFor={id} className="d-flex">
          <img src={imgSrc} alt={id} />
          <div>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </label>
      </div>
    </>
  );
}
