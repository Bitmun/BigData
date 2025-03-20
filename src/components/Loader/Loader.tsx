import styles from './styles.module.scss';

import loadingIcon from 'assets/images/loading-icon.svg';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <img className={styles.loaderIcon} src={loadingIcon} alt="loader-icon"></img>
    </div>
  );
};
