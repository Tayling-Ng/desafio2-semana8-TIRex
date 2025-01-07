import { NavLink } from "react-router";

interface NavItemPrps {
  path: string;
  text: string;
}

export const SideBarItem = ({ path, text }: NavItemPrps) => {

  return (
    <NavLink
      to={path}
      className="px-4 w-full rounded-r-2xl py-2 text-zinc-700 hover:bg-zinc-100 transition-all duration-200"
    >
      {text}
    </NavLink>
  );
};
