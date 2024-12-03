/* eslint-disable react/prop-types */
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <>
      <nav>
        <SideBarItem title="Your info" step={1} />
        <SideBarItem title="Select plan" step={2} />
        <SideBarItem title="Add-ons" step={3} />
        <SideBarItem title="Summary" step={4} />
      </nav>
    </>
  );
}
