"use client";
import Link from "next/link";
import styles from "../../styles/components/navbar/DestinationNavBar.module.scss";
import { usePathname } from "next/navigation";

function DestinationNavBar() {
  const pathname = usePathname().split("/").pop();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.link}>
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
        </li>
      </ul>
    </nav>
  );
}

export default DestinationNavBar;
