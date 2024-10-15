/* eslint-disable react/prop-types */
export default function InputCheckBox({ id, title, about, price }) {
  return (
    <label htmlFor={id} className="d-flex">
      <div className="d-flex gap">
        <input type="checkbox" name="addOns" id={id} />
        <div>
          <strong className="htmlFormTitle">{title}</strong>
          <p>{about}</p>
        </div>
      </div>
      <p className="price">+${price}/mo</p>
    </label>
  );
}
