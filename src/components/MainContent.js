import React, { Component } from 'react'
import DogForm from './DogForm.js'
import DogImage from './DogImage.js'

import { connect } from 'react-redux'

import './MainContent.css'

class MainContent extends Component {

  render() {

    const { darkMode, dogData } = this.props

    const DogImages = dogData.map((src, index) => (
      <DogImage src={ src } key={ index } />
    ))

    const style = {
      backgroundColor: darkMode ? 'black':  'rgb(235, 235, 235)',
      color: darkMode && 'oldlace'
    }

    return (
      <div className="MainContent"
           style={ style }>
        <p>lorem ipsum</p>
        <DogForm />
        { DogImages }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  darkMode: state.darkMode,
  dogData: state.dogData
})

export default connect(mapStateToProps)(MainContent)