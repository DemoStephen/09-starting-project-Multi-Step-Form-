import "./App.css";
import Form from "./components/Form";
import SideBar from "./components/Sidebar";
import ThankYou from "./components/ThankYou";
export default function App() {
  return (
    <>
      <main className="d-flex">
        <SideBar />
        <section className="section">
          <Form />
          <ThankYou />
        </section>
      </main>
    </>
  );
}
