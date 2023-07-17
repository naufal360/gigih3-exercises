import songs from "./json/songs.json" assert {type: "json"};

export const addSong = (title, artist, url) => {
    // set default id and playcount
    const id = songs.length + 1;
    const playcount = 0
    
    // set object of new song
    const newSong = {
        id: id,
        title: title,
        artist: artist,
        playcount: playcount,
        url: url,
    }

    // add song to json
    songs.push(newSong);

    return newSong;
};

export const getSongs = (search) => {
    // set variable data to locate the find data
    let data;

    // search song by search parameter
    if (search) {
        // find by title name
        data = songs.find((song) => song.title.toLowerCase().includes(search.toLowerCase()));
        if (data === undefined) {
            // if title not found, search by artist
            data = songs.find((song) => song.artist.toLowerCase().includes(search.toLowerCase()));
            if (data === undefined) {
                // if song doesn't exist
                return null;
            }
        }
    }

    // add playcount increment after success get song
    songs.map(song => {
        if (song.id === data.id) {
            song.playcount += 1;
        }
    });

    return data;
};

export const getAllSongs = () => {
    // sorting all song by playcount descending
    const allSongs = songs.sort((a, b) => b.playcount - a.playcount);

    return allSongs;
};
