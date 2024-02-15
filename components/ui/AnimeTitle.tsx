import { IAnimeResult } from "@consumet/extensions";

interface AnimeTitleProps {
  item: IAnimeResult;
  className: string;
}

const AnimeTitle: React.FC<AnimeTitleProps> = ({ item, className }) => {
  // Destructure the title from the item prop
  const { title } = item;

  return (
    <h3 className={`font-bold text-white ${className}`}>
      {/* Use title.english if it exists, otherwise use title */}
      {typeof title === "string" ? title : title?.english}
    </h3>
  );
};

export default AnimeTitle;
