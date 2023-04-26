import NavBar from "../components/NavBar";
import styles from "../styles/Contact.module.css";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const ContactMe = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.contactBody}>
        <div className={styles.contactHeader}>
          <p>Let's create something together!</p>
        </div>
        <div className={styles.links}>
          <div className={styles.email}>
            <a href="mailto:mal@exuviae.me">Send me an email</a>
          </div>
          <div className={styles.socials}>
            <p className={styles.findme}>...or find me @</p>
            <div className={styles.sociallinks}>
              <div className={styles.git}>
                <a
                  href="https://github.com/mllrdnl"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub size={62} />
                </a>
              </div>
              <div className={styles.twitter}>
                <a
                  href="https://twitter.com/mllrdnl"
                  className="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter size={62} />
                </a>
              </div>
              <div className={styles.linked}>
                <a
                  href="https://www.linkedin.com/in/mallory-daniel-746103119/"
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin size={62} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
