/* eslint-disable react/prop-types */
import InputRadio from "../components/InputRadio";
import { Plans } from "../util/data";
export default function FormSection2({ view }) {
  return (
    <>
      <section className={`sectionTwo d-flex ${view === 1 ? "" : "d-none"}`}>
        <section className="d-flex">
          {Plans.map((info) => {
            return (
              <InputRadio
                key={info.plan}
                plan={info.plan}
                image={info.image}
                price={{ monthly: info.monthly, yearly: info.yearly }}
              />
            );
          })}
        </section>
        <div className="planTimeline d-flex">
          <p className={`yearlyOrMonthly`}>Monthly</p>

          <div className="toggleContainer d-flex">
            <input
              type="checkbox"
              name="planOption"
              id="planOption"
              className="d-none"
            />
            <label htmlFor="planOption" className="toggle"></label>
          </div>
          <p className={`yearlyOrMonthly`}>Yearly</p>
        </div>
      </section>
    </>
  );
}
