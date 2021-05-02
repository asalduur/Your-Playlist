import {Component} from 'react'

class Track extends Component{
  constructor(props){
    super(props)
    this.state={
      editing: false,
      song: ''
    }
  }

  handleChange = (e) => {
    this.setState({ song: e.target.value })
  }

  edit = (e) => {
    const { song } = this.state
    const { id, editTrack } = this.props
    if (e.key === 'Enter' && song.length !== 0) {
      editTrack(id, song)
      this.setState({ editing: false })
    }
  }

  render(){
    const { id, song, artist, album, delTrack } = this.props
    const { editing } = this.state
    console.log (id, song)
    return(
      <div className="track__container">
        {
          editing
          ?
          <input className='editSong' value={this.state.song} onChange={this.handleChange} onKeyPress={this.editTrack} />
          :
          <span className='song'>{song}</span>
        }
        <span className='artist'>{artist}</span>
        <span className='album'>{album}</span>
        <button className='edit' onClick={ () => this.setState({ editing: !editing, song })}>edit</button>
        <button className='delete' onClick={() => delTrack(id)}>X</button>
      </div>
    )
  }
}
export default Track