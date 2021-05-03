import {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      song: '',
      artist: '',
      album: ''
    }
  }

  handleSong = (e) => {
    this.setState({song: e.target.value})
  }

  handleArtist = (e) => {
    this.setState({artist: e.target.value})
  }

  handleAlbum = (e) => {
    this.setState({album: e.target.value})
  }
  
  handleAdd = () => {
    const { song, artist, album } = this.state
    this.props.addTrack (
      song,
      artist,
      album
    )
    this.setState({
      title: '',
      artist: '',
      album: ''
    })
  }

  render() {
    return (
      <div className='form'> 
        <form>
          <label htmlFor='addSong'>song</label>
          <input
            type='text'
            name='song'
            value={this.state.song}
            placeholder='enter song'
            onChange={this.handleSong}
          />
          <label htmlFor='addArtist'>artist</label>
          <input
            type='text'
            name='artist'
            value={this.state.artist}
            placeholder='enter artist'
            onChange={this.handleArtist}
          />
          <label htmlFor='addAlbum'>album</label>
          <input
            type='text'
            name='album'
            value={this.state.album}
            placeholder='enter album'
            onChange={this.handleAlbum}
          />
        </form>
        <button onClick={this.handleAdd}>add track</button>
      </div>
    )
  }
}

export default Form