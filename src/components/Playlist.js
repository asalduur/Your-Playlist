import Header from './Header'
import Filter from './Filter'
import Track from './Track'
import Footer from './Footer'

function Playlist(props){
  return (
    <main>
      <Header />
      <Filter 
        tracks = {props.tracks}
        filterTracks = {props.filterTracks}
      />
      <table>
        <tbody>
          <tr className='heading'>
            <td className='headingSong'>SONG</td>
            <td className='headingArtist'>ARTIST</td>
            <td className='headingAlbum'>ALBUM</td>
            </tr>
        </tbody>
      </table>
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
      <Footer />
    </main>
    )
}

export default Playlist