"use client";

import BurgerMenuIcon from "../../../../public/hamburger-menu-svgrepo-com.svg";
import "./burgerMenu.css";

interface BurgerMenuProps {
  handleMenu: () => void;
  isMenuOpen: boolean;
}

export default function BurgerMenu({handleMenu, isMenuOpen}: BurgerMenuProps) {

  return (
    <button onClick={handleMenu}>
      <BurgerMenuIcon
        className={isMenuOpen ? "burger-menu rotate" : "burger-menu"}
        alt="menu-icon"
      />
    </button>
  );
}
 