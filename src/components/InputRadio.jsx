/* eslint-disable react/prop-types */
export default function InputRadio({ id, imgSrc, title, price }) {
  return (
    <>
      <div className="arcade">
        <input type="radio" name="plan" id={id} value={id} defaultChecked />
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
