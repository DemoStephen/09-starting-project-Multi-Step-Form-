/* eslint-disable react/prop-types */
import { AddOns } from "../util/data";
import InputCheckBox from "../components/InputCheckBox";
import { useContext } from "react";
import { Context } from "../App";
export default function FormSection3() {
  const { view } = useContext(Context);
  return (
    <>
      <section className={`sectionThree d-flex  ${view === 2 ? "" : "hidden"}`}>
        {AddOns.map((addOn) => {
          return (
            <InputCheckBox
              key={addOn.id}
              id={addOn.id}
              title={addOn.addon}
              about={addOn.about}
              price={addOn.monthly}
              duration={"monthly"}
            />
          );
        })}
      </section>
    </>
  );
}
