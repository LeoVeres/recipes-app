// export const fetchUser = () => {
//   return {
//     type: '',
//     payload
//   }
// }

const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
}

export const fetchUser = () => {
  return dispatch => {
    // we can do async stuff basically ie ajax
    fetch('http://localhost:8080/user')
    .then(response => response.json())
    .then(obj => dispatch(fetchUserSuccess(obj.user)))
    .catch(error => console.log(error))
  }
}

// export const fetchUser = () => dispatch => {
//
// }
