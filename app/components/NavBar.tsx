"use client";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navLogo}>
        <Link href="/">
          <Image
            src="/exuviaehover.png"
            height={100}
            width={100}
            alt="logo image of an insect shell drawing"
          />
        </Link>
      </div>

      <div className={styles.navLinks}>
        <Link
          href="/"
          className={pathname === "/" ? styles.active : styles.nonActive}
        >
          <h1>home</h1>
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : styles.nonActive}
        >
          <h1>about</h1>
        </Link>
        <Link
          href="/projects"
          className={
            pathname === "/projects" ? styles.active : styles.nonActive
          }
        >
          <h1>projects</h1>
        </Link>
        <Link
          href="/contactme"
          className={
            pathname === "/contactme" ? styles.active : styles.nonActive
          }
        >
          <h1>contact</h1>
        </Link>
      </div>
      <div className={styles.rightNav}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
            {isOpen === false ? (
              <HiMenu size={28} />
            ) : (
              <MdOutlineClose size={28} />
            )}
          </button>
        </div>
        <div
          className={
            isOpen === true
              ? styles.rightNavBodyOpen
              : styles.rightNavBodyClosed
          }
        >
          <Link
            href="/"
            className={pathname === "/" ? styles.ractive : styles.rnonActive}
          >
            <h1>home</h1>
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about" ? styles.ractive : styles.rnonActive
            }
          >
            <h1>about</h1>
          </Link>
          <Link
            href="/projects"
            className={
              pathname === "/projects" ? styles.ractive : styles.rnonActive
            }
          >
            <h1>projects</h1>
          </Link>
          <Link
            href="/contactme"
            className={
              pathname === "/contactme" ? styles.ractive : styles.rnonActive
            }
          >
            <h1>contact</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
