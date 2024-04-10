import SideBar from "./MenuSideBar/SideBar";
import Icons from "../../../constants";
import Link from "next/link";
import Image from "next/image";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image src={Icons.logo} alt="Logo" className="h-24 w-24 rounded-full" />
      </Link>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT US</Link>
        </li>
        <li>
          <Link href="/blog">BLOG</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={"/notifications"}>
            <Icons.BellIcon className="h-8 w-8" />
          </Link>
        </li>
        <li>
          <Link href="/user/signin">
            <Icons.userAvatar className="h-8 w-8" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
