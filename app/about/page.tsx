import styles from "../styles/aboutPage.module.css";
import NavBar from "../components/NavBar";

const about = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.homeContainer}>
        <div className={styles.aboutHeader}>
          <h1 className={styles.aboutH1}>About Me</h1>
          <div className={styles.hzBox}></div>
        </div>
        <div>
          <h1>Skills</h1>
        </div>
      </div>
    </div>
  );
};

export default about;
