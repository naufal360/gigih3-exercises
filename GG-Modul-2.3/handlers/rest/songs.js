import {
    addSongService,
    getSongsService,
    getAllSongsService,
} from "../../services/songs.js";

export const addSongHandler = (req, res) => {
    try {
        const { title, artist, url } = req.body;

        const newSong = addSongService(title, artist, url);

        res.status(201).json({
            data: newSong,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getSongHandler = (req, res) => {
    try {
        const {search} = req.params;

        const theSong = getSongsService(search);

        if (!theSong) {
            return res.status(404).json({
                message: "Song not found!",
            });
        }
        
        res.json({
            data: theSong,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllSongsHandler = (req, res) => {
    try {
        const allSongs = getAllSongsService();

        res.json({
            data: allSongs,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};