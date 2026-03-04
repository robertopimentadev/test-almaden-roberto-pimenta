import { Request, Response } from "express";
import { PasswordCardService } from "../services/passwordCard.service";

const service = new PasswordCardService();

interface IParams {
    id: string;
}

export class PasswordCardController {
    getAll(req: Request, res: Response) {
        const cards = service.getAll();
        return res.status(200).json(cards);
    }

    create(req: Request, res: Response) {
        const { url, name, username, password } = req.body;

        if (!url || !name || !username || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const newCard = service.create({ url, name, username, password });

        return res.status(201).json(newCard);
    }

    update(req: Request<IParams>, res: Response) {
        const { id } = req.params;

        const updated = service.update(id, req.body);

        if (!updated) {
            return res.status(404).json({
                message: "Card not found",
            });
        }

        return res.status(200).json(updated);
    }

    delete(req: Request<IParams>, res: Response) {
        const { id } = req.params;

        const deleted = service.delete(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Card not found",
            });
        }

        return res.status(204).send();
    }
}