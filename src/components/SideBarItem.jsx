/* eslint-disable react/prop-types */
export default function SideBarItem({ title, step }) {
  return (
    <>
      <section className="d-flex">
        <div className="navIndex d-flex">{step}</div>
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
