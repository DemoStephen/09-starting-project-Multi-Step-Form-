/* eslint-disable react/prop-types */

export default function InputRadio({ plan, image, price, name }) {
  return (
    <div className="arcade">
      <input type="radio" name={name} id={plan} />
      <label htmlFor={plan} className="d-flex">
        <img src={image} alt={plan} />
        <div>
          <h3>{plan}</h3>
          <p>${price}</p>
        </div>
      </label>
    </div>
  );
}
