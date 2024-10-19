/* eslint-disable react/prop-types */
import { Plans } from "../util/data";
export default function FormSection4({ currentView, plan, duration }) {
  let data = {
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
      <section className={`sectionFour ${currentView === 3 ? "" : "d-none"}`}>
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
          <div className="addons"></div>
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
