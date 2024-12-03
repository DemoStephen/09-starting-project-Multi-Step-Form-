import { useContext } from "react";
import { Context } from "../App";

export default function SectionChange() {
  const { view, handleView } = useContext(Context);

  return (
    <>
      <section className=" nextPrevious">
        <div className="d-flex">
          {view > 0 && (
            <button
              type="button"
              className={`goBack `}
              onClick={() => handleView((prev) => prev - 1)}
            >
              Go Back
            </button>
          )}

          {view >= 2 && (
            <button type="submit">{view > 2 ? "Submit" : "Next Step"}</button>
          )}
          {view < 2 && (
            <button
              type="button"
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
