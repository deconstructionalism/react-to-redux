import React, { Component } from 'react'

import axios from 'axios'
import './DogForm.css'

export default class DogForm extends Component {

  state = {
    numDogs: 1
  }

  handleInputChange = event => {
    const { value } = event.target
    this.setState({ numDogs: +value })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    const emptyArray = new Array(this.state.numDogs).fill('')

    Promise.all(emptyArray.map(() => this.getDogs()))
      .then(data => data.map(res => res.data.message))
      .then(this.props.updateDogData)
      .catch(console.error)
  }

  getDogs = () => axios.get('https://dog.ceo/api/breeds/image/random')

  render() {

    const { darkMode } = this.props

    const formStyle = {
      backgroundColor: darkMode && 'black',
      border: darkMode && '1px solid oldlace'
    }

    const buttonStyle = {
      backgroundColor: darkMode ? 'rgb(26, 95, 26)' : 'rgb(164, 245, 164)',
      color: darkMode && 'oldlace'
    }

    const inputStyle = {
      color: darkMode && 'white',
      backgroundColor: darkMode && 'black' ,
      border: darkMode && '1px solid oldlace'
    }

    return (
      <form className="DogForm"
            style={ formStyle }
            onSubmit={ this.handleFormSubmit }>
        <legend>Get Some Dogs</legend>
        <div>
          <input style={ inputStyle }
                 type="number"
                 min="1"
                 max="20"
                 value={ this.state.numDogs }
                 onChange={ this.handleInputChange }
                 placeholder="number of dogs"
                />
          <button style={ buttonStyle}
                  type="submit">Get Dogs</button>
        </div>
      </form>
    )
  }
}
