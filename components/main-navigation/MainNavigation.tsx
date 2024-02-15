"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

const MainNavigation = () => {
  return (
    <div className="fixed z-50 h-20 w-screen bg-gradient-to-b from-[#121212a2] to-transparent">
      <nav className="absolute left-1/2 top-0  flex -translate-x-1/2 items-center justify-between py-6 text-white lg:w-[1060px] xl:w-[1240px] 2xl:w-[1440px]">
        <Link href="/" className="text-4xl font-bold uppercase">
          logo
        </Link>
        <div className="flex items-center gap-x-8">
          <Link href="/" className="group relative">
            Home
            <div className="h-0.5 w-0 rounded-3xl bg-red-500 transition-all group-hover:w-full" />
          </Link>

          <Link href="/popular" className="group relative">
            Popular
            <div className="h-0.5 w-0 rounded-3xl bg-red-500 transition-all group-hover:w-full" />
          </Link>
          <button className="group relative">
            <div className="flex items-center gap-x-1">
              Genres
              <IoIosArrowDown />
            </div>
            <div className="h-0.5 w-0 rounded-3xl bg-red-500 transition-all group-hover:w-full" />
          </button>
        </div>
        <div className="flex w-[100px] justify-end">
          <IoIosSearch size={32} />
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
