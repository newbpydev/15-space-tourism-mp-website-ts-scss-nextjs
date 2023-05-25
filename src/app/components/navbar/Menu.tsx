import Link from "next/link";
import styles from "@/app/styles/components/navbar/Menu.module.scss";

function Menu() {
  return (
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
  );
}

export default Menu;
