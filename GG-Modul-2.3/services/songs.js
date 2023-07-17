import {
    addSong,
    getSongs,
    getAllSongs
} from "../repositories/songs/songs.js";

export const addSongService = (title, artist, url) => {
    const newSong = addSong(title, artist, url)
    if (!newSong) {
        return null;
    }

    return newSong;
};

export const getSongsService = (search) => {
    const song = getSongs(search);
    if (!song) {
        return null;
    }

    return song;
};

export const getAllSongsService = () => {
    const allSongs = getAllSongs();
    if (!allSongs) {
        return null;
    }

    return allSongs;
};