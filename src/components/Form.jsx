import { Context } from "../App";
import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import FormSection3 from "./FormSection3";
import FormSection4 from "./FormSection4";
import Header from "./Header";
import SectionChange from "./SectionChangeBtn";
import { useContext } from "react";

export default function Form() {
  const { submit } = useContext(Context);

  return (
    <>
      <form action="#" method="post" onSubmit={submit}>
        <Header />
        <FormSection1 />
        <FormSection2 />
        <FormSection3 />
        <FormSection4 />
        <SectionChange />
      </form>
    </>
  );
}
