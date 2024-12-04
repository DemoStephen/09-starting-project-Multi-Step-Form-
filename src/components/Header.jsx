import { useContext } from "react";
import { header } from "../util/data";
import { Context } from "../App";
export default function Header() {
  const { view } = useContext(Context);
  return (
    <>
      <header className="mb-4 text-slate-500">
        <h1 className="text-3xl font-semibold text-blue-950">{header[view].heading}</h1>
        <p>{header[view].text}</p>
      </header>
    </>
  );
}
