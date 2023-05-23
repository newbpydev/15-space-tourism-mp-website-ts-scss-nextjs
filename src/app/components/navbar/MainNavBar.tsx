import Link from "next/link";
import React from "react";

import styles from "../../styles/components/MainNavBar.module.scss";

function MainNavBar() {
  return (
    <nav className={styles.nav}>
      <div>logo</div>

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
