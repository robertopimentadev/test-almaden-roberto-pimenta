import fs from "fs";
import path from "path";
import { PasswordCard } from "../models/PasswordCard";

const filePath = path.resolve(__dirname, "../data/cards.json");

export const readCardsFromFile = (): PasswordCard[] => {
    const data = fs.readFileSync(filePath, "utf-8");

    if (!data) {
        return [];
    }

    return JSON.parse(data);
};

export const writeCardsToFile = (cards: PasswordCard[]): void => {
    fs.writeFileSync(filePath, JSON.stringify(cards, null, 2));
};