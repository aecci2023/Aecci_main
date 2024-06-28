import { useEffect, useRef, useState } from "react";
import { navigationData } from "../../data/navigation";
import MobileMenuItems from "./MobileMenuItems";
import { GiHamburgerMenu } from "react-icons/gi";
// import UserAccount from "../basic/UserAccount";

const MobileNav = () => {
  const depthLevel = 0;
  const [showMenu, setShowMenu] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showMenu]);

  return (
    <nav className="mobile-nav d-flex">
      <button
        className="mobile-nav__menu-button"
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <GiHamburgerMenu />
      </button>

      {showMenu && (
        <ul className="menus" ref={ref}>
          {navigationData.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </ul>
      )}
      <div className="mobile-headeraccount">
        {/* <UserAccount /> */}
      </div>
    </nav>
  );
};

export default MobileNav;
