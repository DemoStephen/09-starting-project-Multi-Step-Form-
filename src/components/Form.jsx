/* eslint-disable react/prop-types */
import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import FormSection3 from "./FormSection3";
import FormSection4 from "./FormSection4";
import Header from "./Header";
import { header } from "../util/data";
import SectionChange from "./SectionChangeBtn";
import { useRef, useState } from "react";
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
  const plans = useRef();
  const duration = useRef();
  const addOns = useRef();

  const [plan, setplan] = useState("Advanced");
  const [durations, setDurations] = useState("monthly");
  // const [addOn, setAddOn] = useState([
  //   {
  //     name: "",
  //     price: "",
  //   },
  // ]);

  function handlePlan(newPlan) {
    setplan(newPlan);
  }
  function handleDuration() {
    if (duration.current.checked) {
      setDurations("yearly");
    } else {
      setDurations("monthly");
    }
  }
  // function handleAddOns(data) {
  //   setAddOn((prev) => [
  //     ...prev,
  //     {
  //       name: data.name,
  //       price: data.price,
  //     },
  //   ]);
  // }
  return (
    <>
      <form action="#" method="post" onSubmit={onSubmit}>
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
        <FormSection2
          currentView={currentView}
          plans={plans}
          handlePlan={handlePlan}
          plan={plan}
          ref={duration}
          onChange={handleDuration}
          checked={durations}
        />
        <FormSection3
          currentView={currentView}
          addOns={addOns}
          // onChange={handleAddOns}
        />
        <FormSection4
          currentView={currentView}
          plan={plan}
          duration={durations}
        />

        <SectionChange
          onPreviousView={onPreviousView}
          onNextView={onNextView}
          currentView={currentView}
        />
      </form>
    </>
  );
}
