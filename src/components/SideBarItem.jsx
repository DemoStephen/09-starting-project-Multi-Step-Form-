import { useContext } from "react";
import { Context } from "../App";
/* eslint-disable react/prop-types */
export default function SideBarItem({ title, step }) {
  const { view } = useContext(Context);
  return (
    <>
      <section className="d-flex">
        <div
          className={`navIndex d-flex ${view === step - 1 && "currentForm"}`}
        >
          {step}
        </div>
        <div>
          <span>Step {step}</span>
          <p>
            <strong>{title}</strong>
          </p>
        </div>
      </section>
    </>
  );
}
