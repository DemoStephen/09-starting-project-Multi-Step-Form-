/* eslint-disable react/prop-types */
import InputRadio from "./InputRadio";
import { forwardRef, useContext } from "react";
import { Plans } from "../util/data";
import { Context } from "../App";
const FormSection2 = forwardRef(function FormSection2(
  { plans, handlePlan, plan, checked, onChange },
  ref
) {
  const { view } = useContext(Context);
  return (
    <>
      <section className={`sectionTwo d-flex ${view === 1 ? "" : "d-none"}`}>
        <section className="d-flex">
          {Plans.map((info) => {
            return (
              <InputRadio
                key={info.plan}
                imgSrc={info.image}
                title={info.plan}
                price={
                  checked === "monthly"
                    ? `${info.monthly}/mo`
                    : `${info.yearly}/yr`
                }
                ref={plans}
                onChange={handlePlan}
                selectedPlan={plan}
              />
            );
          })}
        </section>
        <div className="planTimeline d-flex">
          <p className={`${checked === "monthly" && "yearlyOrMonthly"}`}>
            Monthly
          </p>
          <div className="toggleContainer d-flex">
            <input
              type="checkbox"
              name="planOption"
              id="planOption"
              className="d-none"
              value={checked}
              ref={ref}
              onChange={onChange}
            />
            <label htmlFor="planOption" className="toggle"></label>
          </div>
          <p className={`${checked === "yearly" && "yearlyOrMonthly"}`}>
            Yearly
          </p>
        </div>
      </section>
    </>
  );
});
export default FormSection2;
