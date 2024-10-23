/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Plans } from "../util/data";
import { Context } from "../App";
export default function FormSection4() {
  const { view, plan, duration, addOns } = useContext(Context);
  const data = {
    plan: "",
    price: "",
    acronym: "",
  };
  Plans.map((info) => {
    if (plan === info.plan) {
      data.plan = info.plan;
      if (duration === "monthly") {
        data.price = info.monthly;
        data.acronym = "mo";
      }
      if (duration === "yearly") {
        data.price = info.yearly;
        data.acronym = "yr";
      }
    }
  });
  return (
    <>
      <section className={`sectionFour ${view === 3 ? "" : "d-none"}`}>
        <section>
          <div className="d-flex arcade">
            <p>
              <strong>
                <b>{plan}</b> <b>({duration})</b>
              </strong>
              <br />
              <span>Change</span>
            </p>
            <p>
              <strong>
                <b>${data.price}</b>/<b>{data.acronym}</b>
              </strong>
            </p>
          </div>
          <hr />
          <div className="addons">
            {addOns.map((addOn) => {
              return (
                <p className="d-flex" key={addOn.id}>
                  <span>{addOn.name}</span>
                  <span>
                    {addOn.price}$/{addOn.abbr}
                  </span>
                </p>
              );
            })}
          </div>
        </section>
        <div className="totalOrder d-flex">
          <p>
            Total (<span>{duration}</span>)
          </p>
          <p>
            <strong>+$120/yr</strong>
          </p>
        </div>
      </section>
    </>
  );
}
