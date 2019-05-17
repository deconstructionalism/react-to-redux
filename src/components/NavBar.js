import React from 'react'

import { connect } from 'react-redux'
import './NavBar.css'

const NavBar = props => {

  const handleToggleClick = () => props.dispatch({ type: 'TOGGLE_DARK_MODE'})
  
  return (
    <nav className="NavBar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <button onClick={ handleToggleClick }>toggle theme</button>
        </li>
      </ul>

    </nav>
  )
}

export default connect()(NavBar)