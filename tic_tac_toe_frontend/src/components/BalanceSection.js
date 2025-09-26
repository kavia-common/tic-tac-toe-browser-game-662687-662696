import styles from '../styles/Profile.module.css';

const BalanceSection = ({ onClick }) => {
  return (
    <div className={styles.balanceSection} onClick={onClick}>
      <div className={styles.sectionHeader}>
        <img src="/assets/figma_image_907_438_517_10841.png" alt="Credit Card" className={styles.icon} />
        <h3>My Balance</h3>
      </div>
      <div className={styles.balanceAmount}>
        <span>$1,560</span>
        <img src="/assets/figma_image_907_435_517_11393.png" alt="Chevron" className={styles.chevron} />
      </div>
    </div>
  );
};

export default BalanceSection;
