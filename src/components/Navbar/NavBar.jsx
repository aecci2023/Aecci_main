import { navigationData } from "../../data/navigation";
import MenuItems from "./MenuItems";

const NavBar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {navigationData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
