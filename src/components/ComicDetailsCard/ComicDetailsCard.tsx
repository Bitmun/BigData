import styles from './styles.module.scss';
import { ComicDetailsCardProps } from './type';

import { CustomImg } from 'components/CustomImg/CustomImg';
export const ComicDetailsCard = ({ comic }: ComicDetailsCardProps) => {
  const { title, pageCount, prices } = comic;
  return (
    <div className={styles.detailsWrapper}>
      <CustomImg title={title} imgSrc="fs" />
      <h3>{title}</h3>
      <div>
        <p>Price: {prices[0].price}</p>
        <p>Page count: {pageCount}</p>
        <p></p>
      </div>
    </div>
  );
};
