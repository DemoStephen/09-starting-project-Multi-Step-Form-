/* eslint-disable react/prop-types */
export default function InputCheckBox({ id, title, about, price, duration }) {
  return (
    <>
      <input
        type="checkbox"
        name="addOns"
        id={id}
        value={id}
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className="flex justify-between border-2 rounded-md p-4 items-center peer-checked:border-blue-500 cursor-pointer"
      >
        <div className="d-flex gap">
          <div>
            <strong className="formTitle">{title}</strong>
            <p>{about}</p>
          </div>
        </div>
        <p className="price">
          +${price}/{duration === "monthly" ? "mo" : "yr"}
        </p>
      </label>
    </>
  );
}
