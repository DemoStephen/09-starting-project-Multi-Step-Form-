/* eslint-disable react/prop-types */
import InputText from "./InputText";
export default function FormSection1({
  currentView,
  name,
  email,
  phone,
  nameError,
  emailError,
  phoneError,
}) {
  return (
    <>
      <section
        className={`sectionOne d-flex ${currentView === 0 ? "" : "d-none"}`}
      >
        <InputText
          title="Name"
          type="name"
          name="FullName"
          placeholder="e.g. Stephen Adewale"
          autoComplete="cc-name"
          ref={name}
          error={nameError}
        />
        <InputText
          title="Email Address"
          type="email"
          name="EmailAddress"
          placeholder="e.g. adewalestephennifemi@gmail.com"
          autoComplete="email"
          ref={email}
          error={emailError}
        />
        <InputText
          title="Phone Number"
          type="tel"
          name="PhoneNumber"
          placeholder="e.g. +234 903 009 4270"
          autoComplete="tel"
          ref={phone}
          error={phoneError}
        />
      </section>
    </>
  );
}
