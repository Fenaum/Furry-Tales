"use client";

import BurgerMenuIcon from "../../../../public/hamburger-menu-svgrepo-com.svg";
import "./BurgerMenu.css";

interface BurgerMenuProps {
  handleMenu: () => void;
  isMenuOpen: boolean;
}

export default function BurgerMenu({handleMenu, isMenuOpen}: BurgerMenuProps) {

  return (
    <button onClick={handleMenu}>
      <BurgerMenuIcon
        className={isMenuOpen ? "burger-menu" : "burger-menu rotate"}
        alt="menu-icon"
      />
    </button>
  );
}
