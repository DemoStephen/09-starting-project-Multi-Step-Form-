import InputText from "../components/InputText";
import { useContext } from "react";
import { Context } from "../App";
export default function FormSection1() {
  const { view } = useContext(Context);

  // flex-direction: column;
  // gap: 1rem;
  // margin: 2rem 0;

  return (
    <>
      <section className={`flex flex-col gap-4 ${view === 0 ? "" : "hidden"}`}>
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
