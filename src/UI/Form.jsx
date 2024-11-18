import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import FormSection3 from "./FormSection3";
import FormSection4 from "./FormSection4";
import Header from "../components/Header";
import SectionChange from "../components/SectionChangeBtn";
import { useState } from "react";

export default function Form() {
  const [view, setView] = useState(1);
  return (
    <>
      <form action="#" method="post">
        <Header view={view} />
        <section>
          <FormSection1 view={view} />
          <FormSection2 view={view} />
          <FormSection3 view={view} />
          <FormSection4 view={view} />
        </section>
        <SectionChange view={view} setView={setView} />
      </form>
    </>
  );
}
