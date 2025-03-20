import styles from './styles.module.scss';
import { CharacterDetailsCardProps } from './type';

import { CustomImg } from 'components';
import { useNavigate } from 'react-router-dom';

export const CharacterDetailsCard = ({ char }: CharacterDetailsCardProps) => {
  const navigate = useNavigate();
  const { thumbnail, name, comics } = char;
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;

  console.log(char);

  const handleGoToComic = (url: string) => {
    const segments = url.split('/');
    const comicId = segments[segments.length - 1];
    navigate(`/comics/${comicId}`);
  };

  return (
    <div className={styles.charDetailWrapper}>
      <CustomImg imgSrc={imgSrc} title={name} />
      <h2>{name}</h2>
      <div>
        <h3>Comics:</h3>
        {comics.items.map((comic) => (
          <button
            className={styles.detailsComic}
            onClick={() => handleGoToComic(comic.resourceURI)}
            key={comic.name}
          >
            {comic.name}
          </button>
        ))}
      </div>
    </div>
  );
};
