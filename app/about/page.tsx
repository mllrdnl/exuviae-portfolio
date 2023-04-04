import styles from "../styles/aboutPage.module.css";
import NavBar from "../components/NavBar";

const about = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutHeader}>
            <h1 className={styles.aboutH1}>About Me</h1>
          </div>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              {" "}
              I am a passionate, solution-oriented full stack developer with a
              background in sales and account management. I'm comfortable
              working with diverse teams and pride myself on my mid-western work
              ethic. With experience in JavaScript, ReactJS, Bootstrap, NodeJS,
              SQL, Python, FlaskSQL, REST APIs, and Git, I'm capable of building
              both cohesive, interactive layouts and robust APIs to create an
              optimized and smooth experience for the end user.
            </p>

            <p className={styles.aboutText}>
              In addition to my love for programming and creating, I also have a
              strong affinity for the natural world and scientific illustration.
              More specifically, I am infatuated with entomology, and love both
              learning about the vast and diverse insect world, and creating
              illustrations that bring thier fascinating features and lifecyles
              to light.
            </p>

            <p className={styles.aboutText}>
              Amongst my list of favorite insects lies the beloved cicada. I'm
              forever intrigued by their louder-than-life 'song', their
              incredible lifecycle, and the alien-like 'shell' (exuviae) that
              they leave behind after emerging from the earth and transitioning
              to their next chapter of life.
            </p>
            <p className={styles.aboutText}>
              Here you'll find a curation of projects that I've created, learned
              from, and grew from. Each one similar to an exuviae, displaying my
              capabilities and leading you to wonder what the next chapter looks
              like.
            </p>
          </div>
        </div>
        <div className={styles.aboutSkills}>
          <div className={styles.skillsHeader}>
            <h1 className={styles.aboutH1}>Skills</h1>
          </div>
          <div className={styles.skillsContent}>
            <div className={styles.skillsText}>
              <h4>HTML5/CSS</h4>
              <h4>JAVASCRIPT</h4>
              <h4>REACT.JS</h4>
              <h4>PYTHON</h4>
              <h4>SQL</h4>
              <h4>Bootstrap</h4>
              <h4>FlaskSQL</h4>
              <h4>REST APIS</h4>
              <h4>GIT</h4>
              <h4>MONGODB</h4>
              <h4>REDUX</h4>
              <h4>AXIOS</h4>
            </div>
          </div>
        </div>
        <h1>Resume</h1>
      </div>
    </div>
  );
};

export default about;
