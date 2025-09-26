import styles from '../styles/Profile.module.css';

const MenuSection = ({ onMenuItemClick }) => {
  const menuItems = [
    {
      icon: '/assets/figma_image_907_445_517_11095.png',
      title: 'Documents'
    },
    {
      icon: '/assets/figma_image_907_450_517_10923.png',
      title: 'Settings'
    },
    {
      icon: '/assets/figma_image_907_455_517_10863.png',
      title: 'Security & Privacy'
    },
    {
      icon: '/assets/figma_image_907_460.png',
      title: 'About'
    },
    {
      icon: '/assets/figma_image_907_465.png',
      title: 'Logout',
      isLogout: true
    }
  ];

  return (
    <div className={styles.menuSection}>
      {menuItems.map((item, index) => (
        <div 
          key={index}
          className={`${styles.menuItem} ${item.isLogout ? styles.logout : ''}`}
          onClick={() => onMenuItemClick(item.title)}
        >
          <div className={styles.sectionHeader}>
            <img src={item.icon} alt={item.title} className={styles.icon} />
            <h3>{item.title}</h3>
          </div>
          {!item.isLogout && (
            <img 
              src="/assets/figma_image_907_435_517_11393.png" 
              alt="Chevron" 
              className={styles.chevron} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuSection;
