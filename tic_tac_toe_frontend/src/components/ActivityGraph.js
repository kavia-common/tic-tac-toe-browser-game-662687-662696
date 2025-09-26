import styles from '../styles/Profile.module.css';

const ActivityGraph = () => {
  const barData = [
    { height: 45, label: '06/14' },
    { height: 50 },
    { height: 45, label: '06/15' },
    { height: 40 },
    { height: 50, label: '06/15' },
    { height: 30 },
    { height: 10, label: 'Today' }
  ];

  return (
    <div className={styles.barContainer}>
      {barData.map((bar, index) => (
        <div key={index} className={styles.barGroup}>
          <div className={styles.barBase}></div>
          <div 
            className={styles.barActive} 
            style={{ height: `${bar.height}px` }}
          ></div>
          {bar.label && <span className={styles.barLabel}>{bar.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default ActivityGraph;
