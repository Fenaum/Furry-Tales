"use client";

import UserIcon from "../../../public/user-svgrepo-com.svg";
import AppLogo from "../../../public/munchkin.svg";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Link from "next/link";
import useStore from "../../utils/zustandStore";
import "./Navbar.css";

export default function Navbar() {
  const { isMenuOpen, toggleMenu } = useStore();

  const handleMenu = () => {
    toggleMenu();
  };

  return (
    <nav>
      <div className="flex items-center justify-between ml-1 mr-1">
        <BurgerMenu handleMenu={handleMenu} isMenuOpen={isMenuOpen} />
        <Link href="/">
          <AppLogo className="h-16 w-16" alt="app icon" />
        </Link>
        <Link href="/user/signin">
          <UserIcon className="h-12 w-12" alt="user icon" />
        </Link>
      </div>
    </nav>
  );
}
