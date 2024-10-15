/* eslint-disable react/prop-types */
export default function SideBarItem({ title, step, currentView }) {
  return (
    <>
      <section className="d-flex">
        <div
          className={`navIndex d-flex ${
            currentView === step - 1 && "currentForm"
          }`}
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
