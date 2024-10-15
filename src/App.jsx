import "./App.css";
import Form from "./components/Form";
import SideBar from "./components/Sidebar";
import ThankYou from "./components/ThankYou";
import { useState } from "react";
export default function App() {
  const [currentView, setCurrentView] = useState(0);
  const [submit, setSubmit] = useState(false);
  function handleNextView() {
    setCurrentView((prev) => (prev = prev + 1));
  }
  function handleSubmit() {
    setSubmit(true);
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
              onChangeView={() => handleNextView()}
              onSubmit={handleSubmit}
            />
          )}
        </section>
      </main>
    </>
  );
}
