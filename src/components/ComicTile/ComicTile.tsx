import styles from './styles.module.scss';
import { ComicTileProps } from './type';

import { CustomImg } from 'components/CustomImg/CustomImg';
import { useNavigate } from 'react-router-dom';

export const ComicTile = ({ comic }: ComicTileProps) => {
  const navigate = useNavigate();

  const { id, title, images, prices } = comic;

  const handleClick = () => {
    navigate(`/comics/${id}`);
  };

  const imgSrc = images[0] ? `${images[0].path}.${images[0].extension}` : undefined;

  const priceToDisplay = prices[0].price === 0 ? 'No price info' : `${prices[0].price}$`;

  return (
    <button className={styles.tileWrapper} onClick={handleClick}>
      <CustomImg title={title} imgSrc={imgSrc} />
      <div>
        <h3>{title}</h3>
        <br />
        {priceToDisplay}
      </div>
    </button>
  );
};
