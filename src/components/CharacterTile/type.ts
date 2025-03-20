import { Character } from 'core/types';

export interface CharacterTileProps {
  character: Character;
  handleClick: (char: Character) => void;
  isSelected?: boolean;
}
