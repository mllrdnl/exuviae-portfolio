import styles from "../styles/ProjCard.module.css";
import Image from "next/image";
import Link from "next/link";

type TechProps = {
  name: string;
  logo_url: string;
};

type Props = {
  title: string;
  img: string;
  desc: string;
  tags: string[];
  alt: string;
  tech: TechProps[];
  slug: string;
};

function ProjCard({ title, img, desc, tags, tech, alt, slug }: Props) {
  return (
    <div className={styles.cardContainer}>
      {/* <div className={styles.cardDesc}>
        {desc}
        <div>Details</div>
      </div> */}
      <Link href={`/projects/${slug}`} className={styles.projLink}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <h4>{title}</h4>
          </div>
          <div className={styles.imgContainer}>
            <Image src={img} alt={alt} fill className={styles.img} />
          </div>

          <div className={styles.cardTags}>
            <ul className={styles.techlist}>
              {tech.map((each, i) => (
                <li className={styles.techli} key={i}>
                  <Image
                    src={`/images${each.logo_url}`}
                    alt="alt text"
                    fill
                    className={styles.techLogoImg}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjCard;
