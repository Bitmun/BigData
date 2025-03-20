import styles from './styles.module.scss';
import { CharacterDetailsCardProps } from './type';

import { CustomImg } from 'components';

export const CharacterDetailsCard = ({ char }: CharacterDetailsCardProps) => {
  const { thumbnail, name, comics } = char;
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;

  console.log(char);

  return (
    <div className={styles.charDetailWrapper}>
      <CustomImg imgSrc={imgSrc} title={name} />
      <h2>{name}</h2>
      <div>
        {comics.items.map((comic) => (
          <button key={comic.name}>{comic.name}</button>
        ))}
      </div>
    </div>
  );
};
