const initialState = {
  dogData: [],
  darkMode: false
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_DARK_MODE':
      /*
      { 
        type: 'TOGGLE_DARK_MODE'
      }
      */
      return {...state, darkMode: !state.darkMode}
    case 'UPDATE_DOG_DATA':
      /*
      { 
        type: 'UPDATE_DOG_DATA',
        payload: { dogData: [...]}
      }
      */
      return {...state, dogData: action.payload.dogData}
    default:
      return state
  }
}

export default reducer