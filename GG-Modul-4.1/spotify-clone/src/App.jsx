import './App.css';
import Header from './components/Header';
import './components/styles.css';
import SongList from './components/SongList';
import AddToPlaylist from './components/AddToPlaylist';
import allSongs from './assets/allSongs.json';
import mostPlayedSongs from './assets/mostPlayed.json';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <SongList title="All Hindia Songs" songs={allSongs} isSong={true}/>
        <SongList title="Most Played Songs" songs={mostPlayedSongs} isSong={false}/>
        <AddToPlaylist />
      </main>
      <Footer />
    </div>
  );
}

export default App
