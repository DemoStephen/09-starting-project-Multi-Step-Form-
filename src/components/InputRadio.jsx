/* eslint-disable react/prop-types */

export default function InputRadio({ plan, image, price }) {
  return (
    <>
      <div className="arcade">
        <input
          type="radio"
          name="plan"
          id={plan}
          value={price.monthly}
          required
        />
        <label htmlFor={plan} className="d-flex">
          <img src={image} alt={plan} />
          <div>
            <h3>{plan}</h3>
            <p>${price.monthly}</p>
          </div>
        </label>
      </div>
    </>
  );
}
