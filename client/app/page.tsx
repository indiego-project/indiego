import Navbar from "./components/Navbar/Navbar";
import Logo from "../public/logo/full_icon_hori.svg";
import Searchbar from "./components/Searchbar/Searchbar";
import Swiper, { type IPopularShowData } from "./components/Swiper/Swiper";
import { fetchPopularShows } from "./libs/api/fetchPopularShows";

// server components
export default async function Home() {
  const data = (await fetchPopularShows()) as IPopularShowData[];

  return (
    <div className="flex flex-col items-center w-full h-full bg-white">
      <Logo className="mt-4 mb-8" />
      <Searchbar mode="default" />
      <div draggable={false} className="w-full h-max flex flex-col my-10">
        <Swiper data={data} />
      </div>
      <Navbar />
    </div>
  );
}
