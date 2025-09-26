import styles from '../styles/Profile.module.css';

const TaxForm = ({ onClick }) => {
  return (
    <div className={styles.taxForm} onClick={onClick}>
      <div className={styles.iconContainer}>
        <img src="/assets/figma_image_907_431_517_11301.png" alt="Tax Form" />
      </div>
      <div className={styles.taxInfo}>
        <h3>Fill Out Tax Form</h3>
        <p>Fill out tax form and sign it to get verified</p>
      </div>
      <img src="/assets/figma_image_907_435_517_11393.png" alt="Chevron" className={styles.chevron} />
    </div>
  );
};

export default TaxForm;
