/* eslint-disable react/prop-types */
export default function SectionChange({
  onPreviousView,
  onNextView,
  currentView,
}) {
  return (
    <>
      <section className=" nextPrevious">
        <div className="d-flex">
          <button
            type="button"
            className={`goBack ${currentView > 0 ? "" : "visibility"}`}
            onClick={() => onPreviousView()}
          >
            Go Back
          </button>
          <button
            type={currentView < 3 ? "button" : "submit"}
            onClick={currentView < 3 ? () => onNextView() : null}
          >
            {currentView < 3 ? "Next Step" : "Submit"}
          </button>
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
