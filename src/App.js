import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import BackupList from './components/BackupList';
import DrawButton from './components/DrawButton';
import PutBackButton from './components/PutBackButton';
import RefreshListButton from './components/RefreshListButton';
import ReloadListButton from './components/ReloadListButton';
import Metronome from './components/Metronome';
import ProgressBar from './components/ProgressBar';
import SongList from './components/SongsList';
import ListButton from './components/ListButton';
import ConfirmReload from './components/ConfirmReload';
import Sound from './sounds/ping.wav';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [songsTotalNumber, setSongsTotalNumber] = useState(0);
  const [progress, setProgress] = useState(100);
  const [isSongList, setSongList] = useState(false);
  const [isConfirmReload, setConfirmReload] = useState(false);
  const [isMetronomeOn, setIsMetronomeOn] = useState(false);
  const [metronomeInterval, setMetronomeInterval] = useState(null);

  const audio = new Audio(Sound);

  const getData = () => {
    fetch('https://whattoplay.k-son.eu/songList.json')
    .then(response => {
      return response.json();
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
          <div>
            <p>{currentSong ? currentSong.title : 'song'}</p>
            <p>{currentSong ? currentSong.bpm : 'bpm'}</p>
          </div>
          <ProgressBar
            progress={progress}
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
      </ThemeProvider>
    </div>
  );
}

export default App;
