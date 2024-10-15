/* eslint-disable react/prop-types */
import SideBarItem from "./SideBarItem";

export default function SideBar({ currentView }) {
  return (
    <>
      <nav>
        <SideBarItem title="Your info" step={1} currentView={currentView} />
        <SideBarItem title="Select plan" step={2} currentView={currentView} />
        <SideBarItem title="Add-ons" step={3} currentView={currentView} />
        <SideBarItem title="Summary" step={4} currentView={currentView} />
      </nav>
    </>
  );
}
