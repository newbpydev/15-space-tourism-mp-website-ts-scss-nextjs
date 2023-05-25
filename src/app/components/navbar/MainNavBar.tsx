"use client";
import Link from "next/link";

import logo from "@/app/assets/shared/logo.svg";
import hamburgerIcon from "@/app/assets/shared/icon-hamburger.svg";

import styles from "../../styles/components/navbar/MainNavBar.module.scss";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import Menu from "./Menu";

function MainNavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick: MouseEventHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className={styles.nav}>
      <div>
        <Link href={"/"} className={styles.logo}>
          <Image src={logo} width={40} height={40} alt="Space Tourism Logo" />
        </Link>
      </div>

      {toggleMenu ? (
        <Menu onMenuClick={handleClick} />
      ) : (
        <Image
          src={hamburgerIcon}
          alt=""
          width={24}
          height={21}
          className={styles.hamburgerIcon}
          onClick={handleClick}
        />
      )}
    </nav>
  );
}

export default MainNavBar;
