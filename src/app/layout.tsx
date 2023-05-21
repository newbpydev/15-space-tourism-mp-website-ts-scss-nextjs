import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Space Tourism Website",
  description:
    "Explore the wonders of Space Tourism on our captivating website. Embark on a celestial journey through stunning visuals and immersive experiences. Join us in making dreams of space travel a reality. #webdevelopment #frontend #spacetourism #frontendmentor",
  icons: [{ rel: "icon", url: "./favicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
