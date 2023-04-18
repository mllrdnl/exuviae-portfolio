import styles from "../styles/ProjCard.module.css";

type Props = {
  projects: Project[];
};

const ProjCard = ({ projects }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <h4>Project 1</h4>
      </div>
      <div className={styles.cardImg}>Project Image</div>
      <div className={styles.cardDesc}>Description</div>
      <div className={styles.cardTags}>#FullStack #OriginalArt</div>
    </div>
  );
};

export default ProjCard;
