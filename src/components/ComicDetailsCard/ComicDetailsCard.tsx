import { ComicDetailsCardProps } from './type';

export const ComicDetailsCard = ({ comic }: ComicDetailsCardProps) => {
  const { title, pageCount } = comic;
  return (
    <div>
      <h3>{title}</h3>
      <p>{pageCount}</p>
    </div>
  );
};
