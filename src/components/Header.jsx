import { useContext } from "react";
import { header } from "../util/data";
import { Context } from "../App";
export default function Header() {
  const { view } = useContext(Context);
  return (
    <>
      <header>
        <h1>{header[view].heading}</h1>
        <p>{header[view].text}</p>
      </header>
    </>
  );
}
