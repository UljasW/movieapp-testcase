import NowPlaying from "../ui/sections/home/nowPlaying";
import TopRated from "../ui/sections/home/topRated";
import Trending from "../ui/sections/home/trending";

export default function Home() {
  return (
    <main className="" >
      <Trending/>
      <NowPlaying/>
      <TopRated/>
    </main>
  )
}
