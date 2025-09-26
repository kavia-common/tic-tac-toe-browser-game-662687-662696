import { useCallback } from 'react';
import StatusBar from '../components/StatusBar';
import TopBar from '../components/TopBar';
import ProfileSection from '../components/ProfileSection';
import OverviewSection from '../components/OverviewSection';
import TaxForm from '../components/TaxForm';
import BalanceSection from '../components/BalanceSection';
import MenuSection from '../components/MenuSection';
import NavigationBar from '../components/NavigationBar';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const handleEdit = useCallback(() => {
    console.log('Edit profile clicked');
  }, []);

  const handleRoleChange = useCallback(() => {
    console.log('Change role clicked');
  }, []);

  const handleTaxFormClick = useCallback(() => {
    console.log('Tax form section clicked');
  }, []);

  const handleBalanceClick = useCallback(() => {
    console.log('Balance section clicked');
  }, []);

  const handleMenuItemClick = useCallback((title) => {
    if (title === 'Logout') {
      console.log('Logout clicked');
    } else {
      console.log(`Menu item clicked: ${title}`);
    }
  }, []);

  return (
    <div className={styles.container}>
      <StatusBar />
      <TopBar onEdit={handleEdit} />
      <div className={styles.content}>
        <ProfileSection onRoleChange={handleRoleChange} />
        <OverviewSection />
        <TaxForm onClick={handleTaxFormClick} />
        <BalanceSection onClick={handleBalanceClick} />
        <MenuSection onMenuItemClick={handleMenuItemClick} />
      </div>
      <NavigationBar />
    </div>
  );
};

export default Profile;
