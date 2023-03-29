import styles from "./page.module.css";
import HomeNav from "./components/HomeNav";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>MALLORY DANIEL</h1>
        <h2 className={styles.subTitle}>Exuviae.Me</h2>
        <div className={styles.exuviaeLogo}></div>
      </div>
      <div className={styles.navFooter}>
        <HomeNav />
      </div>
    </main>
  );
}
