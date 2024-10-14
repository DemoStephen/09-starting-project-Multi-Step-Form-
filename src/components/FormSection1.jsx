import InputText from "./InputText";

export default function FormSection1() {
  return (
    <>
      <section className="sectionOne d-flex">
        <InputText
          title="Name"
          type="name"
          name="nameInput"
          placeholder="e.g. Stephen Adewale"
          autoComplete="cc-name"
        />
        <InputText
          title="Email Address"
          type="email"
          name="emailInput"
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
