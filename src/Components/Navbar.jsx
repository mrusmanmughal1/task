import Logo from "./Logo";
import { GiExitDoor } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../helpers/sticky";
const Navbar = () => {
  const [show, setshow] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60 && window.screen.width > 1000 );
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="nav">
      <div className={isSticky  && "sticky"}>
        <div className="navbar">
          <div className="left-links">
            <Logo />
            <div className="first-links">
              <ul className="first">
                <li>
                  <a href="#"> Home</a>
                </li>
                <li>
                  <a href="#"> JOBS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-links">
            <div className="second-links">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="login-link">
              <p>
                <strong>Login/Register </strong>{" "}
              </p>
              <a href="">
                <GiExitDoor />
              </a>
            </div>
          </div>

          {/* mobile menu */}
          <div className="mobile">
            <div className="flex mobile-menu">
              <div>
                <GiHamburgerMenu onClick={() => setshow(!show)} />
              </div>
              <div>
                <FaUser />
              </div>
            </div>

            <div className={`${show && "show"} mobile-links  `}>
              <ul>
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">JOBS</a>
                </li>
                <li>
                  <a href="">ABOUT US</a>
                </li>
                <li>
                  <a href="">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
