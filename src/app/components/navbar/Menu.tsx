import Link from "next/link";
import styles from "../../../app/styles/components/navbar/Menu.module.scss";
import { MouseEventHandler, useState } from "react";
import closeIcon from "@/app/assets/shared/icon-close.svg";
import Image from "next/image";
import path from "path";
import { CSSTransition } from "react-transition-group";

import { usePathname } from "next/navigation";

import navigation from "@/../data/navigation.json";

interface Props {
  onMenuClick: MouseEventHandler;
}

function Menu({ onMenuClick }: Props) {
  const pathname = usePathname();

  const renderLinks = navigation.map((link) => {
    let isActive: boolean;

    switch (pathname) {
      case "/":
        isActive = link.href === pathname;
        break;
      case "/destination":
        isActive = link.href === pathname;
        break;
      case "/crew":
        isActive = link.href === pathname;
        break;
      case "/technology":
        isActive = link.href === pathname;
        break;
      default:
        isActive = false;
        break;
    }

    return (
      <li key={link.href}>
        <Link
          href={link.href}
          className={`${styles.link + (isActive ? " " + styles.isActive : "")}`}
          onClick={onMenuClick}
        >
          <span className={styles.linkNumber}>{link.number}</span>
          <span className={styles.linkName}>{link.name}</span>
        </Link>
      </li>
    );
  });

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

      <ul className={styles.links}>{renderLinks}</ul>
    </div>
  );
}

export default Menu;
