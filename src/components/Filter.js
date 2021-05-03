import { Component } from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import Input from '@material-ui/core/Input'
import { InputAdornment } from '@material-ui/core'

class Filter extends Component {
  constructor(props) {
    super(props)
      this.state = {
        search: '',
        song: ''
      }
  }

  handleSearch = (value) => {
    const { filterTracks } = this.props
    // console.log (value)
    filterTracks(value)
    this.setState({ search: value })
  }

  render() {
    return (
      <aside >
        <Input 
          id='input-with-icon-adornment'
          startAdornment={
            <InputAdornment position='start'><IoSearchOutline/></InputAdornment>
          }
          type='text'
          className='search'
          placeholder='Filter'
          onChange={(e) => this.handleSearch(e.target.value)}
        />
      </aside>
    )
  }
}

export default Filter