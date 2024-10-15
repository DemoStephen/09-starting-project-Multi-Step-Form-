/* eslint-disable react/prop-types */
import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import FormSection3 from "./FormSection3";
import FormSection4 from "./FormSection4";
import Header from "./Header";
import { header } from "../util/data";
export default function Form({
  currentView,
  onNextView,
  onPreviousView,
  onSubmit,
}) {
  return (
    <>
      <form action="#" method="post" onSubmit={() => onSubmit()}>
        <Header
          title={header[currentView].heading}
          paragraph={header[currentView].text}
        />
        <FormSection1 currentView={currentView} />
        <FormSection2 currentView={currentView} />
        <FormSection3 currentView={currentView} />
        <FormSection4 currentView={currentView} />

        <section className=" nextPrevious">
          <div className="d-flex">
            <button
              type="button"
              className={`goBack ${currentView > 0 ? "" : "visibility"}`}
              onClick={() => onPreviousView()}
            >
              Go Back
            </button>
            {currentView < 3 ? (
              <button type="button" onClick={() => onNextView()}>
                Next Step
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </div>
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Adewale Stephen</a>.
          </div>
        </section>
      </form>
    </>
  );
}
