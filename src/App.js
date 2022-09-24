import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import BackupList from './components/BackupList';
import DrawButton from './components/DrawButton';
import PutBackButton from './components/PutBackButton';
import RefreshListButton from './components/RefreshListButton';
import ReloadListButton from './components/ReloadListButton';
import ListButton from './components/ListButton';
import Metronome from './components/Metronome';
import MetronomePage from './components/MetronomePage';
import MetronomePageButton from './components/MetronomePageButton';
import ProgressBar from './components/ProgressBar';
import SongList from './components/SongsList';
import ConfirmReload from './components/ConfirmReload';
import SongTempo from './components/SongTempo';
import SongTitle from './components/SongTitle';
import Sound from './sounds/ping.wav';
import './App.css';

//import MetronomeWebAudio from './components/MetronomeWebAudio';
//import ProMetronome from 'react-pro-metronome';


function App() {
  const [list, setList] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [songsTotalNumber, setSongsTotalNumber] = useState(0);
  const [progress, setProgress] = useState(100);
  const [isSongList, setSongList] = useState(false);
  const [isConfirmReload, setConfirmReload] = useState(false);
  const [isMetronomeOn, setIsMetronomeOn] = useState(false);
  const [metronomeInterval, setMetronomeInterval] = useState(null);
  const [isMetronomePage, setIsMetronomePage] = useState(false);

  const audio = new Audio(Sound);


  const getData = () => {
    fetch('https://whattoplay.k-son.eu/songList.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then(list => {
      console.log('List loaded', list);
      console.log('List length: ', list.length);
      setList(list);
      setSongsTotalNumber(list.length);
    })
    .catch(err => {
      console.log("Error", err);
      console.log('Backup List loaded', BackupList);
      setList(BackupList);
      setSongsTotalNumber(BackupList.length);
    })
  };

  useEffect(() => {
    getData();
  },[]);

  useEffect(() => {
    const percentage = Math.round((list.length / songsTotalNumber) * 100);
    setProgress(percentage);
  }, [list, songsTotalNumber]);

  function drawSong() {
    if (list && list.length > 0) {
      const currentList = [...list];
      const index = Math.floor(Math.random()*(list.length));
      const song = currentList[index];
      const filteredList = currentList.filter(el => el !== song);
  
      setList(filteredList);
      setCurrentSong(song);
    }

    if (isMetronomeOn) {
      stopMetronome();
    }
  }

  function putBackSong() {
    if (list && list.length > 0 && currentSong) {
      const currentList = [...list];
      currentList.push(currentSong);

      setList(currentList);
      setCurrentSong(null);
    }

    if (isMetronomeOn) {
      stopMetronome();
    }
  }


  function refreshList() {
    setCurrentSong(null);
    getData();

    if (isMetronomeOn) {
      stopMetronome();
    }
  }

  function chooseSong(title) {
    if (list && list.length > 0) {
      const currentList = [...list];
      const song = currentList.filter(el => el.title === title);
      const filteredList = currentList.filter(el => el.title !== title);
      setList(filteredList);
      setCurrentSong(song[0]);
      toggleSongListVisibility();
    }
  }

  function deleteSong(title) {
    if (list && list.length > 0) {
      const currentList = [...list];
      const filteredList = currentList.filter(el => el.title !== title);
      toggleSongListVisibility();
      setList(filteredList);
    }
  }

  function toggleSongListVisibility() {
    if (list && list.length > 0) {
      if (isSongList) {
        setSongList(false);
      } else {
        setSongList(true);
      }
    }

    if (isMetronomeOn) {
      stopMetronome();
    }
  }

  function toggleConfirmReload() {
    if (isConfirmReload) {
      setConfirmReload(false);
    } else {
      setConfirmReload(true);
    }

    if (isMetronomeOn) {
      stopMetronome();
    }
  }

  function playMetronome() {
    const tempoInterval = (60 / currentSong.bpm) * 1000;
    
    setMetronomeInterval(
      setInterval(() => {
        audio.play();
      }, tempoInterval)
    );

    setIsMetronomeOn(true);
  }

  function stopMetronome() {
    clearInterval(metronomeInterval);
    setIsMetronomeOn(false);
  }

  function toggleMetronomePageVisibility() {
    if (isMetronomePage) {
      setIsMetronomePage(false);
      stopMetronome();
    } else {
      setIsMetronomePage(true);
      stopMetronome();
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          {list.length < songsTotalNumber && list.length > 0 &&
            <ReloadListButton 
              onClick={toggleConfirmReload}
            />
          }
          {isConfirmReload &&
            <ConfirmReload 
              onClick={refreshList}
              closeConfirm={toggleConfirmReload}
            />
          }
          {currentSong ? 
            <SongTitle 
              song={currentSong.title}
            />
            :
            <SongTitle 
              song='Draw or select a song'
            />
          }
          {currentSong && currentSong.bpm &&
            <SongTempo 
              tempo={currentSong.bpm}
            />
          }
          <ProgressBar
            progress={progress}
            songsLeft={list.length}
          />
          {currentSong &&
            <Metronome 
              isPlaying={isMetronomeOn}
              play={playMetronome}
              stop={stopMetronome}
            />
          }
          {list.length > 0 &&
            <>
              <DrawButton 
                onClick={drawSong}
                progress={progress}
              />
              <PutBackButton 
                  onClick={putBackSong}
                  currentSong={currentSong}
                  songList={list}
              />
              <ListButton 
                onClick={toggleSongListVisibility}
                songList={list}
              />
            </>
          }
          {list.length === 0 && 
            <RefreshListButton 
              onClick={refreshList}
            />
          }
          {list.length > 0 && isSongList &&
            <SongList 
              songList={list}
              choose={chooseSong}
              deleteSong={deleteSong}
              closeList={toggleSongListVisibility}
            />
          }
          {currentSong && isMetronomePage &&
            <MetronomePage 
              bpm={currentSong.bpm}
              close={toggleMetronomePageVisibility}
            />
          }
          {currentSong &&
            <MetronomePageButton 
              action={toggleMetronomePageVisibility}
            />
          }

{/*           <ProMetronome
            bpm={95}
            subdivision={2}
            soundEnabled={true}
            soundPattern="31313131"
            render={(props, state) => (
              <div>
                {1}/{4}
              </div>
            )}
          /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
