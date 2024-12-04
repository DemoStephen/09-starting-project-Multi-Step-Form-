/* eslint-disable react/prop-types */
export default function ConnectButton({ href, icon }) {
  return (
    <a href={href} target="_blank">
      <button className=" flex items-center justify-center rounded-full w-10 h-10 bg-blue-100">
        {icon}
      </button>
    </a>
  );
}
