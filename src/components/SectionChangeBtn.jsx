import { useContext } from "react";
import { Context } from "../App";

export default function SectionChange() {
  const { view, handleView } = useContext(Context);

  const btnClass =
    "p-3 font-semibold text-slate-200 w-1/3 md:w-1/4 text-center rounded-lg md:rounded-xl";
  return (
    <>
      <section className="absolute bottom-0 left-0 w-full bg-white p-4">
        <div className="flex justify-between">
          {view > 0 && (
            <button
              type="button"
              className={`p-3 text-start font-semibold bg-transparent text-slate-500`}
              onClick={() => handleView((prev) => prev - 1)}
            >
              Go Back
            </button>
          )}

          {view >= 2 && (
            <button className={`${btnClass} bg-blue-600`} type="submit">
              {view > 2 ? "Submit" : "Next Step"}
            </button>
          )}
          {view < 2 && (
            <button
              type="button"
              className={`${btnClass} bg-blue-600`}
              onClick={() => handleView((prev) => prev + 1)}
            >
              Next Step
            </button>
          )}
        </div>
      </section>
    </>
  );
}
