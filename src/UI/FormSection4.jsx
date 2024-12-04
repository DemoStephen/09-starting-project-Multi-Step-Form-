import { useContext } from "react";
import { Context } from "../App";
export default function FormSection4() {
  const { view, handleView } = useContext(Context);
  const data = {
    plan: "",
    price: "",
    acronym: "",
  };

  // color: var(--purplishblue);
  // text-decoration: underline;
  // cursor: pointer;

  return (
    <>
      <section className={`${view === 3 ? "" : "hidden"}`}>
        <section>
          <div className="flex justify-between items-center">
            <p>
              <strong>
                <b>plan</b> <b>(duration)</b>
              </strong>
              <br />
              <span
                className="underline text-blue-600 cursor-pointer"
                onClick={() => handleView(1)}
              >
                Change
              </span>
            </p>
            <p>
              <strong>
                <b>${data.price}</b>/<b>{data.acronym}</b>
              </strong>
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col gap-2 mb-4">
            <p className="flex items-center justify-between">
              <span>Addone 1</span>
              <span>7$/monthly</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Addone 1</span>
              <span>7$/monthly</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Addone 1</span>
              <span>7$/monthly</span>
            </p>
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
