import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import MainContent from './components/MainContent.js'

import { connect } from 'react-redux'

import './App.css'

class App extends Component {

  render () {

    const { darkMode } = this.props

    const style = {
      backgroundColor: darkMode && 'rgb(69, 69, 69)'
    }

    return (
      <div className="App"
           style={ style }>
        <NavBar/>
        <MainContent />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  darkMode: state.darkMode
})

export default connect(mapStateToProps)(App)

