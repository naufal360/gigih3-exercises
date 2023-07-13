import express from "express";
import songs from "./songs.json" assert { type: "json" };

const app = express();
app.use(express.json());

app.post("/songs", (req, res) => {
    let newSong = req.body;

    const id = songs.length + 1;

    newSong = {
        id: id,
        ...newSong,
    }

    songs.push(newSong);

    res.status(201).json({
        data: newSong,
    });
});

app.get("/songs/:search", (req, res) => {
    const {search} = req.params;
    let data;

    if (search) {
        data = songs.find((song) => song.title.toLowerCase().includes(search.toLowerCase()));
        if (data === undefined) {
            data = songs.find((song) => song.artist.toLowerCase().includes(search.toLowerCase()));
            if (data === undefined) {
                return res.status(404).json({
                    message: "Song not found",
                });
            }
        }
    }

    res.json({
        data: data,
    });
});

app.get("/songs", (req, res) => {
    res.json({
        data: songs,
    });
});

app.listen(3000, () => {
    console.log(`Listen to port 3000`);
});