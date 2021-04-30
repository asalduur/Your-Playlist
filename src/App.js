import {Component} from 'react'

import axios from 'axios';

import './App.css';
import Playlist from './components/Playlist';

class App extends Component {
  constructor() {
    super()
    this.state = {
      playlist: [
        {
          id: 0,
          song: 'watch your step ft. kelis',
          artist: 'disclosure',
          album: 'energy'
        }
      ]
    }
  }
  componentDidMount() {
    axios.get('/api/tracks')
    .then((res) => {
      this.setState({playlist: res.data})
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  addTrack = (song, artist, album) => {
    axios.post('api/tracks', {song, artist, album})
    .then((res) => {
      this.setState({playlist: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  editTrack = (id, song) => {
    axios.put(`/api/tracks/${id}`, {song})
    .then((res) => {
      this.setState({playlist: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  delTrack = (id) => {
    axios.delete(`/api/tracks/${id}`)
    .then((res) => {
      this.setState({playlist: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() { 
    return (
      <div className="App">
        <Playlist />
      </div>
    );
  }
}

export default App;
