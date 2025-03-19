import styles from './styles.module.scss';
import { ComicTileProps } from './type';
export const ComicTile = ({ comic }: ComicTileProps) => {
  return (
    <div className={styles.tileWrapper}>
      <p>{comic.title}</p>
      <p>{comic.pageCount}</p>
    </div>
  );
};
