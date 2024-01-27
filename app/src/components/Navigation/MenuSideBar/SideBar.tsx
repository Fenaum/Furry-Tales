import Link from "next/link";
import "./SideBar.css"

interface SideBarProps {
  isMenuOpen: boolean;
}

export default function SideBar({isMenuOpen}: SideBarProps) {
    const className = isMenuOpen ? "slide-out" : "slide-in";

    return (
        <div className={className}>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
        </div>
    )
}