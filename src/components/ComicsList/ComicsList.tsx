import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import { ComicTile, FetchError, Loader } from 'components';
import { API_CONSTANSTS } from 'constants/apiConstants';
import { useFetchComics } from 'core/hooks/comicsHooks';
import { Comic } from 'core/types';

export const ComicsList = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [offSet, setOffSet] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { response, isLoading, error } = useFetchComics(offSet);

  const handleLoadMoreComics = () => {
    setIsLoadingMore(true);
    setOffSet((prev) => prev + API_CONSTANSTS.limit);
  };

  useEffect(() => {
    if (response && response.data.results.length > 0) {
      setComics((prevComics) => [...prevComics, ...response.data.results]);
      setIsLoadingMore(false);
    }
  }, [response]);

  if (isLoading && offSet === 0) {
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

  return (
    <div className={styles.listContainer}>
      <div className={styles.listWrapper}>
        {comics.map((comic) => (
          <ComicTile key={comic.id} comic={comic} />
        ))}
      </div>
      {isLoadingMore && <Loader />}
      <button
        className={styles.fetchMoreButton}
        onClick={handleLoadMoreComics}
        disabled={isLoadingMore}
      >
        Fetch more comics
      </button>
    </div>
  );
};
