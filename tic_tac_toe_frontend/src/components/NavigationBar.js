import { Link } from 'react-router-dom';
import styles from '../styles/Profile.module.css';

const NavigationBar = () => {
  const navItems = [
    {
      icon: '/assets/figma_image_907_467_503_8266_517_11097.png',
      label: 'Jobs',
      path: '/jobs'
    },
    {
      icon: '/assets/figma_image_907_467_503_8270.png',
      label: 'History',
      path: '/history'
    },
    {
      icon: '/assets/figma_image_907_438_517_10841.png',
      label: 'Payments',
      path: '/payments'
    },
    {
      icon: '/assets/figma_image_907_386_503_7440_517_10915.png',
      label: 'Profile',
      path: '/profile'
    }
  ];

  return (
    <>
      <nav className={styles.navBar}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`${styles.navItem} ${item.label === 'Profile' ? styles.active : ''}`}
          >
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className={styles.homeIndicator}>
        <div className={styles.indicatorLine}></div>
      </div>
    </>
  );
};

export default NavigationBar;
