import MobileNav from "./MobileNav";
import NavBar from "./NavBar";
import "./Navbar.css";

const HeaderMenu = () => {
  return (
    <header>
      <div className="nav-area">
        {/* for large screens */}
        <NavBar />
        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default HeaderMenu;
