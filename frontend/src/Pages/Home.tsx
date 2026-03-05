import { useEffect, useState } from "react";
import type { IPasswordCard } from "../Interfaces/PasswordCard";
import { getCards } from "../Services/api";

export default function Home() {
  const [cards, setCards] = useState<IPasswordCard[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      const data = await getCards();
      setCards(data);
    };

    loadCards();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Password Manager</h1>

      <div className="grid gap-4">
        {cards.map((card) => (
          <div key={card.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{card.name}</h2>
            <p>{card.url}</p>
            <p>{card.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
