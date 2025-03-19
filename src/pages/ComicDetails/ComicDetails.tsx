import { FetchError, Loader } from '@components';

import { ComicDetailsCard } from 'components/ComicDetailsCard/ComicDetailsCard';
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

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <ComicDetailsCard comic={results[0]} />
      <button onClick={handleGoBackClick}>Go back</button>
    </div>
  );
};
