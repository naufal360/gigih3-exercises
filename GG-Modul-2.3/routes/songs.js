import express from "express";
import {
    addSongHandler,
    getSongHandler,
    getAllSongsHandler,
} from "../handlers/rest/songs.js";

const router = express.Router();

router.post("/", addSongHandler);
router.get("/:search", getSongHandler);
router.get("/", getAllSongsHandler);

export default router;