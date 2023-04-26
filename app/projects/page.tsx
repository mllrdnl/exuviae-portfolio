import NavBar from "../components/NavBar";
import styles from "../styles/projectPage.module.css";
import ProjCard from "../components/ProjCard";
import projData from "../../data.json";

const projects = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.projBody}>
        {/* <div className={styles.categories}>
          <div className={styles.projCat}>
            <h1 className={styles.projCatTop}>All</h1>
            <h2 className={styles.projCatBottom}>Projects</h2>
          </div>
          <div>
            <h1 className={styles.projCatTop}>Full</h1>
            <h2 className={styles.projCatBottom}>Stack</h2>
          </div>
          <div>
            <h1 className={styles.projCatTop}>Front</h1>
            <h2 className={styles.projCatBottom}>End</h2>
          </div>
          <div>
            <h2 className={styles.projCatTop}>Website</h2>
            <h1 className={styles.projCatBottom}>Maint</h1>
          </div>
          <div>
            <h2 className={styles.projCatTop}>Original</h2>
            <h1 className={styles.projCatBottom}>Art</h1>
          </div>
        </div> */}
        <div className={styles.projCardContainer}>
          {projData.map((proj) => (
            <div key={proj.id} className={styles.projectCard}>
              <ProjCard
                title={proj.title}
                img={`/images${proj.image}`}
                desc={proj.description}
                tags={proj.tags}
                alt={proj.alt}
                slug={proj.slug}
                tech={proj.tech}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
