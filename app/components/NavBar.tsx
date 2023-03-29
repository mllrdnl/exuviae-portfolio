import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
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
    </div>
  );
};

export default NavBar;
