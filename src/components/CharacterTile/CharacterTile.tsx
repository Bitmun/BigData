import styles from './styles.module.scss';
import { CharacterTileProps } from './type';

import { CustomImg } from 'components/CustomImg/CustomImg';

export const CharacterTile = ({
  character,
  handleClick,
  isSelected = false,
}: CharacterTileProps) => {
  const { name, thumbnail } = character;
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;
  const buttonClass = `${styles.charTileWrapper} ${isSelected ? styles.isSelected : ''}`;
  return (
    <button className={buttonClass} onClick={() => handleClick(character)}>
      <CustomImg title={name} imgSrc={imgSrc} />
      <h3>{name}</h3>
    </button>
  );
};
