import { useContext } from "react";
import { Context } from "../App";
export default function SectionChange() {
  const { view, nextView, prevView } = useContext(Context);

  return (
    <>
      <section className=" nextPrevious">
        <div className="d-flex">
          <button
            type="button"
            className={`goBack ${view > 0 ? "" : "visibility"}`}
            onClick={prevView}
          >
            Go Back
          </button>
          {view === 3 && <button type="submit">Submit</button>}
          {view < 3 && (
            <button type="button" onClick={nextView}>
              Next Step
            </button>
          )}
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Adewale Stephen</a>.
        </div>
      </section>
    </>
  );
}
