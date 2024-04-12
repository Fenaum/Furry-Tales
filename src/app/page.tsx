import Home from "../components/Home/Home";
import SideBar from "../components/navigation/menuSideBar/SideBar";

export default async function Page() {
  return (
    <main className="flex">
      <SideBar />
      <Home />
    </main>
  );
}
