import express from "express";
import songRouter from "../routes/songs.js";

export const startRest = () => {
    const app = express();

    app.use(express.json());

    app.use("/songs", songRouter);

    app.listen(3000, () => {
        console.log(`Server running on port 3000`);
    })
};