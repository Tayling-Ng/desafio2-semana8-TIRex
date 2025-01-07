import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
  return (
    <nav className="flex flex-col py-4 w-64">
      <SideBarItem path="/" text="Home" />
      <SideBarItem path="/useState" text="useState" />
      <SideBarItem path="/useMemo" text="useMemo" />
      <SideBarItem path="/useCallback" text="useCallback" />
      <SideBarItem path="/useEffect" text="useEffect" />
      <SideBarItem path="/useContext" text="useContext" />
      <SideBarItem path="/customHooks" text="customHooks" />
    </nav>
  );
};
