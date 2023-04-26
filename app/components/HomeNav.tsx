import styles from "../styles/HomeNav.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/about" className={styles.navLink}>
        <h1>About</h1>
      </Link>
      <Link href="/projects" className={styles.navLink}>
        <h1>Projects</h1>
      </Link>

      <Link href="/contact" className={styles.navLink}>
        <h1>Contact</h1>
      </Link>
    </div>
  );
};

export default NavBar;
