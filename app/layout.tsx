import type { Metadata } from "next";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/MainNavigation";

export const metadata: Metadata = {
  title: "Anime",
  description: "Watch some anime. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#121212]">
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
