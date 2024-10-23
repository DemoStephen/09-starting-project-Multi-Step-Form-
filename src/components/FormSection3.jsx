/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AddOns } from "../util/data";
import InputCheckBox from "./InputCheckBox";
import { Context } from "../App";
export default function FormSection3() {
  const { view, onChange, AddOn, duration } = useContext(Context);
  return (
    <>
      <section className={`sectionThree d-flex ${view === 2 ? "" : "d-none"}`}>
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
