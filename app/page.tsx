import HeroCarousel from "@/components/carousels/HeroCarousel";
import PopularCarousel from "@/components/carousels/PopularCarousel";
import RecentCarousel from "@/components/carousels/RecentsCarousel";
import { META } from "@consumet/extensions";

export default async function Home() {
  const anilist = new META.Anilist();
  const trending = await anilist.fetchTrendingAnime();
  const popular = await anilist.fetchPopularAnime();
  const recent = await anilist.fetchRecentEpisodes();

  return (
    <>
      <HeroCarousel items={trending.results} />
      <div className="mx-auto lg:w-[1060px] xl:w-[1240px] 2xl:w-[1440px]">
        <PopularCarousel items={popular.results} />
        <RecentCarousel items={recent.results} />
      </div>
      <p className="mt-24 pb-12 text-center text-sm text-white">
        We do not store any files on our server, we only linked to the media
        which is hosted on 3rd party services
      </p>
    </>
  );
}
