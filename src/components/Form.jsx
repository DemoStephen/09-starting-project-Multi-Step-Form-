import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";
import FormSection3 from "./FormSection3";
import FormSection4 from "./FormSection4";
import Header from "./Header";

export default function Form() {
  return (
    <>
      <form action="#" method="post">
        <Header />
        <FormSection1 />
        <FormSection2 />
        <FormSection3 />
        <FormSection4 />

        <section className=" nextPrevious">
          <div className="d-flex">
            <button type="button">Go Back</button>
            <button type="button">Next Step</button>
            <button type="submit" className="d-none">
              Submit
            </button>
          </div>
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Adewale Stephen</a>.
          </div>
        </section>
      </form>
    </>
  );
}
