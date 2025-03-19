import styles from './styles.module.scss';
import { ComicTileProps } from './type';

import { useNavigate } from 'react-router-dom';

export const ComicTile = ({ comic }: ComicTileProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/comics/${comic.id}`);
  };
  return (
    <button className={styles.tileWrapper} onClick={handleClick}>
      <p>{comic.title}</p>
      <p>{comic.pageCount}</p>
    </button>
  );
};
