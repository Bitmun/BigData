import styles from './styles.module.scss';

import { ComicTile, FetchError, Loader } from 'components';
import { useFetchComics } from 'core/hooks/comicsHooks';
export const ComicsList = () => {
  const { response, isLoading, error } = useFetchComics();

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
    <div className={styles.listWrapper}>
      {results.map((comic) => (
        <ComicTile key={comic.id} comic={comic} />
      ))}
    </div>
  );
};
