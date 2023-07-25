import React from 'react';

function AddToPlaylist() {
  return (
    <div className="container">
      <h2>Add to Playlist</h2>
      <form className="add-form">
        <input type="text" placeholder="Song name" name="songName" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddToPlaylist;
