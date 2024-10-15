/* eslint-disable react/prop-types */
export default function Header({ title, paragraph }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </header>
    </>
  );
}
