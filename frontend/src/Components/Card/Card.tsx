import type { IPasswordCard } from "../../Interfaces/PasswordCard";

interface ICard {
  card: IPasswordCard;
  onClick: (card: IPasswordCard) => void;
}

export default function Card({ card, onClick }: ICard) {
  return (
    <div
      onClick={() => onClick(card)}
      className="
        w-[200px]
        h-[150px]
        bg-white
        border
        rounded-lg
        shadow-sm
        hover:shadow-md 
        hover:scale-[1.03]
        transition
        cursor-pointer
        flex
        flex-col
        justify-between
        p-3
      "
    >
      <div className="flex justify-center items-center flex-1">
        <img
          src={`https://www.google.com/s2/favicons?domain=${card.url}&sz=64`}
          className="w-10 h-10"
        />
      </div>

      <div className="text-center">
        <p className="text-sm font-semibold truncate">{card.name}</p>
        <p className="text-xs text-gray-500 truncate">{card.username}</p>
      </div>
    </div>
  );
}
