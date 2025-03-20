import styles from './styles.module.scss';

import { CharactersList, SearchBar } from 'components';
import { SearchContextProvider } from 'core/contexts/searchContext';

export const Characters = () => {
  return (
    <SearchContextProvider>
      <main className={styles.charactersMain}>
        <SearchBar />
        <CharactersList />
      </main>
    </SearchContextProvider>
  );
};
