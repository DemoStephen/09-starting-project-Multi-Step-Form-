import "./styles/App.css";
import Form from "./UI/Form";
import SideBar from "./components/Sidebar";
import { useState } from "react";
// import Footer from "./UI/Footer";
import { createContext } from "react";
export const Context = createContext({
  view: null,
  handleView: () => {},
});
export default function App() {
  const [view, setView] = useState(0);

  function handleView(newView) {
    setView(newView);
  }
  const contextValue = {
    view: view,
    handleView: handleView,
  };
  return (
    <Context.Provider value={contextValue}>
      <main className="d-flex">
        <SideBar />
        <section className="section">
          <Form />
        </section>
      </main>
      {/* <Footer /> */}
    </Context.Provider>
  );
}
