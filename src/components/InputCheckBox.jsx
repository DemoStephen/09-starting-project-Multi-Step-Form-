/* eslint-disable react/prop-types */
export default function InputCheckBox({ id, title, about, price, duration }) {
  return (
    <label htmlFor={id} className="d-flex">
      <div className="d-flex gap">
        <input type="checkbox" name="addOns" id={id} value={id} />
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
}
