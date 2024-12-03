import InputText from "../components/InputText";
import { useContext } from "react";
import { Context } from "../App";
export default function FormSection1() {
  const { view } = useContext(Context);

  return (
    <>
      <section className={`sectionOne d-flex ${view === 0 ? "" : "d-none"}`}>
        <InputText
          title="Name"
          type="name"
          name="fullName"
          placeholder="e.g. Stephen Adewale"
          autoComplete="cc-name"
        />
        <InputText
          title="Email Address"
          type="email"
          name="emailAddress"
          placeholder="e.g. adewalestephennifemi@gmail.com"
          autoComplete="email"
        />
        <InputText
          title="Phone Number"
          type="tel"
          name="phoneNumber"
          placeholder="e.g. +234 903 009 4270"
          autoComplete="tel"
        />
      </section>
    </>
  );
}
