import { useEffect, useState } from "react";

// Styles
import "./style.css";

// Icons
import { CloseIcon, HamburgerIcon } from "../../assets/icons/icons";

// Mobile Nav component
import MobileNav from "../MobileNav";

// Logo
import { NavLogo } from "../../assets/logo";

// Header links
import headerLinks from "../../assets/links/headerLinks";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  // Change scrolling behavior when navIsOpen changes
  useEffect(() => {
    if (navIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navIsOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo un">
            <a href="/">
              <NavLogo />
            </a>
          </div>
          <nav className="header__nav">
            {headerLinks.map((link, index) => {
              return (
                <a className="link link--primary" key={index} href={link!.href}>
                  {link!.name}
                </a>
              );
            })}
          </nav>
          <div className="header__btns">
            <a
              className="link link--primary"
              href="https://apps.ideal-logic.com/osusli"
            >
              <button className="btn btn--primary" type="button">
                Join ACM
              </button>
            </a>
          </div>
          <button
            aria-label="navigation toggle"
            className="header__mobile-btn btn btn--hamburger"
            type="button"
            onClick={() => setNavIsOpen(!navIsOpen)}
          >
            {navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          {navIsOpen && <MobileNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
