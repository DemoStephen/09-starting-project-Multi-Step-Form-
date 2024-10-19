/* eslint-disable no-useless-escape */
import "./styles/App.css";
import Form from "./components/Form";
import SideBar from "./components/Sidebar";
import ThankYou from "./components/ThankYou";
import { useState, useRef } from "react";

export default function App() {
  const [currentView, setCurrentView] = useState(0);
  const [submit, setSubmit] = useState(false);

  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function formValidation() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const data = {
      name: name.current.value.trim(),
      email: email.current.value.trim(),
      phone: phone.current.value.trim(),
    };

    {
      !data.name ? setNameError("Name is required") : setNameError("");
    }
    {
      !data.phone ? setPhoneError("Phone number required") : setPhoneError("");
    }
    {
      data.email.match(mailformat)
        ? setEmailError("")
        : setEmailError("Valid Email Is required");
    }

    if (data.name && data.phone && data.email.match(mailformat)) {
      setCurrentView((prev) => (prev = prev + 1));
    } else {
      setCurrentView(0);
    }
  }

  function handleNextView() {
    if (currentView === 0) {
      return formValidation();
    }
    setCurrentView((prev) => prev + 1);
  }

  function handlePreviousView() {
    setCurrentView((prev) => prev - 1);
  }

  function handleSubmit() {
    setSubmit(true);
    setCurrentView(undefined);
  }

  return (
    <>
      <main className="d-flex">
        <SideBar currentView={currentView} />
        <section className="section">
          {submit ? (
            <ThankYou />
          ) : (
            <Form
              currentView={currentView}
              onNextView={() => handleNextView()}
              onPreviousView={() => handlePreviousView()}
              onSubmit={handleSubmit}
              name={name}
              email={email}
              phone={phone}
              nameError={nameError}
              emailError={emailError}
              phoneError={phoneError}
            />
          )}
        </section>
      </main>
    </>
  );
}
