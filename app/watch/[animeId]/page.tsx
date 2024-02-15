"use client";

import { IAnimeInfo, META } from "@consumet/extensions";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const AnimePage = () => {
  const [items, setItems] = useState<IAnimeInfo>();
  const params = useParams<{ animeId: string }>();
  const { animeId } = params;
  console.log(animeId);

  useEffect(() => {
    const getAnime = async () => {
      try {
        const anilist = new META.Anilist();
        const animeInfo = await anilist.fetchAnimeInfo(animeId);
        setItems(animeInfo);
      } catch (error) {
        console.error("Error fetching anime information:", error);
      }
    };

    getAnime();
  }, [animeId]);

  console.log(items);

  const animeTitle =
    typeof items?.title === "string" ? items.title : items?.title.english;

  const descriptionWithoutExtras = (items?.description || "")
    .replace(/<br>/g, "")
    .replace("(Source: MangaHelpers)", "");

  return (
    <>
      <div className="absolute left-0 top-0 z-0 h-[70vh] w-screen opacity-40 blur-lg">
        {items?.cover && (
          <Image
            src={items?.cover}
            alt="background"
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="relative z-10 mx-auto pt-[155px] lg:w-[1060px] xl:w-[1240px] 2xl:w-[1440px]">
        <div className="flex gap-x-16">
          {items?.image && (
            <Image
              src={items?.image}
              alt="poster"
              width={300}
              height={324}
              className="rounded-3xl"
            />
          )}
          <div className="flex flex-col gap-y-10 text-white lg:max-w-[460px]">
            <h1 className="text-4xl">{animeTitle}</h1>
            <p>{descriptionWithoutExtras}</p>
            <div className="flex gap-x-6">
              {items?.genres?.map((genre, index) => (
                <p
                  key={index}
                  className="flex h-8 w-24 items-center justify-center rounded-3xl bg-white px-2 font-medium text-black"
                >
                  {genre}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimePage;
