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

  const pathnameBase = pathname.split("/")[1];

  const setIsActive = (link: string) => {
    return link.split("/")[1] === pathnameBase;
  };

  const renderLinks = navigation.map((link) => {
    let isActive: boolean = false;

    switch (pathnameBase) {
      case "":
        isActive = link.href === "/";
        // isActive = link.href === pathname;
        break;
      case "destination":
        isActive = link.href.split("/")[1] === pathnameBase;
        break;
      case "crew":
        isActive = setIsActive(link.href);
        break;
      case "technology":
        isActive = setIsActive(link.href);
        // isActive = link.href.includes(pathname);
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
