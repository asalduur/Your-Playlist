import Header from './Header'
import Track from './Track'

function Playlist(props){
  return (
    <div className='playlist'>
      <Header />
      <div className="tracklist">
        {props.tracks.map((track) => {
        return(
          <Track 
            id={track.id} key={track.id} song={track.song} artist={track.artist} album={track.album}
            delTrack = {props.delTrack}
            editTrack = {props.editTrack}
          />
        )
      })}
      </div>
    </div>
    )
}

export default Playlist