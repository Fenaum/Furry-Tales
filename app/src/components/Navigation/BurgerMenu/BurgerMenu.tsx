"use client";

import BurgerMenuIcon from "../../../../public/hamburger-menu-svgrepo-com.svg";
import { useStore } from "../../../lib/zustandStore";
import "./BurgerMenu.css";

export default function BurgerMenu() {
  const { isOpen, toggle } = useStore();

  return (
    <button onClick={toggle}>
      <BurgerMenuIcon
        className={isOpen ? "burger-menu" : "burger-menu rotate"}
        alt="menu-icon"
      />
    </button>
  );
}
