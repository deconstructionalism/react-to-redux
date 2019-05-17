import React from 'react'

import './DogImage.css'

const DogImage = ({ src }) => {
  return (
    <img className="DogImage"
         alt="it's a dog"
         src={ src } />
  )
}

export default DogImage