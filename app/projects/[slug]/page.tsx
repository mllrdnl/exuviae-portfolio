import projects from "../../../data.json";
import NavBar from "@/app/components/NavBar";
import styles from "../../styles/AboutProject.module.css";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

type Props = {
  params: {
    slug: string;
  };
};

export default function Project({ params: { slug } }: Props) {
  const selectedProject = projects.filter((proj) => {
    return proj.slug === slug;
  });

  return (
    <div className={styles.projectPageContainer}>
      <NavBar />
      <div className={styles.projectBody}>
        {selectedProject.map((projDetails) => (
          <div className={styles.detailsBody}>
            <div className={styles.projTitle}>
              <div className={styles.titles}>
                <h1>Project:</h1>

                <h2>{projDetails.title}</h2>
                {projDetails.wip === true ? (
                  <h3 className={styles.wip}>(Work in Progress)</h3>
                ) : null}
              </div>
            </div>
            <div className={styles.projDetails}>
              <div className={styles.projPic}>
                <Image
                  src={`/images${projDetails.image}`}
                  alt={projDetails.alt}
                  fill
                  className={styles.projImg}
                />
              </div>
              <div className={styles.projInfo}>
                <div>
                  <h3>Description:</h3>
                  <p className={styles.infoP}>{projDetails.description}</p>
                </div>
                <div>
                  <h3>Additional Info:</h3>
                  <p className={styles.infoP}>{projDetails.info}</p>
                </div>
                <div>
                  <h3>Tech Used:</h3>
                  <div className={styles.techInfo}>
                    {projDetails.tech.map((each, i) => (
                      <div key={i} className={styles.techImg}>
                        <Image
                          src={`/images${each.logo_url}`}
                          alt="tech logo"
                          className={styles.techLogoImg}
                          fill
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.buttons}>
                  <a href={projDetails.proj_url} target="_blank">
                    <div className={styles.projLink}>
                      <HiExternalLink size={24} />
                      <p>Project</p>
                    </div>
                  </a>

                  <a href={projDetails.git_url} target="_blank">
                    <div className={styles.gitLink}>
                      <BsGithub size={24} />
                      <p>Code</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
