import React, { Component } from 'react'
import DogForm from './DogForm.js'
import DogImage from './DogImage.js'

import './MainContent.css'

export default class MainContent extends Component {

  state = {
    dogData: []
  }

  updateDogData = dogData => this.setState({ dogData })

  render() {

    const { darkMode } = this.props

    const DogImages = this.state.dogData.map((src, index) => (
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
        <DogForm darkMode={ darkMode }
                 updateDogData={ this.updateDogData } />
        { DogImages }
      </div>
    )
  }

}
