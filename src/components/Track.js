import {Component} from 'react'
import {BsTrash} from 'react-icons/bs'
import {BsPencil} from 'react-icons/bs'

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

  handleSave = (e) => {
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
      <div className="track">
        <table>
          <tbody>
            <tr>
              {
                editing
                ?
                <input className='editSong' value={this.state.song} onChange={this.handleChange} onKeyPress={this.handleSave} />
                :
                <td className='song'>{song}</td>
              }
              <td className='artist'>{artist}</td>
              <td className='album'>{album}</td>
              
            </tr>
            
          </tbody>
        </table>
        <button className='edit' onClick={ () => this.setState({ editing: !editing, song })}><BsPencil/></button>
        <button className='delete' onClick={() => delTrack(id)}> <BsTrash /> </button>
      </div>
    )
  }
}
export default Track