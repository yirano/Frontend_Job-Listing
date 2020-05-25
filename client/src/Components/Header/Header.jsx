import React from 'react'
import bgHeader from '../../images/bg-header-desktop.svg'
import Searchbar from '../Searchbar/Searchbar'

const Header = (props) => {
  return (
    <div className='header'>
      <img src={bgHeader} />
      <Searchbar handleSubmit={props.handleSubmit} handleChange={props.handleChange} search={props.search} location={props.location} />
    </div>
  )
}

export default Header
