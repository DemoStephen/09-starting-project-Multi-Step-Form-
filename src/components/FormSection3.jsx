export default function FormSection3() {
  return (
    <>
      <section className="sectionThree d-flex d-none">
        <label htmlFor="onlineService" className="d-flex">
          <div className="d-flex gap">
            <input type="checkbox" name="addOns" id="onlineService" />
            <div>
              <strong className="htmlFormTitle">Online service</strong>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <p className="price">+$1/mo</p>
        </label>
        <label htmlFor="largerStorage" className="d-flex">
          <div className="d-flex gap">
            <input type="checkbox" name="addOns" id="largerStorage" />
            <div>
              <strong className="htmlFormTitle">Larger storage</strong>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <p className="price">+$2/mo</p>
        </label>
        <label htmlFor="customProfile" className="d-flex">
          <div className="d-flex gap">
            <input type="checkbox" name="addOns" id="customProfile" />
            <div>
              <strong className="htmlFormTitle">Customizable Profile</strong>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <p className="price">+$2/mo</p>
        </label>
      </section>
    </>
  );
}
