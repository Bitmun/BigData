import styles from './styles.module.scss';

import { ComicsList } from 'components';

export const Home = () => {
  return (
    <main className={styles.mainPart}>
      <ComicsList />
    </main>
  );
};
