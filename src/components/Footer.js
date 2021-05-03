import {BiPlayCircle} from 'react-icons/bi'
import {BiSkipNext} from 'react-icons/bi'
import {BiSkipPrevious} from 'react-icons/bi'
import {IoShuffleOutline} from 'react-icons/io5'
import {IoRepeatOutline} from 'react-icons/io5'
function Footer() {
    return (
      <footer>
        <div className="press-play">
          <IoShuffleOutline />
          <BiSkipPrevious />
          <BiPlayCircle />
          <BiSkipNext />
          <IoRepeatOutline />
        </div>
        <div className="playing">
          
        </div>
      </footer>
    )
  }
  
  export default Footer