import styles from '../styles/Profile.module.css';

const ProfileSection = ({ onRoleChange }) => {
  return (
    <div className={styles.profileSection}>
      <div className={styles.profileImage}>
        <img src="/assets/figma_image_907_381.png" alt="Profile" />
      </div>
      <div className={styles.profileInfo}>
        <h2>Craftsman Craig</h2>
        <p className={styles.idText}>ID#008638  •  Workers</p>
        <div className={styles.badge} onClick={onRoleChange}>
          <img src="/assets/figma_image_907_386_503_7440_517_10915.png" alt="User" />
          <span>Change to Manager</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
