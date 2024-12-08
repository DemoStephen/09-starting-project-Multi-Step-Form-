import InputRadio from "../components/InputRadio";
import { Plans } from "../util/data";
import { useContext, useRef, useState } from "react";
import { Context } from "../App";

export default function FormSection2() {
  const [classes, setClasses] = useState(false);
  const { view } = useContext(Context);
  const ref = useRef();

  function handleClasses() {
    if (ref.current.checked) {
      setClasses(true);
    } else {
      setClasses(false);
    }
  }
  // gap: 2rem;
  // flex-direction: column;
  // margin: 2rem 0;

  return (
    <>
      <section
        className={`mt-8 flex flex-col gap-8 ${view === 1 ? "" : "hidden"}`}
      >
        <section className="flex gap-4 md:gap-6 flex-col md:flex-row">
          {Plans.map((info) => {
            return (
              <InputRadio
                key={info.plan}
                plan={info.plan}
                name={info.name}
                image={info.image}
                price={info.monthly}
              />
            );
          })}
        </section>

        <div className="flex justify-center gap-4">
          <p className={classes ? "" : "font-medium"}>Monthly</p>
          <div className="flex justify-center items-center">
            <input
              type="checkbox"
              name="duration"
              id="duration"
              className="peer hidden"
              ref={ref}
              onChange={handleClasses}
            />
            <label
              htmlFor="duration"
              className="peer-checked:before:translate-x-6 w-12 h-6 bg-blue-500 rounded-3xl cursor-pointer relative before:absolute before:rounded-full before:m-1 before:w-4 before:h-4 before:transition-all before:bg-white"
            ></label>
          </div>
          <p className={classes ? "font-medium" : ""}>Yearly</p>
        </div>
      </section>
    </>
  );
}
