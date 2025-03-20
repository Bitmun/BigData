import { useState } from 'react';

import styles from './styles.module.scss';
import { CustomImgProps } from './type';

import notFoundImg from 'assets/images/not_found_icon.webp';
export const CustomImg = ({ title, imgSrc }: CustomImgProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && (
        <img className={styles.notFoundImg} src={notFoundImg} alt="Not found" />
      )}
      <img
        className={styles.foundImg}
        src={imgSrc}
        alt={title}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={() => {
          if (imgSrc) {
            setImageLoaded(true);
          }
        }}
      />
    </>
  );
};
