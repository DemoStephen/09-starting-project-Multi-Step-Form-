/* eslint-disable react/prop-types */
import { AddOns } from "../util/data";
import InputCheckBox from "../components/InputCheckBox";
import { useContext } from "react";
import { Context } from "../App";
export default function FormSection3() {
  const { view } = useContext(Context);
  return (
    <>
      <section className={`flex flex-col gap-5 ${view === 2 ? "" : "hidden"}`}>
        {AddOns.map((addOn) => {
          return (
            <div key={addOn.about}>
              <InputCheckBox
                id={addOn.id}
                title={addOn.addon}
                about={addOn.about}
                price={addOn.price}
                duration={"monthly"}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
