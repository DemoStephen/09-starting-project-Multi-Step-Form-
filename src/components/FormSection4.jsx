export default function FormSection4() {
  return (
    <>
      <section className="sectionFour d-none">
        <section>
          <div className="d-flex arcade">
            <p>
              <strong>
                <b>Arcade</b> <b>(monthly)</b>
              </strong>
              <br />
              <span>Change</span>
            </p>
            <p>
              <strong>
                <b>$90</b>/<b>mo</b>
              </strong>
            </p>
          </div>
          <hr />
          <div className="addons"></div>
        </section>
        <div className="totalOrder d-flex">
          <p>
            Total (per <span>year</span>)
          </p>
          <p>
            <strong>+$120/yr</strong>
          </p>
        </div>
      </section>
    </>
  );
}
