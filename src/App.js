import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import BackupList from './components/BackupList';
import DrawButton from './components/DrawButton';
import PutBackButton from './components/PutBackButton';
import RefreshListButton from './components/RefreshListButton';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [songsTotalNumber, setSongsTotalNumber] = useState(0);

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


  function drawSong() {
    if (list && list.length > 0) {
      const currentList = [...list];
      const index = Math.floor(Math.random()*(list.length));
      const drawSong = currentList[index];
      const filteredList = currentList.filter(el => el !== drawSong);
  
      console.log(drawSong.title);
      console.log(filteredList);
      setList(filteredList);
      setCurrentSong(drawSong);
    }
  }

  function putBackSong() {
    if (list && list.length > 0 && currentSong) {
      const currentList = [...list];
      currentList.push(currentSong);

      console.log(currentList);
      setList(currentList);
      setCurrentSong(null);
    }
  }

  function refreshList() {
    console.log('REFRESHING');
    setCurrentSong(null);
    getData();
  }


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <div>
            <p>{currentSong ? currentSong.title : 'song'}</p>
            <p>{currentSong ? currentSong.bpm : 'bpm'}</p>
            <p>Songs total: {songsTotalNumber}</p>
          </div>
          <ProgressBar
            total={songsTotalNumber}
            number={list.length}
          />
          <DrawButton 
            onClick={drawSong}
          />
          {currentSong && 
            <PutBackButton 
            onClick={putBackSong}
          />
          }
          {list.length === 0 && 
            <RefreshListButton 
              onClick={refreshList}
            />
          }
      </ThemeProvider>
    </div>
  );
}

export default App;
