import Link from "next/link";
import "./SideBar.css"
import useStore from "../../../lib/zustandStore";

export default function SideBar() {
    const { isMenuOpen, toggleMenu } = useStore();

    const className = isMenuOpen ? "slide-in" : "slide-out";

    return (
        <div className={className}>
            <div className="side-bar">
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/matches"> 
                    Matches
                </Link>
                <Link href="/messages">
                    Messages
                </Link>
                <Link href="/settings">
                    Settings
                </Link>
                <Link href="/help">
                    Support
                </Link>
            </div>
        </div>
    )
}