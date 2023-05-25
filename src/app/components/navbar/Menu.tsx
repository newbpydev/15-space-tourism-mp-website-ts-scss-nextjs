import Link from "next/link";
import styles from "@/app/styles/components/navbar/Menu.module.scss";
import { MouseEventHandler } from "react";
import closeIcon from "@/app/assets/shared/icon-close.svg";
import Image from "next/image";
import path from "path";

// import navigation from

interface Props {
  onMenuClick: MouseEventHandler;
}

function Menu({ onMenuClick }: Props) {
  const navigation = path.resolve(__dirname, "..", "data", "navigation.json");
  console.log(navigation);

  return (
    <div className={styles.menuContainer}>
      <Image
        src={closeIcon}
        width={19.09}
        height={19.09}
        alt=""
        className={styles.closeIcon}
        onClick={onMenuClick}
      />

      <ul className={styles.links}>
        <li>
          <Link href={"/"} className={styles.link} onClick={onMenuClick}>
            <span className={styles.linkNumber}>00</span>
            <span className={styles.linkName}>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/destination"}
            className={styles.link}
            onClick={onMenuClick}
          >
            <p className={styles.linkNumber}>01</p>
            <p className={styles.linkName}>Destination</p>
          </Link>
        </li>
        <li>
          <Link href={"/crew"} className={styles.link} onClick={onMenuClick}>
            <p className={styles.linkNumber}>02</p>
            <p className={styles.linkName}>Crew</p>
          </Link>
        </li>
        <li>
          <Link
            href={"/technology"}
            className={styles.link}
            onClick={onMenuClick}
          >
            <span className={styles.linkNumber}>03</span>
            <span className={styles.linkName}>Technology</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
