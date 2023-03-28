import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/" className={styles.navLink}>
        <h1>About</h1>
      </Link>
      <Link href="/" className={styles.navLink}>
        <h1>Projects</h1>
      </Link>
      <Link href="/" className={styles.navLink}>
        <h1>Resume</h1>
      </Link>
      <Link href="/" className={styles.navLink}>
        <h1>Contact</h1>
      </Link>
    </div>
  );
};

export default NavBar;
