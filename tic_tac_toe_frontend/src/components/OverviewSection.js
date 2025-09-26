import styles from '../styles/Profile.module.css';
import ActivityGraph from './ActivityGraph';
import Stats from './Stats';

const OverviewSection = () => {
  return (
    <div className={styles.overviewSection}>
      <div className={styles.overviewHeader}>
        <h3>Overview</h3>
        <div className={styles.periodSelector}>
          <span>This week</span>
          <img src="/assets/figma_image_907_390_512_3726_517_11393.png" alt="Dropdown" />
        </div>
      </div>
      <div className={styles.graph}>
        <ActivityGraph />
        <Stats />
      </div>
    </div>
  );
};

export default OverviewSection;
