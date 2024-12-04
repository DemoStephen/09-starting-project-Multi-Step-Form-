/* eslint-disable react/prop-types */

// flex-direction: column;
// justify-content: space-between;
// height: 100%;
// padding: 1rem;
// border: 0.125rem solid var(--lightgray);
// border-radius: 0.5rem;

export default function InputRadio({ plan, image, price, name }) {
  return (
    <div className="w-full">
      <input type="radio" name={name} id={plan} className="peer hidden" />
      <label
        htmlFor={plan}
        className="flex md:flex-col md:justify-between items-center gap-4 p-4 border-2 rounded-lg peer-checked:border-blue-400"
      >
        <img src={image} alt={plan} className="w-12" />
        <div className="md:text-center">
          <h3 className="text-blue-900 font-semibold">{plan}</h3>
          <p>${price}</p>
        </div>
      </label>
    </div>
  );
}
