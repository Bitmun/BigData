import styles from './styles.module.scss';

import { ComicDetailsCard, FetchError, Loader } from 'components';
import { useFetchComicById } from 'core/hooks/comicsHooks';
import { useNavigate, useParams } from 'react-router-dom';

export const ComicDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  if (!id) {
    throw new Error('No id!');
  }

  const { response, isLoading, error } = useFetchComicById(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !response) {
    return <FetchError />;
  }

  const { results } = response.data;

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <main className={styles.detailsMain}>
      <ComicDetailsCard comic={results[0]} />
      <button className={styles.goBackButton} onClick={handleGoBackClick}>
        Go back
      </button>
    </main>
  );
};
