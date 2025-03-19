import { CharactersList, SearchBar } from 'components';
import { SearchContextProvider } from 'core/contexts/searchContext';

export const Characters = () => {
  return (
    <SearchContextProvider>
      <SearchBar />
      <CharactersList />
    </SearchContextProvider>
  );
};
