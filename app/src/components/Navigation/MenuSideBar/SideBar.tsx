
import Link from "next/link";
import "./SideBar.css"

export default function SideBar() {


    return (
        <div >
            <div className="side-bar">
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