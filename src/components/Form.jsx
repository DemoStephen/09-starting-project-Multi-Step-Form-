/* eslint-disable react/prop-types */
import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import FormSection3 from "./FormSection3";
import FormSection4 from "./FormSection4";
import Header from "./Header";
import { header } from "../util/data";
export default function Form({ currentView, onChangeView, onSubmit }) {
  return (
    <>
      <form action="#" method="post">
        <Header
          title={header[currentView].heading}
          paragraph={header[currentView].text}
        />
        {currentView === 0 && <FormSection1 />}
        {currentView === 1 && <FormSection2 />}
        {currentView === 2 && <FormSection3 />}
        {currentView === 3 && <FormSection4 />}

        <section className=" nextPrevious">
          <div className="d-flex">
            {currentView > 0 && (
              <button type="button" className="goBack">
                Go Back
              </button>
            )}
            {currentView < 3 && (
              <button type="button" onClick={() => onChangeView()}>
                Next Step
              </button>
            )}
            {currentView > 2 && (
              <button type="submit" onClick={() => onSubmit()}>
                Submit
              </button>
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
