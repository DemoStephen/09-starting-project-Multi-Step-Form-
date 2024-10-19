/* eslint-disable react/prop-types */
import { AddOns } from "../util/data";
import InputCheckBox from "./InputCheckBox";
export default function FormSection3({
  currentView,
  onChange,
  AddOn,
  duration,
}) {
  return (
    <>
      <section
        className={`sectionThree d-flex ${currentView === 2 ? "" : "d-none"}`}
      >
        {AddOns.map((addOn) => {
          return (
            <InputCheckBox
              key={addOn.id}
              id={addOn.id}
              title={addOn.addon}
              about={addOn.about}
              price={duration === "monthly" ? addOn.monthly : addOn.yearly}
              onChange={onChange}
              ref={AddOn}
              duration={duration}
            />
          );
        })}
      </section>
    </>
  );
}
