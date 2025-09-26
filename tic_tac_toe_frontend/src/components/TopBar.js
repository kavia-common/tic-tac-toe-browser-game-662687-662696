import styles from '../styles/Profile.module.css';

const TopBar = ({ onEdit }) => {
  return (
    <div className={styles.topBar}>
      <h1 className={styles.pageTitle}>Profile</h1>
      <button className={styles.editBtn} onClick={onEdit}>
        <img src="/assets/figma_image_907_377_512_3578_517_10925.png" alt="Edit" />
      </button>
    </div>
  );
};

export default TopBar;
