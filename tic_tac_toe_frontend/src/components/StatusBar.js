import styles from '../styles/Profile.module.css';

const StatusBar = () => {
  return (
    <div className={styles.statusBar}>
      <div className={styles.statusBarTime}>9:41</div>
      <div className={styles.statusBarIcons}>
        <div className={styles.signal}>
          <img src="/assets/figma_image_907_376_44_1270.png" alt="Signal" />
        </div>
        <div className={styles.wifi}>
          <img src="/assets/figma_image_907_376_44_1271.png" alt="WiFi" />
        </div>
        <div className={styles.battery}></div>
      </div>
    </div>
  );
};

export default StatusBar;
