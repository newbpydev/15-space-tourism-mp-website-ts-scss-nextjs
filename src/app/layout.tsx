import { Metadata } from "next";
import "./styles/index.scss";
import MainNavBar from "./components/navbar/MainNavBar";

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
      <body>
        <header>
          <MainNavBar />
        </header>

        <>{children}</>
      </body>
    </html>
  );
}
