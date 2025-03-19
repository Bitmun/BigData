import { CharacterTileProps } from './type';

export const CharacterTile = ({ character }: CharacterTileProps) => {
  return (
    <div>
      <h3>{character.name}</h3>
      <p>{character.id}</p>
    </div>
  );
};
