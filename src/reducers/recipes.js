import {
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR
} from '../actions/recipes';

const initialState = {
  recipes:[
    'sauce'
  ],
  datemade:'5/1/2018',
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_RECIPES_SUCCESS) {
    console.log('fetched recipe data');
      return Object.assign({}, state, {
          recipes: action.data,
          error: null
      });
  } else if (action.type === FETCH_RECIPES_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  return state;
}