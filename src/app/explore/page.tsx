import SideBar from "../../components/navigation/menuSideBar/SideBar";
import ExploreDeck from "./ExploreDeck";
import "./explore.css";

export default function ExplorePage() {
  return (
    <main className="explore-page">
      <SideBar />
      <ExploreDeck />
    </main>
  );
}
