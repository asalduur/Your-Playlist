import {Component} from 'react'

import axios from 'axios';

import './App.css';
import Playlist from './components/Playlist';
import Form from './components/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tracks: []
    }
  }
  componentDidMount() {
    axios.get('/api/tracks')
    .then((res) => {
      this.setState({tracks: res.data})
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  addTrack = (song, artist, album) => {
    axios.post('api/tracks', {song, artist, album})
    .then((res) => {
      this.setState({tracks: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  editTrack = (id, song) => {
    axios.put(`/api/tracks/${id}`, {song})
    .then((res) => {
      this.setState({tracks: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  delTrack = (id) => {
    axios.delete(`/api/tracks/${id}`)
    .then((res) => {
      this.setState({tracks: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() { 
    return (
      <div className="App">
        <Form addTrack={this.addTrack}/>
        <Playlist 
          tracks={this.state.tracks}
          delTrack={this.delTrack}
          editTrack={this.editTrack}
        />
      </div>
    );
  }
}

export default App;
