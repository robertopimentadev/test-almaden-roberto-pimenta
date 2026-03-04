import express from "express";
import cors from "cors";
import passwordCardRoutes from "./routes/passwordCard.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => {
    return res.json({
        message: "API is running 🚀",
    });
});

app.use("/password-cards", passwordCardRoutes);

export default app;