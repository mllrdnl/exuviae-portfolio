import styles from "../styles/ProjCard.module.css";
import Image from "next/image";

type Props = {
  title: string;
  img: string;
  desc: string;
  tags: string[];
  alt: string;
};

const ProjCard = ({ title, img, desc, tags, alt }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <h4>{title}</h4>
      </div>
      <div className={styles.cardImg}>
        <Image src={img} alt={alt} fill className={styles.img} />
      </div>
      <div className={styles.cardDesc}>{desc}</div>
      <div className={styles.cardTags}>{tags}</div>
    </div>
  );
};

export default ProjCard;
