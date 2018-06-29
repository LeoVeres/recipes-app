const initialState = {
  name: '',
  age: '',
  location: ''
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        name: action.user
      }

      // return Object.assign({}, state, {
      //   name: action.name
      // })

    default:
      return state
  }
}

export default userReducer
