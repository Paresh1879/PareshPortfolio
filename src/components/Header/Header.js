import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
        <a
  className="btn PrimaryBtn"
  href="Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{ backgroundColor: '#1195C9' }}
>
  Resume
</a>

        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
