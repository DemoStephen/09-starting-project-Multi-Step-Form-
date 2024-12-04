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
      <main className="md:bg-white flex gap-4 md:gap-8 w-full md:w-[55rem] lg:p-4 rounded-lg flex-col md:flex-row min-h-screen md:min-h-[35rem]">
        <SideBar />
        <section className="px-4 py-8 md:px-0 md:py-[5%] w-[90%] mx-auto md:w-full bg-white md:bg-transparent rounded-lg md:relative">
          <Form />
        </section>
      </main>
      {/* <Footer /> */}
    </Context.Provider>
  );
}
