import React from 'react'

import './NavBar.css'

const NavBar = props => {
  return (
    <nav className="NavBar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <button onClick={ props.toggleDarkMode }>toggle theme</button>
        </li>
      </ul>

    </nav>
  )
}

export default NavBar