import Link from "next/link";
import "./SideBar.css";
import Icons from "../../../../constants";

export default function SideBar() {
  return (
    <div>
      <div className="side-bar">
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Main Menu
        </h1>{" "}
        <form className="search-form">
          <input type="text" placeholder="Search..." className="search-input" />
        </form>
        <Link href="/matches" className="flex items-center">
          <Icons.MatchIcon className="w-12 h-8" />
          <span>Matches</span>
        </Link>
        <Link href="/messages" className="flex items-center">
          <Icons.messageIcon className="w-12 h-8" />
          <span>Messages</span>
        </Link>
        <Link href="/help" className="flex items-center">
          <Icons.SupportIcon className="w-12 h-8" />
          <span>Support</span>
        </Link>
        <Link href="/settings" className="flex items-center">
          <Icons.settingIcon className="w-12 h-8" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}
