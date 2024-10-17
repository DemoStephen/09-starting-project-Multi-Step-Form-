/* eslint-disable react/prop-types */
import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import FormSection3 from "./FormSection3";
import FormSection4 from "./FormSection4";
import Header from "./Header";
import { header } from "../util/data";
import SectionChange from "./SectionChangeBtn";
export default function Form({
  currentView,
  onNextView,
  onPreviousView,
  onSubmit,
  name,
  email,
  phone,
  nameError,
  emailError,
  phoneError,
}) {
  return (
    <>
      <form action="#" method="post" onSubmit={() => onSubmit()}>
        <Header
          title={header[currentView].heading}
          paragraph={header[currentView].text}
        />

        <FormSection1
          currentView={currentView}
          name={name}
          email={email}
          phone={phone}
          nameError={nameError}
          emailError={emailError}
          phoneError={phoneError}
        />
        <FormSection2 currentView={currentView} />
        <FormSection3 currentView={currentView} />
        <FormSection4 currentView={currentView} />

        <SectionChange
          onPreviousView={onPreviousView}
          onNextView={onNextView}
          currentView={currentView}
        />
      </form>
    </>
  );
}
