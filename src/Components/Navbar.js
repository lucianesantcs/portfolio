import React from "react";
import { NavLink } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import "./Navbar.css";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <aside>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          <li className="nav-text ">
            <NavLink to="/" exact>
              <FiIcons.FiUser />
              <span>Sobre</span>
            </NavLink>
          </li>
          <li className="nav-text ">
            <NavLink to="projects">
              <FiIcons.FiFolder />
              <span>Projetos</span>
            </NavLink>
          </li>
          <li className="nav-text ">
            <NavLink to="contact">
              <FiIcons.FiMail />
              <span>Contato</span>
            </NavLink>
          </li>
          <DarkMode />
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
