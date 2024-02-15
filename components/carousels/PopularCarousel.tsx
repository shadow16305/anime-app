import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IAnimeResult } from "@consumet/extensions";
import Image from "next/image";
import Link from "next/link";
import AnimeTitle from "../ui/AnimeTitle";

interface PopularCarouselProps {
  items: IAnimeResult[];
}

const PopularCarousel: React.FC<PopularCarouselProps> = ({ items }) => {
  return (
    <>
      <h2 className="mt-24 ps-4 text-[32px] font-bold text-white">Popular</h2>
      <Carousel
        className="relative mt-8 px-4 lg:px-0"
        opts={{ align: "start" }}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="group relative basis-1/2 rounded-3xl lg:basis-1/5"
            >
              <Image
                src={item.image}
                alt={item.title.toString()}
                width={220}
                height={270}
                className="w-full rounded-3xl"
              />
              <Link
                href={`/watch/${item.id}`}
                className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-3xl bg-black bg-opacity-0 text-white opacity-0 backdrop-blur transition group-hover:bg-opacity-40 group-hover:opacity-100"
              >
                <AnimeTitle
                  item={item}
                  className="max-w-[180px] text-center text-xl"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-1/2 top-0 z-10 hidden w-full -translate-x-1/2 lg:block lg:w-[1060px] xl:w-[1240px] 2xl:w-[1440px]">
          <div className="absolute left-0 h-[410px] w-10 rounded-none border-none bg-[#121212] bg-opacity-0 bg-gradient-to-r from-[#121212] to-transparent hover:bg-transparent">
            <CarouselPrevious className="absolute left-0" />
          </div>
          <div className="absolute right-0 h-[410px] w-10 rounded-none border-none bg-[#121212] bg-opacity-0 bg-gradient-to-l from-[#121212] to-transparent hover:bg-transparent">
            <CarouselNext className="absolute right-0" />
          </div>
        </div>
        <div className="absolute -bottom-10 left-1/2 flex gap-x-4 lg:hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
};

export default PopularCarousel;
