import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import FormSection3 from "./FormSection3";
import FormSection4 from "./FormSection4";
import Header from "../components/Header";
import ThankYou from "./ThankYou";
import { useContext, useState } from "react";
import SectionChange from "../components/SectionChangeBtn";
import { Context } from "../App";

export default function Form() {
  const { view, handleView } = useContext(Context);
  const [success, setSuccess] = useState(false);
  const [formInfo, setFormInfo] = useState();

  // {
  //   fullName: "",
  //   emailAddress: "",
  //   phoneNumber: "",
  //   plan: "",
  //   addOns: [],
  //   duration: null,
  // }

  function handleSubmit(event) {
    event.preventDefault();
    if (view === 3) setSuccess(true);
    else if (view === 2) {
      const fd = new FormData(event.target);
      const addOns = fd.getAll("addOns");
      const duration = fd.get("duration");
      const plan = fd.get("plan");
      const data = Object.fromEntries(fd.entries());
      data.addOns = addOns;
      data.duration = duration;
      data.duration = plan;
      setFormInfo(data);
      handleView(3);
    }
  }
  console.log(formInfo);
  return (
    <>
      {success ? (
        <ThankYou />
      ) : (
        <form action="#" method="post" onSubmit={handleSubmit}>
          <Header />
          <section>
            <FormSection1 />
            <FormSection2 />
            <FormSection3 />
            <FormSection4 data={formInfo} />
          </section>
          <SectionChange outputData={handleSubmit} />
        </form>
      )}
    </>
  );
}
