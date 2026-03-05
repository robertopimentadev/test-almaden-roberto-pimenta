import { useEffect, useRef, useState } from "react";
import { getCards } from "../Services/api";
import type { IPasswordCard } from "../Interfaces/PasswordCard";
import Header from "../Components/Header/Header";
import Card from "../Components/Card/Card";
import Modal from "../Components/Modal/Modal";
import CardModal from "../Components/Modal/CardModal";

export default function Home() {
  const [cards, setCards] = useState<IPasswordCard[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState<IPasswordCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadCards = useRef(async () => {
    try {
      const data = await getCards();
      setCards(data);
    } catch (error) {
      console.error("Error to load cards", error);
    }
  });

  useEffect(() => {
    loadCards.current();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleNewCard() {
    setSelectedCard(null);
    setIsModalOpen(true);
  }

  function handleCardClick(card: IPasswordCard) {
    setSelectedCard(card);
    setIsModalOpen(true);
  }

  function handleSuccess() {
    setIsModalOpen(false);
    loadCards.current();
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header search={search} setSearch={setSearch} onAddCard={handleNewCard} />

      <main className="pt-20">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {filteredCards.map((card) => (
              <Card key={card.id} card={card} onClick={handleCardClick} />
            ))}
          </div>
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CardModal
          key={selectedCard?.id || "new-card"}
          card={selectedCard || undefined}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleSuccess}
        />
      </Modal>
    </div>
  );
}
