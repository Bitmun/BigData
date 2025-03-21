import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import { CharacterDetailsCard, CharacterTile } from 'components';
import { FetchError } from 'components';
import { Loader } from 'components';
import { useFetchCharacters } from 'core/hooks/charactersHooks';
import { useSearchContext } from 'core/hooks/useSearch';
import { Character } from 'core/types';
export const CharactersList = () => {
  const { query } = useSearchContext();
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const { response, isLoading, error } = useFetchCharacters(query);

  useEffect(() => {
    setSelectedChar(null);
  }, [query]);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !response) {
    return <FetchError />;
  }

  const { results } = response.data;

  const handleSelectChar = (char: Character) => {
    setSelectedChar(char);

    if (window.innerWidth < 680) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleClose = () => {
    setSelectedChar(null);
  };

  return (
    <>
      {results.length === 0 && <div>Nothing found, try another query</div>}
      {selectedChar && (
        <div className={styles.selectedCharsWrapper}>
          <div className={styles.selectedCharsList}>
            {results.map((char) => (
              <CharacterTile
                key={char.id}
                character={char}
                handleClick={handleSelectChar}
                isSelected={selectedChar.id === char.id}
              />
            ))}
          </div>
          <CharacterDetailsCard char={selectedChar} handleClose={handleClose} />
        </div>
      )}
      {!selectedChar && (
        <div className={styles.charsList}>
          {results.map((char) => (
            <CharacterTile
              key={char.id}
              character={char}
              handleClick={handleSelectChar}
            />
          ))}
        </div>
      )}
    </>
  );
};
