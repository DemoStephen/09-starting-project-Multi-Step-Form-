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
        <div className="d-flex errorHandle">
          <strong className="formTitle">{title}</strong>
          <span className="error"></span>
        </div>
        <input ref={ref} {...props} className={`sectOneInput`} />
      </label>
    </>
  );
}
