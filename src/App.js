import React, {useState, useEffect} from 'react';
import DrawButton from './Components/DrawButton';
import PutBackButton from './Components/PutBackButton';
import RefreshListButton from './Components/RefreshListButton';
import BackupList from './Components/BackupList';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const getData = () => {
    fetch('https://whattoplay.k-son.eu/songList.json')
    .then(response => {
      return response.json();
    })
    .then(list => {
      console.log('List loaded', list);
      setList(list);
    })
    .catch(err => {
      console.log("Error", err);
      setList(BackupList);
      console.log('Backup List loaded', BackupList);
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
      <div>
        <p>{currentSong ? currentSong.title : 'song'}</p>
        <p>{currentSong ? currentSong.bpm : 'bpm'}</p>
      </div>
      <DrawButton 
        onClick={drawSong}
      />
      <PutBackButton 
        onClick={putBackSong}
      />
      <RefreshListButton 
        onClick={refreshList}
      />
    </div>
  );
}

export default App;
