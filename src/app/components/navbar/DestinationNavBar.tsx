"use client";
import Link from "next/link";
import styles from "../../styles/components/navbar/DestinationNavBar.module.scss";
import { usePathname } from "next/navigation";
import { getDestinations } from "@/app/lib/localdata";

interface Props {
  activeTab: string;
  tabs: string[];
}

function DestinationNavBar({ activeTab, tabs }: Props) {
  const pathname = usePathname().split("/").pop();

  const renderLinks = tabs.map((tab) => {
    let isActive: boolean = false;

    switch (pathname) {
      case "moon":
        isActive =
          pathname === activeTab.toLocaleLowerCase() &&
          pathname === tab.toLocaleLowerCase();
        break;
      case "mars":
        isActive =
          pathname === activeTab.toLocaleLowerCase() &&
          pathname === tab.toLocaleLowerCase();
        break;
      case "europa":
        isActive =
          pathname === activeTab.toLocaleLowerCase() &&
          pathname === tab.toLocaleLowerCase();
        break;
      case "titan":
        isActive =
          pathname === activeTab.toLocaleLowerCase() &&
          pathname === tab.toLocaleLowerCase();
        break;
      default:
        isActive = false;
        break;
    }

    return (
      <li
        className={styles.link + (isActive ? " " + styles.active : "")}
        key={tab}
      >
        <Link href={`/destination/${tab.toLocaleLowerCase()}`}>{tab}</Link>
      </li>
    );
  });

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {renderLinks}
        {/* <li className={styles.link}>
          <Link href={"/destination/moon"}>Moon</Link>
        </li>
        <li className={styles.link}>
          <Link href={"/destination/mars"}>Mars</Link>
        </li>
        <li className={styles.link}>
          <Link href={"/destination/europa"}>Europa</Link>
        </li>
        <li className={styles.link}>
          <Link href={"/destination/titan"}>Titan</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default DestinationNavBar;
