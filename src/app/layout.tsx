import { Metadata } from "next";
import "./styles/index.scss";
import { Bellefair } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";

// const bellefair = Bellefair({
//   style: "normal",
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const barlowCondensed = Barlow_Condensed({
//   style: "normal",
//   weight: "400",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Frontend Mentor | Space Tourism Website",
  description:
    "Explore the wonders of Space Tourism on our captivating website. Embark on a celestial journey through stunning visuals and immersive experiences. Join us in making dreams of space travel a reality. #webdevelopment #frontend #spacetourism #frontendmentor",
  icons: [{ rel: "icon", url: "./favicon.png", sizes: "any" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={bellefair.className}>{children}</body> */}
    </html>
  );
}
