"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { IAnimeResult } from "@consumet/extensions";
import Image from "next/image";
import Link from "next/link";
import { CiPlay1 } from "react-icons/ci";
import { useRef } from "react";
import AnimeTitle from "../ui/AnimeTitle";

interface HeroCarouselProps {
  items: IAnimeResult[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ items }) => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <Carousel
      className="relative flex h-screen items-center justify-center overflow-x-hidden"
      opts={{ loop: true }}
      plugins={[plugin.current]}
    >
      <CarouselContent className="h-full">
        {items.map((item) => (
          <CarouselItem key={item.id} className="relative h-screen">
            <Image
              src={item.cover}
              alt={item.title ? item.title.toString() : "anime"}
              fill
              className="absolute z-0 hidden object-cover opacity-50 lg:block"
            />
            <Image
              src={item.image}
              alt={item.title ? item.title.toString() : "anime"}
              fill
              className="absolute z-0 object-cover opacity-50 lg:hidden"
            />
            <div className="relative z-10 mx-auto flex h-full flex-col items-center justify-end gap-y-6 pb-16 lg:w-[1060px] lg:items-start lg:gap-y-10 xl:w-[1240px] 2xl:w-[1440px]">
              <AnimeTitle item={item} className="text-[48px]" />
              <div className="flex gap-x-6">
                <Link
                  href={`/watch/${item.id}`}
                  className="flex items-center gap-x-2 rounded-[50px] border-2 border-white bg-white px-7 py-3 font-bold transition hover:bg-transparent hover:text-white"
                >
                  <CiPlay1 size={24} />
                  Play
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute left-1/2 w-[360px] -translate-x-1/2 lg:w-[1060px] xl:w-[1240px] 2xl:w-[1440px]">
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
