import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <>
      <nav className="w-full md:w-[30%] p-8 py-16 md:py-8 bg-center bg-nav-mobile md:bg-nav-desktop bg-no-repeat bg-cover flex md:flex-col justify-center md:justify-start items-center md:items-start gap-8 md:gap-4 text-slate-50">
        <SideBarItem title="Your info" step={1} />
        <SideBarItem title="Select plan" step={2} />
        <SideBarItem title="Add-ons" step={3} />
        <SideBarItem title="Summary" step={4} />
      </nav>
    </>
  );
}
