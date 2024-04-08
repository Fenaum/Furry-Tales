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
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/user/signin">
            <Icons.userAvatar className="h-10 w-10" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
