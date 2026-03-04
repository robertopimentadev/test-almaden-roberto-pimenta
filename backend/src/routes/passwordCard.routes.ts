import { Router } from "express";

const router = Router();

// GET /password-cards
router.get("/", (req, res) => {
    return res.json({ message: "List all password cards" });
});

// POST /password-cards
router.post("/", (req, res) => {
    return res.json({ message: "Create new password card" });
});

// PUT /password-cards/:id
router.put("/:id", (req, res) => {
    return res.json({ message: "Update password card" });
});

// DELETE /password-cards/:id
router.delete("/:id", (req, res) => {
    return res.json({ message: "Delete password card" });
});

export default router;