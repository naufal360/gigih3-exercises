import React from 'react';
import "./styles.css";

function SongList ({ title, songs, isSong }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <ul className="song-list">
        {songs.map((song, index) => (
          <div>  
            <li key={index}>
              <img src={song.imageUrl} />
            </li>
              <p style={{ fontWeight: 'lighter' }}>{song.name}</p>
              {/* if else songs and mostplayed data */}
              {(() => {
                if (isSong) {
                  return(
                    <p style={{ fontWeight: 'bolder' }}>{song.artist}</p>
                  );
                } else {
                  return(
                    <p style={{ fontWeight: 'bolder' }}>{song.count}</p>
                  );
                }
              })()}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
