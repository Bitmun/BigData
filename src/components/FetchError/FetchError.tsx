import styles from './styles.module.scss';

export const FetchError = () => {
  return <div className={styles.fetchErrorWrapper}>Fetching error. Try again</div>;
};
