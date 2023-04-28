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
            <div className={styles.svgLine}>
              <svg height="5" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line
                  className={styles.goldLine}
                  width="1862"
                  height="4.08"
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                />
              </svg>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              {" "}
              I am a passionate, solution-oriented full stack developer with a
              background in sales and account management. I&apos;m comfortable
              working with diverse teams and pride myself on my mid-western work
              ethic. With experience in JavaScript, ReactJS, Bootstrap, NodeJS,
              SQL, Python, FlaskSQL, REST APIs, and Git, I&apos;m capable of
              building both cohesive, interactive layouts and robust APIs to
              create an optimized and smooth experience for the end user.
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
              Amongst my list of favorite insects lies the beloved cicada.
              I&apos;m forever intrigued by their louder-than-life
              &apos;song&apos;, their incredible lifecycle, and the alien-like
              &apos;shell&apos; (exuviae) that they leave behind after emerging
              from the earth and transitioning to their next chapter of life.
            </p>
            <p className={styles.aboutText}>
              Here you&apos;ll find a curation of projects that I&apos;ve
              created, learned from, and grew from. Each one similar to an
              exuviae, displaying my capabilities and leading you to wonder what
              the next chapter looks like.
            </p>
          </div>
        </div>
        <div className={styles.aboutSkills}>
          <div className={styles.skillsHeader}>
            <h1 className={styles.aboutH1}>Skills</h1>
            <div className={styles.svgLine}>
              <svg height="5" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line
                  className={styles.goldLine}
                  width="1862"
                  height="4.08"
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                />
              </svg>
            </div>
          </div>
          <div className={styles.skillsContent}>
            <div className={styles.skillsText}>
              <h4 className={styles.skill}>HTML/CSS</h4>
              <h4 className={styles.skill}>JAVASCRIPT</h4>
              <h4 className={styles.skill}>REACT.JS</h4>
              <h4 className={styles.skill}>PYTHON</h4>
              <h4 className={styles.skill}>SQL</h4>
              <h4 className={styles.skill}>Bootstrap</h4>
              <h4 className={styles.skill}>FlaskSQL</h4>
              <h4 className={styles.skill}>REST APIS</h4>
              <h4 className={styles.skill}>GIT</h4>
              <h4 className={styles.skill}>MONGODB</h4>
              <h4 className={styles.skill}>REDUX</h4>
              <h4 className={styles.skill}>AXIOS</h4>
              <h4 className={styles.skill}>WordPress</h4>
              <h4 className={styles.skill}>NextJS 13</h4>
              <h4 className={styles.skill}>MERN</h4>
              <h4 className={styles.skill}>TypeScript</h4>
            </div>
          </div>
        </div>
        <div className={styles.resumeDiv}>
          <a
            href="/M.Daniel.Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={styles.resumeH1}>Resume</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default about;
