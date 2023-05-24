import Link from "next/link";

import logo from "@/app/assets/shared/logo.svg";
import styles from "../../styles/components/navbar/MainNavBar.module.scss";
import Image from "next/image";

function MainNavBar() {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href={"/"}>
          <Image src={logo} width={40} height={40} alt="Space Tourism Logo" />
        </Link>
      </div>

      <ul className={styles.links}>
        <li>
          <Link href={"/"} className={styles.link}>
            00 Home
          </Link>
        </li>
        <li>
          <Link href={"/destination"} className={styles.link}>
            01 Destination
          </Link>
        </li>
        <li>
          <Link href={"/crew"} className={styles.link}>
            02 Crew
          </Link>
        </li>
        <li>
          <Link href={"/technology"} className={styles.link}>
            03 Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavBar;
