import { useContext } from "react";
import { Context } from "../App";
import { header } from "../util/data";
/* eslint-disable react/prop-types */
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
