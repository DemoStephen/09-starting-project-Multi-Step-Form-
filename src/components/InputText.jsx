/* eslint-disable react/prop-types */

import { useRef, useState } from "react";

export default function InputText({ title, ...props }) {
  const ref = useRef();
  const [err, setErr] = useState(false);

  function handleError() {
    if (ref.current.value === "") {
      setErr(true);
    } else {
      setErr(false);
    }
  }

  return (
    <>
      <label htmlFor={props.name}>
        <div className="flex justify-between mb-2 items-center">
          <strong className="text-blue-950">{title}</strong>
          <span className="text-red-300 text-sm font-medium">
            {err && `${title} is invalid`}
          </span>
        </div>
        <input
          ref={ref}
          {...props}
          onChange={handleError}
          className={`w-full py-3 px-4 border ${
            err
              ? "border-red-200 placeholder:text-red-300  text-red-300"
              : "border-gray-200 text-slate-500"
          } outline-none rounded-md`}
        />
      </label>
    </>
  );
}
