"use client"

import UserIcon from "../../../public/user-svgrepo-com.svg";
import AppLogo from "../../../public/munchkin.svg"
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import SideBar from "./MenuSideBar/SideBar";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  handleMenu: () => void;
  isMenuOpen: boolean;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <SideBar isMenuOpen={isMenuOpen} />
      <div className="flex items-center justify-between ml-1 mr-1">
        <BurgerMenu handleMenu={handleMenu} isMenuOpen={isMenuOpen} />
        <Link href="/">
          <AppLogo className="h-16 w-16" alt="app icon" />
        </Link>
        <Link href="/user/signup">
          <UserIcon className="h-12 w-12" alt="user icon" />
        </Link>
      </div>
    </nav>
  );
}
