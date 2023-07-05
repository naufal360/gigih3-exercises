/* Learning async await promise */

const callSongsAsync = async (songPromise) => {
  try {
    const songs = await songPromise;
    console.log("Async await func.");
    console.log("Songs List:");
    songs.forEach((song) => {
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artists[0].name}`);
      console.log(`Duration: ${song.duration}`);
      console.log("---------------------------");
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const songListPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const songs = [
      {
        title: "Save your tears",
        artists: [{ name: "The weeknd" }],
        duration: 200,
      },
      {
        title: "Lathi",
        artists: [{ name: "Weird genius" }],
        duration: 180,
      },
    ];
    // random pick for succesion below equal 20% =  reject
    let number = Math.floor(Math.random() * 10) + 1;
    if (number < 3) {
      reject(new Error("failed to fetch song, chance below equal 20%"));
    }
    resolve(songs);
  }, 2000);
});

/* Call functions */
callSongsAsync(songListPromise);
