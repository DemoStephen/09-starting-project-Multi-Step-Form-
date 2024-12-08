/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Context } from "../App";
/* eslint-disable react/prop-types */
export default function SideBarItem({ title, step }) {
  const { view, handleView } = useContext(Context);

  return (
    <>
      <section className="flex items-center uppercase md:gap-4">
        <div
          onClick={() => handleView((prev) => step - 1)}
          className={`flex w-12 h-12 items-center justify-center rounded-full border-2 cursor-pointer font-semibold ${
            view === step - 1 && "bg-slate-200 border-white text-blue-500"
          }`}
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
