import InputRadio from "./InputRadio";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
export default function FormSection2() {
  return (
    <>
      <section className="sectionTwo d-flex d-none">
        <section className="d-flex">
          <InputRadio id="arcade" imgSrc={arcade} title="Arcade" price="9/mo" />
          <InputRadio
            id="advanced"
            imgSrc={advanced}
            title="Advanced"
            price="12/mo"
          />
          <InputRadio id="pro" imgSrc={pro} title="Pro" price="15/mo" />
        </section>
        <div className="planTimeline d-flex">
          <p className="yearlyOrMonthly">Monthly</p>
          <div className="toggleContainer d-flex">
            <input
              type="checkbox"
              name="planOption"
              id="planOption"
              className="d-none"
            />
            <label htmlFor="planOption" className="toggle"></label>
          </div>
          <p>Yearly</p>
        </div>
      </section>
    </>
  );
}
