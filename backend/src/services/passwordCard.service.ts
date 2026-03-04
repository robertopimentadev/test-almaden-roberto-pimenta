import { v4 as uuidv4 } from "uuid";
import { PasswordCard } from "../models/PasswordCard";
import { readCardsFromFile, writeCardsToFile } from "../utils/fileHandler";

export class PasswordCardService {
    getAll(): PasswordCard[] {
        return readCardsFromFile();
    }

    create(data: Omit<PasswordCard, "id">): PasswordCard {
        const cards = readCardsFromFile();

        const newCard: PasswordCard = {
            id: uuidv4(),
            ...data,
        };

        cards.push(newCard);
        writeCardsToFile(cards);

        return newCard;
    }

    update(id: string, data: Partial<Omit<PasswordCard, "id">>): PasswordCard | null {
        const cards = readCardsFromFile();

        const index = cards.findIndex((card) => card.id === id);

        if (index === -1) {
            return null;
        }

        cards[index] = {
            ...cards[index],
            ...data,
        };

        writeCardsToFile(cards);

        return cards[index];
    }

    delete(id: string): boolean {
        const cards = readCardsFromFile();

        const filteredCards = cards.filter((card) => card.id !== id);

        if (filteredCards.length === cards.length) {
            return false;
        }

        writeCardsToFile(filteredCards);

        return true;
    }
}