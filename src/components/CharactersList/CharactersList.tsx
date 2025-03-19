import { CharacterTile } from 'components/CharacterTile/CharacterTile';
import { FetchError } from 'components/FetchError/FetchError';
import { Loader } from 'components/Loader/Loader';
import { useFetchCharacters } from 'core/hooks/charactersHooks';
import { useSearchContext } from 'core/hooks/useSearch';

export const CharactersList = () => {
  const { query } = useSearchContext();
  const { response, isLoading, error } = useFetchCharacters(query);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error || !response) {
    return (
      <div>
        <FetchError />
      </div>
    );
  }

  const { results } = response.data;

  return (
    <div>
      {results.length === 0 && <div>Nothing found, try another query</div>}
      {results.map((char) => (
        <CharacterTile key={char.id} character={char} />
      ))}
    </div>
  );
};
