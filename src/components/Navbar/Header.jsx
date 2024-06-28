import MobileNav from "./MobileNav";
import NavBar from "./NavBar";
import "./Navbar.css";
import headerLogo from "../../assets/images/logos/headerLogo.png"

const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center bg-white">
        <div className="flex justify-center items-center ">
          <div className="header-brand">
            <a href="https://aecci.org.in/">
              <div>
                <img
                  src={headerLogo}
                  style={{ width: "100%", height: "auto" }}
                  alt="Company logo"
                />{" "}
              </div>
            </a>
          </div>
        </div>
        {/* <div className="desktop-headeraccount">
          <UserAccount />
        </div> */}
      </div>
      <div className="nav-area">
        {/* for large screens */}
        <NavBar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
