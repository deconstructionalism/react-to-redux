import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import MainContent from './components/MainContent.js'

import './App.css'

class App extends Component {

  state = {
    darkMode: true
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode })
  }

  render () {

    const { darkMode } = this.state

    const style = {
      backgroundColor: darkMode && 'rgb(69, 69, 69)'
    }

    return (
      <div className="App"
           style={ style }>
        <NavBar toggleDarkMode={ this.toggleDarkMode }/>
        <MainContent darkMode={ darkMode } />
      </div>
    )
  }
}

export default App

