/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function InputText({ title, ...props }) {
  const ref = useRef();
  // const [error, SetError] = useState(false);

  // function handleErrorMessage() {
  //   const value = ref.current.value.trim();
  //   const type = ref.current.type;
  // }

  return (
    <>
      <label htmlFor={props.name}>
        <div className="flex justify-between mb-2 items-center">
          <strong className="text-blue-950">{title}</strong>
          <span className="text-red-400 text-sm font-medium"></span>
        </div>
        <input
          ref={ref}
          {...props}
          className="w-full py-3 px-4 border border-gray-200 outline-none rounded-md text-slate-500"
        />
      </label>
    </>
  );
}
