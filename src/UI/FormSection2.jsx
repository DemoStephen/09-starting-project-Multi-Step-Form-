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
  return (
    <>
      <section className={`sectionTwo d-flex ${view === 1 ? "" : "d-none"}`}>
        <section className="d-flex">
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

        <div className="planTimeline d-flex">
          <p className={classes ? "" : "yearlyOrMonthly"}>Monthly</p>
          <div className="toggleContainer d-flex">
            <input
              type="checkbox"
              name="duration"
              id="duration"
              className="d-none"
              ref={ref}
              onChange={handleClasses}
            />
            <label htmlFor="duration" className="toggle"></label>
          </div>
          <p className={classes ? "yearlyOrMonthly" : ""}>Yearly</p>
        </div>
      </section>
    </>
  );
}
