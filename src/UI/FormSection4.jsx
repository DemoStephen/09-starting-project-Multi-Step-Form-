import { useContext } from "react";
import { Context } from "../App";
export default function FormSection4() {
  const { view } = useContext(Context);
  const data = {
    plan: "",
    price: "",
    acronym: "",
  };
  return (
    <>
      <section className={`sectionFour  ${view === 3 ? "" : "d-none"}`}>
        <section>
          <div className="d-flex arcade">
            <p>
              <strong>
                <b>plan</b> <b>(duration)</b>
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
            {/* {addOns.map((addOn) => {
              return (
                <p className="d-flex" key={addOn.id}>
                  <span>{addOn.name}</span>
                  <span>
                    {addOn.price}$/{addOn.abbr}
                  </span>
                </p>
              );
            })} */}
          </div>
        </section>
        <div className="totalOrder d-flex">
          <p>
            Total (<span>duration</span>)
          </p>
          <p>
            <strong>+$120/yr</strong>
          </p>
        </div>
      </section>
    </>
  );
}
