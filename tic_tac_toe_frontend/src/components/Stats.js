import styles from '../styles/Profile.module.css';

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.statItem}>
        <h4>78h</h4>
        <p>TOTAL WORK</p>
      </div>
      <div className={styles.statItem}>
        <h4>6</h4>
        <p>UPCOMING</p>
      </div>
      <div className={styles.statItem}>
        <h4>12</h4>
        <p>COMPLETED</p>
      </div>
    </div>
  );
};

export default Stats;
