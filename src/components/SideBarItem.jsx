import { useContext } from "react";
import { Context } from "../App";
/* eslint-disable react/prop-types */
export default function SideBarItem({ title, step }) {
  const { view } = useContext(Context);

  // gap: 1rem;
  // align-items: center;
  // text-transform: uppercase;
  // padding: 0.25rem 0.15rem;

  // background-color: var(--lightblue);
  // border: 2px solid var(--lightblue);
  // color: var(--marineblue);


  return (
    <>
      <section className="flex items-center uppercase md:gap-4">
        <div
          className={`flex w-12 h-12 items-center justify-center rounded-full border-2 font-semibold ${view === step - 1 && "bg-slate-200 border-white text-blue-500"}`}
        >
          {step}
        </div>
        <div className="hidden md:block">
          <span>Step {step}</span>
          <p>
            <strong>{title}</strong>
          </p>
        </div>
      </section>
    </>
  );
}
