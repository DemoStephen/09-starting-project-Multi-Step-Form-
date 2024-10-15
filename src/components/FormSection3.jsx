import InputCheckBox from "./InputCheckBox";
export default function FormSection3() {
  return (
    <>
      <section className="sectionThree d-flex">
        <InputCheckBox
          id="onlineService"
          title="Online service"
          about="Access to multiplayer games"
          price={1}
        />
        <InputCheckBox
          id="largerStorage"
          title="Larger storage"
          about="Extra 1TB of cloud save"
          price={2}
        />
        <InputCheckBox
          id="customProfile"
          title="Customizable Profile"
          about="Custom theme on your profile"
          price={2}
        />
      </section>
    </>
  );
}
