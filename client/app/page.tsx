import Navbar from "./components/Navbar/Navbar";
import Logo from "../public/logo/full_icon_hori.svg";
import Searchbar from "./components/Searchbar/Searchbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white">
      <Logo className="mt-4 mb-8" />
      <Searchbar mode="default" />
      <Navbar />
    </div>
  );
}
