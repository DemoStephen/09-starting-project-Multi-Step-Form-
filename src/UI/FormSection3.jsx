/* eslint-disable react/prop-types */
import { AddOns } from "../util/data";
import InputCheckBox from "../components/InputCheckBox";
export default function FormSection3({ view }) {
  return (
    <>
      <section className={`sectionThree d-flex  ${view === 2 ? "" : "d-none"}`}>
        {AddOns.map((addOn) => {
          return (
            <InputCheckBox
              key={addOn.id}
              id={addOn.id}
              title={addOn.addon}
              about={addOn.about}
              duration="monthly"
            />
          );
        })}
      </section>
    </>
  );
}
